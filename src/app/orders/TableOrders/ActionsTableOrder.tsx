import AuthorityCheck from '@/components/AuthorityCheck';
import { protectedRoutes } from '@/utils';
import * as React from 'react';
import { FaEye, FaPen, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Order } from '../config';
import { ValidRoles } from '@/app/users/config';

interface IActionsTableOrderProps {
	order: Order;
	onClickUpdateOrder: (order: Order) => void;
	onClickViewUser(order: Order): void;
}

const ActionsTableOrder: React.FunctionComponent<IActionsTableOrderProps> = props => {
	const { order, onClickUpdateOrder, onClickViewUser } = props;

	const handleUpdateOrder = () => onClickUpdateOrder(order);
	const handleViewUser = () => onClickViewUser(order);
	return (
		<React.Fragment>
			<Link
				to={protectedRoutes.invoiceOrder.fnPath(order.idorder)}
				className="btn btn-success btn-xs"
			>
				<FaEye />
			</Link>
			<AuthorityCheck validRoles={[ValidRoles.ADMIN, ValidRoles.SUPER_USER]}>
				<button className="btn btn-warning btn-xs" onClick={handleViewUser}>
					<FaUser />
				</button>
				<button
					className="btn btn-primary btn-xs"
					onClick={handleUpdateOrder}
				>
					<FaPen />
				</button>
			</AuthorityCheck>
		</React.Fragment>
	);
};

export default ActionsTableOrder;
