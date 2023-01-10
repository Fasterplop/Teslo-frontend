import { User } from "@/app/users/config";

export interface ReturnValuesLogin {
  user: User;
  token: string;
}

export interface LoginUserDto {
  username: string;
  password: string;
}

export interface SignUpUserDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  token: string;
}
