import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import ApiClient from "./ApiClient";
import { type Employee } from "../models/Employee";
import { type EmployeeUpdater } from "../models/EmployeeUpdater";
import { FilterFields } from "../models/FilterFields";
import { defaultValues } from "../state-management/filters-store";
import { getIsoDateFromAge } from "../utils/date_functions";
import { SERVICE_BASE_URL } from "../config/service_config";
let axiosInstance = axios.create({
  baseURL: SERVICE_BASE_URL
});
function getConfig(filters: FilterFields): AxiosRequestConfig {
  const { department } = filters;

  return {
    params: {
      department: department === defaultValues.department ? null : department,
    },
  };
 
}
function getPred(filters?: FilterFields): ((empl: Employee) => boolean) | undefined {
  let result: ((empl: Employee) => boolean) | undefined = undefined;
  if (filters) {
    const { minAge, maxAge, minSalary, maxSalary } = filters;
    const maxDate = getIsoDateFromAge(minAge ?? defaultValues.minAge);
    const minDate = getIsoDateFromAge(maxAge ?? defaultValues.maxAge);
    const maxSalaryPred = maxSalary ?? defaultValues.maxSalary;
    const minSalaryPred = minSalary ?? defaultValues.minSalary;
    result = (empl) => {
      const { birthdate, salary } = empl;
      return (
        birthdate >= minDate &&
        birthdate <= maxDate &&
        salary >= minSalaryPred &&
        salary <= maxSalaryPred
      );
    };
  }

  return result;
}
class ApiClientImpl implements ApiClient {
    setAuth(token: string): void {
        axiosInstance = axios.create({
            baseURL: SERVICE_BASE_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
  async getEmployees(filters?: FilterFields): Promise<Employee[]> {
    const config: AxiosRequestConfig | undefined = filters
      ? getConfig(filters)
      : undefined;
    const pred: ((empl: Employee) => boolean )| undefined = getPred(filters);
    const response = await axiosInstance.get<Employee[]>("employees", config);
    let employees = response.data
    if (pred) {
        employees = employees.filter(pred)
    }
    return employees;
  }
  async addEmployee(empl: Employee): Promise<Employee> {
    //Only for test
    if (empl.salary == 5001) {
      throw createAxiosError(401, "Authentication error- Test");
    }
    if (empl.salary == 5002) {
      throw createAxiosError(403, "Access Denied - Test");
    }
    if (empl.salary == 5003) {
      throw createAxiosError(400, "Bad Request - Test");
    }
    const res = await axiosInstance.post<Employee>("employees", empl);
    return res.data;
  }
  async deleteEmployee(id: string): Promise<Employee> {
    const res = await axiosInstance.delete<Employee>(`employees/${id}`);
    return res.data;
  }
  async updateEmployee(updater: EmployeeUpdater): Promise<Employee> {
    const res = await axiosInstance.patch<Employee>(
      `employees/${updater.id}`,
      updater.fields,
    );
    return res.data;
  }
}
const apiClient: ApiClient = new ApiClientImpl();
function createAxiosError(status: number, message: string): AxiosError {
  return new AxiosError(message, "", undefined, undefined, {
    config: { headers: new AxiosHeaders() },
    data: undefined,
    headers: new AxiosHeaders(),
    status,
    statusText: message,
  });
}
export default apiClient;
