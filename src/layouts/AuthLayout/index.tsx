import * as React from 'react';
import AuthSide from './AuthSide';
import { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthProvider';

interface IAuthLayoutProps {
	children?: React.ReactNode;
}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = props => {
	const { authenticated } = useAuthContext();

	useEffect(() => {}, [authenticated]);
	return (
		<div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
			<AuthSide>{props.children}</AuthSide>
		</div>
	);
};

export default AuthLayout;
