import { AxiosError, AxiosRequestConfig } from "axios";
import { Employee } from "../../models/Employee";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../ApiClientImpl";
import { FilterFields } from "../../models/FilterFields";

export default function useEmployees(filters?: FilterFields): {employees: Employee[], isLoading: boolean} {
        const queryKey: any[] = ["employees"];
        filters && queryKey.push(filters)
        const result = useQuery<Employee[], AxiosError>({
            queryKey,
            queryFn: () => apiClient.getEmployees(filters),
            staleTime: 3600_000
        })
        if (result.error) {
            throw result.error
        }
        return {employees: result.data || [],  isLoading: result.isLoading}
     }