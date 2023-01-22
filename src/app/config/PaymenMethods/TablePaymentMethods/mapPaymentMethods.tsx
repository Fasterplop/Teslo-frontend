import { PaymentMethod, PaymentMethodTable } from '../config';
import ActionsPaymentMethods from './ActionsPaymentMethods';

interface IMapPaymentMethodsProps {
	paymentMethods: PaymentMethod[];
	deletePaymentMethod(paymentMethod: PaymentMethod): void;
	updatePaymentMethod(paymentMethod: PaymentMethod): void;
}

const mapPaymentMethods = (props: IMapPaymentMethodsProps): PaymentMethodTable[] => {
	const { paymentMethods, updatePaymentMethod, deletePaymentMethod } = props;

	return paymentMethods.map(paymentMethod => ({
		...paymentMethod,
		actions: (
			<ActionsPaymentMethods
				paymentMethod={paymentMethod}
				updatePaymentMethod={updatePaymentMethod}
				deletePaymentMethod={deletePaymentMethod}
			/>
		),
	}));
};

export default mapPaymentMethods;
