import { ValidRol, ValidRoles } from '@/app/users/config';
import React from 'react';

export const APP_NAME = 'Teslo';
export const DAY_DURATION = 86400000;
export const API_URL = import.meta.env.VITE_API_URL;

export const breakpoints = {
	mobile: 0,
	sm: 640,
	md: 748,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
};

export const formatter = new Intl.NumberFormat('en', {
	maximumFractionDigits: 2,
	minimumFractionDigits: 0,
	style: 'currency',
	currency: 'USD',
});

interface PageProps {
	path: string;
	authoritys: ValidRol[] | '*';
	component: React.LazyExoticComponent<React.FunctionComponent<any>>;
	fnPath?(query: string | number): string;
}

export const protectedRoutes = {
	dashboard: {
		path: '/dashboard',
		component: React.lazy(() => import('@/app/dashboard')),
		authoritys: '*',
	} as PageProps,
	users: {
		path: '/users',
		component: React.lazy(() => import('@/app/users')),
		authoritys: [ValidRoles.ADMIN, ValidRoles.SUPER_USER],
	} as PageProps,
	products: {
		path: '/products',
		component: React.lazy(() => import('@/app/users')),
		authoritys: [ValidRoles.ADMIN, ValidRoles.SUPER_USER],
	} as PageProps,
	categories: {
		path: '/categories',
		component: React.lazy(() => import('@/app/categories')),
		authoritys: [ValidRoles.ADMIN, ValidRoles.SUPER_USER],
	} as PageProps,
	categoriesPage: {
		fnPath: (query: string | number) => `/categories/${query}`,
		path: '/categories/:id',
		component: React.lazy(() => import('@/app/categories/ViewCategory')),
		authoritys: [ValidRoles.ADMIN, ValidRoles.SUPER_USER],
	} as PageProps,
};

export const publicRoutes = {
	home: {
		path: '/',
		component: React.lazy(() => import('@/app/login')),
		authoritys: '*',
	} as PageProps,
};

export const validPaths = {
	...protectedRoutes,
	...publicRoutes,
};
