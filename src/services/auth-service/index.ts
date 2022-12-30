import { axiosClient } from "@/config/axios";
import { LoginUserDto, ReturnValuesLogin } from "./interfaces";

export const authService = {
  LogIn(body: LoginUserDto) {
    return axiosClient.post<ReturnValuesLogin>("/auth/local/signin", body);
  },
};
