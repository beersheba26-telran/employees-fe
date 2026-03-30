import axios, { AxiosError } from "axios";
import { LoginData, UserData } from "../models/AuthData";
import AuthService from "./AuthService";
import { AUTH_SERVICE_BASE_URL } from "../config/service_config";
import apiClient from "./ApiClientImpl";
const axiosInstance = axios.create({
    baseURL: AUTH_SERVICE_BASE_URL
})
class AuthServiceImpl implements AuthService {
    async login(loginData: LoginData): Promise<UserData> {
       const resp = await axiosInstance.post<UserData & {token: string}>('/accounts/login', loginData)
       const user = resp.data;
       apiClient.setAuth(user.token)
       return {username: user.username, role: user.role}
    }
    logout(): Promise<void> {
        return Promise.resolve()
    }
    
}
const authService = new AuthServiceImpl()
export default authService