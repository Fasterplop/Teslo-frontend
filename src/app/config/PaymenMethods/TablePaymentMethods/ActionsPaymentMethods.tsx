import * as React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { PaymentMethod } from '../config';

interface IActionsPaymentMethodsProps {
	paymentMethod: PaymentMethod;
	deletePaymentMethod(paymentMethod: PaymentMethod): void;
	updatePaymentMethod(paymentMethod: PaymentMethod): void;
	setViewOrdersByPaymentMethod(paymentMethod: PaymentMethod): void;
}

const ActionsPaymentMethods: React.FunctionComponent<IActionsPaymentMethodsProps> = props => {
	const {
		paymentMethod,
		deletePaymentMethod,
		updatePaymentMethod,
		setViewOrdersByPaymentMethod,
	} = props;

	const handleDeletePayment = () => deletePaymentMethod(paymentMethod);
	const handleUpdatePayment = () => updatePaymentMethod(paymentMethod);
	const handleView = () => setViewOrdersByPaymentMethod(paymentMethod);

	return (
		<div className="grid grid-cols-2">
			<button className="btn btn-success btn-xs" onClick={handleView}>
				<FaEye />
			</button>
			<button className="btn btn-primary btn-xs" onClick={handleUpdatePayment}>
				<FaPen />
			</button>
			<button
				className="btn btn-danger btn-xs col-span-2"
				onClick={handleDeletePayment}
			>
				<FaTrash />
			</button>
		</div>
	);
};

export default ActionsPaymentMethods;
