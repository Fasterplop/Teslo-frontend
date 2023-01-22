import { Order } from '@/app/orders/config';
import TableOrders from '@/app/orders/TableOrders';
import { HeaderDataTable } from '@/components/ui/DataTable';
import * as React from 'react';

interface ITableOrdersDashboardProps {
	orders: Order[];
	setOrders(orders: Order[]): void;
}

const heading: HeaderDataTable[] = [
	{ title: 'ID', field: 'idorder' },
	{ title: 'Full name', field: 'fullName' },
	{ title: 'Date', field: 'dateCreatedFormatted' },
	{ title: 'Total', field: 'totalFormatted', center: true },
	{ title: 'Payment Method', field: 'paymentMethod.title' },
	{ title: 'status', field: 'badgeStatus', center: true },
	{ title: 'Actions', field: 'actions', center: true },
];

const TableOrdersDashboard: React.FunctionComponent<ITableOrdersDashboardProps> = props => {
	const { orders, setOrders } = props;
	return (
		<TableOrders
			orders={orders}
			setOrders={setOrders}
			isFetching={false}
			showPagination={false}
			showSearch={false}
			heading={heading}
		/>
	);
};

export default TableOrdersDashboard;
