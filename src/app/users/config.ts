export enum ValidRoles {
	ADMIN = 'admin',
	SUPER_USER = 'super-user',
	USER = 'user',
}

export type ValidRol = 'admin' | 'super-user' | 'user';

export interface User {
	iduser?: string;
	email?: string;
	phone?: string;
	firstName?: string;
	lastName?: string;
	password?: string;
	isActive?: boolean;
	token?: string;
	roles?: ValidRol[];
}
