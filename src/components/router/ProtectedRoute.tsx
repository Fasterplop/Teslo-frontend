import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { validPaths } from '@/utils';

const ProtectedRoute = () => {
	const { authenticated, loading } = useAuthStore();

	if (!authenticated && !loading) return <Navigate to={validPaths.home.path} replace />;

	return <Outlet />;
};

export default ProtectedRoute;
