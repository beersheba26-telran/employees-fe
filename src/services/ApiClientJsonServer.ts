import axios, { AxiosRequestConfig } from "axios";
import ApiClient from "./ApiClient";
import { type Employee } from "../models/Employee";
import { type EmployeeUpdater } from "../models/EmployeeUpdater";
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
})
class ApiClientJsonServer implements ApiClient {
    async getEmployees(config?: AxiosRequestConfig): Promise<Employee[]> {
        const response = await axiosInstance.get<Employee[]>("employes", config);
        return response.data
    }
    addEmployee(empl: Employee): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(id: string): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(updater: EmployeeUpdater): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    
}
const apiClient: ApiClient = new ApiClientJsonServer();
export default apiClient;