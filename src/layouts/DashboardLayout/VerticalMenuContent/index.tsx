import * as React from 'react';
import MenuItems from '../data/data-menu';
import '../styles/_menu.css';
import VerticalMenuCollapsedItem from './VerticalMenuCollapsedItem';
import VerticalMenuSingleItem from './VerticalMenuSingleItem';

interface IVerticalMenuContentProps {}

const VerticalMenuContent: React.FC<IVerticalMenuContentProps> = props => {
	const singleMenuItems = MenuItems.filter(item => item.path);
	const collapsedMenuItems = MenuItems.filter(item => item.subNav);

	return (
		<div className="px-4 pb-4 mt-8 flex flex-col">
			<span className="text-gray-500 font-bold select-none mb-2 ml-2">App</span>
			{singleMenuItems.map(menuItem => (
				<VerticalMenuSingleItem item={menuItem} key={menuItem.path} />
			))}

			{collapsedMenuItems.map(menuItem => (
				<VerticalMenuCollapsedItem item={menuItem} key={menuItem.title} />
			))}
		</div>
	);
};

export default VerticalMenuContent;
