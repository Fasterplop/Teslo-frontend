import * as React from 'react';
import classNames from 'classnames';
import './styles/_header.css';
import '@/styles/avatar.styles.css';
import { HiOutlineUser, HiOutlineLogout } from 'react-icons/hi';

import Dropdown from '@/components/ui/Dropdown';
import DropdownItem from '@/components/ui/Dropdown/DropdownItem';
import NavToggle from './NavToggle';
import { useDashboardStore } from './store/dashboardStore';
import { useAuthStore } from '@/store';

interface IHeaderDashboardProps {}

const HeaderDashboard: React.FC<IHeaderDashboardProps> = props => {
	const {} = props;
	const { isCollapsed, toggleCollapse } = useDashboardStore();
	const logOut = useAuthStore(state => state.logOut);
	return (
		<header className={classNames('shadow header')}>
			<div className={classNames('header-wrapper h-16')}>
				<div className="header-action header-action-start">
					<NavToggle onClick={toggleCollapse} toggled={isCollapsed} />
				</div>

				<Dropdown
					displayButton={
						<div className="header-action header-action-end">
							<div className="avatar avatar-squared avatar-bordered border-2 avatar-group place-content-center">
								<HiOutlineUser className=" text-xl h-auto " />
							</div>
							<div className="ml-2 text-sm pr-4">
								<div className=""> Admin </div>
								<div className=" font-bold">
									{' '}
									User01{' '}
								</div>
							</div>
						</div>
					}
				>
					<DropdownItem>
						<div className="flex flex-row">
							<HiOutlineUser className="h-auto text-xl avatar avatar-squared avatar-bordered place-content-center rounded-full p-1 border-2" />
							<div className="ml-2 text-xs mt-1 pr-4">
								<div className="font-semibold">
									{' '}
									User01{' '}
								</div>
								<div> User01@gmail.com </div>
							</div>
						</div>
					</DropdownItem>

					<div className="border-[1px] mx-2"></div>

					<DropdownItem>
						<div
							className="flex flex-row items-center text-sm"
							onClick={logOut}
						>
							<div className="">
								<HiOutlineLogout className="h-auto text-lg " />
							</div>
							<div className="ml-2 pr-4">
								<div className="font-bold">
									{' '}
									Sign Out{' '}
								</div>
							</div>
						</div>
					</DropdownItem>
				</Dropdown>
			</div>
		</header>
	);
};

export default HeaderDashboard;
