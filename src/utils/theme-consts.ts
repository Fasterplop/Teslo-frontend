export const SIDE_NAV_WIDTH = 250;
export const SIDE_NAV_COLLAPSED_WIDTH = 80;
export const SIDE_NAV_CONTENT_GUTTER = 'px-4';
export const LOGO_X_GUTTER = 'px-6';

/* 

const SidebarDashboard: React.FC<ISidebarDashboardProps> = props => {
	const { isOpen, setIsOpen } = props;

	const openDrawer = () => setIsOpen(true);
	const onDrawerClose = () => setIsOpen(false);
	const { mobile, desktop } = useResponsive();

	return (
		<React.Fragment>
			<RenderIf isTrue={mobile}>
				<div className="text-2xl" onClick={openDrawer}>
					<NavToggle
						onClick={() => setIsOpen(!isOpen)}
						toggled={isOpen}
					/>
				</div>
				<Drawer
					title="Navigation"
					isOpen={isOpen}
					onClose={onDrawerClose}
					bodyClass={classNames('side-nav-light', 'p-0')}
					width={330}
					placement={'left'}
				>
					<React.Suspense fallback={<></>}>
						<RenderIf isTrue={isOpen}>
							<VerticalMenuContent />
						</RenderIf>
					</React.Suspense>
				</Drawer>
			</RenderIf>

			<RenderIf isTrue={desktop}>
				<div
					style={isOpen ? sideNavCollapseStyle : sideNavStyle}
					className={classNames(
						'side-nav',
						!isOpen && 'side-nav-expand'
					)}
				>
					<div className="side-nav-header">
						<Logo
							type={isOpen ? 'streamline' : 'full'}
							gutter={isOpen ? 'px-4' : 'px-6'}
						/>
					</div>
					{/* 		{isOpen ? (
					menuContent
				) : (
					<div className="side-nav-content">
						<ScrollBar autoHide direction={''}>
							{menuContent}
						</ScrollBar>
					</div>
				)} 
				</div>
			</RenderIf>
		</React.Fragment>
	);
};

export default SidebarDashboard;
 */
