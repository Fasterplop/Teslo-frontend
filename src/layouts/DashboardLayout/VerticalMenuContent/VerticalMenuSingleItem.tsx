import AuthorityCheck from '@/components/ui/AuthorityCheck';
import RenderIf from '@/components/ui/RenderIf';
import ToolTip from '@/components/ui/Tooltip';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../data/data-menu';
import { useDashboardStore } from '../store/dashboardStore';

interface ICollpasedItemProps {
	title: string;
	children?: React.ReactNode;
}

const CollpasedItem: React.FunctionComponent<ICollpasedItemProps> = props => {
	const { title, children } = props;
	return (
		<ToolTip placement="right" message={title}>
			{children}
		</ToolTip>
	);
};

interface IDefaultItemProps {
	item: IMenuItem;
}

const DefaultItem: React.FunctionComponent<IDefaultItemProps> = props => {
	const { item } = props;
	const { isCollapsed } = useDashboardStore();
	return (
		<Link
			to={item.path}
			className="flex items-center h-full text-sm w-full px-3 rounded-lg hover:bg-gray-200 py-2.5 transition"
		>
			<item.Icon /> {isCollapsed ? item.title : null}
		</Link>
	);
};

interface IVerticalMenuSingleItemProps {
	item: IMenuItem;
}

const VerticalMenuSingleItem: React.FunctionComponent<IVerticalMenuSingleItemProps> = props => {
	const { item } = props;
	const { isCollapsed } = useDashboardStore();

	return (
		<AuthorityCheck validRoles={item.permissions}>
			<RenderIf isTrue={!isCollapsed}>
				<CollpasedItem title={item.title}>
					<DefaultItem item={item} />
				</CollpasedItem>
			</RenderIf>
			<RenderIf isTrue={isCollapsed}>
				<DefaultItem item={item} />
			</RenderIf>
		</AuthorityCheck>
	);
};

export default VerticalMenuSingleItem;

/* import React from 'react';
import { Menu, Tooltip } from 'components/ui';
import VerticalMenuIcon from './VerticalMenuIcon';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { AuthorityCheck } from 'components/shared';

const { MenuItem } = Menu;

const CollapsedItem = ({ title, translateKey, children, direction }) => {
	const { t } = useTranslation();

	return (
		<Tooltip
			title={t(translateKey) || title}
			placement={direction === 'rtl' ? 'left' : 'right'}
		>
			{children}
		</Tooltip>
	);
};

const DefaultItem = props => {
	const { nav, onLinkClick, sideCollapsed, userAuthority } = props;

	return (
		<AuthorityCheck userAuthority={userAuthority} authority={nav.authority}>
			<MenuItem key={nav.key} eventKey={nav.key} className="mb-2">
				<Link
					to={nav.path}
					onClick={() =>
						onLinkClick?.({
							key: nav.key,
							title: nav.title,
							path: nav.path,
						})
					}
				>
					<VerticalMenuIcon icon={nav.icon} />
					{!sideCollapsed && (
						<span>
							<Trans
								i18nKey={nav.translateKey}
								defaults={nav.title}
							/>
						</span>
					)}
				</Link>
			</MenuItem>
		</AuthorityCheck>
	);
};

const VerticalSingleMenuItem = ({ nav, onLinkClick, sideCollapsed, userAuthority, direction }) => {
	return (
		<AuthorityCheck userAuthority={userAuthority} authority={nav.authority}>
			{sideCollapsed ? (
				<CollapsedItem
					title={nav.title}
					translateKey={nav.translateKey}
					direction={direction}
				>
					<DefaultItem
						nav={nav}
						sideCollapsed={sideCollapsed}
						onLinkClick={onLinkClick}
						userAuthority={userAuthority}
					/>
				</CollapsedItem>
			) : (
				<DefaultItem
					nav={nav}
					sideCollapsed={sideCollapsed}
					onLinkClick={onLinkClick}
					userAuthority={userAuthority}
				/>
			)}
		</AuthorityCheck>
	);
};

export default VerticalSingleMenuItem; */
