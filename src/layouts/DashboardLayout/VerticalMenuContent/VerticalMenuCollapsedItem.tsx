import AuthorityCheck from '@/components/ui/AuthorityCheck';
import classNames from 'classnames';
import * as React from 'react';
import { FaChevronDown, FaCircleNotch } from 'react-icons/fa';
import { IMenuItem } from '../data/data-menu';
import { Collapse } from 'react-collapse';
import { useDashboardStore } from '../store/dashboardStore';
import { Link } from 'react-router-dom';
import Dropdown from '@/components/ui/Dropdown';
import DropdownItem from '@/components/ui/Dropdown/DropdownItem';

interface IDefaultItemProps {
	item: IMenuItem;
}

const DefaultItem: React.FunctionComponent<IDefaultItemProps> = props => {
	const { item } = props;
	const isCollapsed = useDashboardStore(state => state.isCollapsed);
	const setExpanded = useDashboardStore(state => state.setExpanded);
	const expanded = useDashboardStore(state => state.expanded);
	const isExpanded = expanded === item.title;

	const toggleExpand = () => setExpanded(isExpanded ? null : item.title);

	return (
		<React.Fragment>
			<div
				className={classNames(
					'px-3 py-2.5 flex items-center justify-between text-sm hover:bg-gray-200 transition rounded-xl cursor-pointer'
				)}
				onClick={toggleExpand}
			>
				<span className="flex items-center">
					<item.Icon />
					{!isCollapsed ? null : item.title}
				</span>

				<FaChevronDown
					className={classNames(
						'text-xs transition',
						isExpanded && 'rotate-90'
					)}
				/>
			</div>
			<div
				className={classNames(
					'ml-3 bg-gray-100 mt-1 rounded-lg',
					!isCollapsed && 'hidden'
				)}
			>
				<Collapse isOpened={isExpanded}>
					<div>
						{item.subNav.map(nav => (
							<Link
								to={nav.path}
								className="px-3 py-2.5 flex items-center text-sm hover:bg-gray-200 transition cursor-pointer rounded-xl"
								key={nav.path}
							>
								<FaCircleNotch className="mr-1.5 text-xs" />{' '}
								{nav.title}
							</Link>
						))}
					</div>
				</Collapse>
			</div>
		</React.Fragment>
	);
};

interface ICollapsedItemProps {
	item: IMenuItem;
}

const CollapsedItem: React.FunctionComponent<ICollapsedItemProps> = props => {
	const { item } = props;
	return (
		<Dropdown
			placement="right"
			showOnHover
			displayButton={
				<span className="px-3 py-2.5 flex items-center justify-center hover:bg-gray-200 transition rounded-xl">
					<item.Icon />
				</span>
			}
		>
			{item.subNav.map(subNavItem => (
				<DropdownItem className="flex items-center" key={subNavItem.title}>
					<FaCircleNotch className="mr-1 text-xs" />{' '}
					<Link to={subNavItem.path}>{subNavItem.title}</Link>
				</DropdownItem>
			))}
		</Dropdown>
	);
};

interface IVerticalMenuCollapsedItemProps {
	item: IMenuItem;
}

const VerticalMenuCollapsedItem: React.FC<IVerticalMenuCollapsedItemProps> = props => {
	const { item } = props;
	const isCollapsed = useDashboardStore(state => state.isCollapsed);

	return (
		<AuthorityCheck validRoles={item.permissions}>
			{!isCollapsed ? <CollapsedItem item={item} /> : <DefaultItem item={item} />}
		</AuthorityCheck>
	);
};

export default VerticalMenuCollapsedItem;

/* const CollapsedItem = ({nav, onLinkClick, userAuthority, direction}) => {

	const menuItem = (
		<MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
			<VerticalMenuIcon icon={nav.icon} />
		</MenuItem>
	)

	return (
		<AuthorityCheck 
			userAuthority={userAuthority} 
			authority={nav.authority}
		>
			<Dropdown 
				trigger="hover" 
				renderTitle={menuItem} 
				placement={direction === 'rtl' ? 'middle-end-top' : 'middle-start-top'}
			>
				{
					nav.subMenu.map(subNav => (
						<AuthorityCheck 
							userAuthority={userAuthority} 
							authority={subNav.authority}
							key={subNav.key}
						>
							<Dropdown.Item eventKey={subNav.key}> 
								{subNav.path 
									? 
									<Link 
										className="h-full w-full flex items-center" 
										onClick={() => onLinkClick?.(
											{
												key: subNav.key,
												title: subNav.title,
												path: subNav.path,
											}
										)} 
										to={subNav.path}
									>
										<span>
											<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
										</span>
									</Link>
									: 
									<span>
										<Trans i18nKey={subNav.translateKey} defaults={subNav.title} />
									</span>
								}
							</Dropdown.Item>
						</AuthorityCheck>
					))
				}
			</Dropdown>
		</AuthorityCheck>
	)
} */
/* 
const VerticalCollapsedMenuItem = ({sideCollapsed, ...rest}) => {

	return sideCollapsed ? <CollapsedItem {...rest} /> : <DefaultItem {...rest} />
}

export default VerticalCollapsedMenuItem
 */
