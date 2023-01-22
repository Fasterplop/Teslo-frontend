import { ValidRol } from '@/app/users/config';
import { useAuthStore } from '@/store';
import * as React from 'react';
import RenderIf from '../ui/RenderIf';

interface IAuthorityCheckProps {
	children?: React.ReactNode;
	validRoles: ValidRol[] | '*';
}

const AuthorityCheck: React.FunctionComponent<IAuthorityCheckProps> = props => {
	const { validRoles, children } = props;
	const user = useAuthStore(state => state.user);
	const userRoles = user.roles || [];

	if (validRoles === '*') return <>{children}</>;

	const isTrue = userRoles.some(role => validRoles?.includes(role));

	return <RenderIf isTrue={isTrue}>{children}</RenderIf>;
};

export default AuthorityCheck;
