import * as React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { PaymentMethod } from '../config';

interface IActionsPaymentMethodsProps {
	paymentMethod: PaymentMethod;
	deletePaymentMethod(paymentMethod: PaymentMethod): void;
	updatePaymentMethod(paymentMethod: PaymentMethod): void;
}

const ActionsPaymentMethods: React.FunctionComponent<IActionsPaymentMethodsProps> = props => {
	const { paymentMethod, deletePaymentMethod, updatePaymentMethod } = props;

	const handleDeletePayment = () => deletePaymentMethod(paymentMethod);
	const handleUpdatePayment = () => updatePaymentMethod(paymentMethod);

	return (
		<React.Fragment>
			<button className="btn btn-primary btn-xs" onClick={handleUpdatePayment}>
				<FaPen />
			</button>
			<button className="btn btn-danger btn-xs" onClick={handleDeletePayment}>
				<FaTrash />
			</button>
		</React.Fragment>
	);
};

export default ActionsPaymentMethods;
