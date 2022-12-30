import { User } from "@/app/users/config";

export interface ReturnValuesLogin {
  user: User;
  token: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}
