import HeaderDashboard from '@/layouts/HeaderDashboardLayout';
import { protectedRoutes } from '@/utils';
import * as React from 'react';
import TablePaymentMethods from './TablePaymentMethods';

interface IPaymentMethodsPageProps {}

const PaymentMethodsPage: React.FunctionComponent<IPaymentMethodsPageProps> = props => {
	const {} = props;
	return (
		<React.Fragment>
			<HeaderDashboard to={protectedRoutes.settings.path}>
				Settings
			</HeaderDashboard>
			<TablePaymentMethods />
		</React.Fragment>
	);
};

export default PaymentMethodsPage;
