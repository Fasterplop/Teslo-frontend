import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '@/app/login';
import ProtectedRoute from './ProtectedRoute';
import { protectedRoutes, validPaths } from '@/utils';
import Loader from '../ui/Loader';
import AppRoute from './AppRoute';

const DashboardLayout = React.lazy(() => import('@/layouts/DashboardLayout'));

interface IAppRouterProps {}

const AppRouter: React.FunctionComponent<IAppRouterProps> = props => {
	const {} = props;
	return (
		<Routes>
			<Route index element={<LoginPage />} />
			<Route path="/" element={<ProtectedRoute />}>
				<Route
					path="/"
					element={<Navigate replace to={validPaths.home.path} />}
				/>
				{Object.keys(protectedRoutes).map((key, idx) => (
					<Route
						key={key + idx}
						path={protectedRoutes[key].path}
						element={
							<React.Suspense
								fallback={<Loader loading={true} />}
							>
								<DashboardLayout>
									<AppRoute
										component={
											protectedRoutes[
												key
											].component
										}
									/>
								</DashboardLayout>
							</React.Suspense>
						}
					/>
				))}

				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default AppRouter;
