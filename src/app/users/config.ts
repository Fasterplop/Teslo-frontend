import React from 'react';

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
	dateCreated?: Date;
}

export interface UserTable extends User {
	actions: React.ReactNode;
	userRol: string;
	isActiveFormatted: React.ReactNode;
	dateCreatedFormatted: string;
	dateCreatedFormattedWithouHour: string;
	fullName: string;
}

export interface UserDto {
	firstName?: string;
	lastName?: string;
	password?: string;
	email?: string;
	phone?: string;
	isActive?: boolean;
	roles?: ValidRol[];
}

export interface PasswordDto {
	password?: string;
	passwwordConfirm?: string;
}
