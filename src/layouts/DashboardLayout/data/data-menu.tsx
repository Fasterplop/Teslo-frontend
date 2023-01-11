import { ValidRol, ValidRoles } from '@/app/users/config';
import { validPaths } from '@/utils';
import React from 'react';
import { FaBoxes, FaHome, FaUsers } from 'react-icons/fa';
import VerticalMenuIcon, { IVerticalMenuIconProps } from '../VerticalMenuContent/VerticalMenuIcon';

export interface IMenuItem {
	title: string;
	path?: string;
	pathTreeView?: string;
	Icon: React.FunctionComponent<IVerticalMenuIconProps>;
	permissions: ValidRol[] | '*';
	subNav?: Array<{ title: string; path: string }>;
}

const MenuItems: IMenuItem[] = [
	{
		title: 'Dashboard',
		path: validPaths.dashboard.path,
		Icon: props => (
			<VerticalMenuIcon {...props}>
				<FaHome />
			</VerticalMenuIcon>
		),
		permissions: '*',
	},
	{
		title: 'Users',
		Icon: props => (
			<VerticalMenuIcon {...props}>
				<FaUsers />
			</VerticalMenuIcon>
		),
		permissions: [ValidRoles.ADMIN, ValidRoles.SUPER_USER],
		path: validPaths.users.path,
	},

	{
		title: 'Products',
		Icon: props => (
			<VerticalMenuIcon {...props}>
				<FaBoxes />
			</VerticalMenuIcon>
		),
		permissions: '*',
		subNav: [
			{ title: 'Products', path: validPaths.products.path },
			{ title: 'Categories', path: validPaths.categories.path },
		],
	},
];

export default MenuItems;
