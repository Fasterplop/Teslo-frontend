import { User, UserDto } from '@/app/users/config';

export interface ReturnValuesLogin {
	user: User;
	token: string;
}

export interface LoginUserDto {
	username: string;
	password: string;
}

export interface SignUpUserDto extends UserDto {}
