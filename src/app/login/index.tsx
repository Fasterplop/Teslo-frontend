import AuthLayout from '@/layouts/AuthLayout';
import * as React from 'react';
import SignInForm from './SignInForm';

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
	return (
		<AuthLayout>
			<div className="mb-8">
				<h3 className="mb-1">Welcome back!</h3>
				<p>Please enter your credentials to log in!</p>
			</div>
			<SignInForm />
		</AuthLayout>
	);
};

export default LoginPage;
