import ConfirmModal from '@/components/ui/Modal/ConfirmModal';
import * as React from 'react';
import { PaymentMethod } from '../config';

interface IModalDeletePaymentMethodProps {
	showModalDeletePaymentMethod: boolean;
	paymentMethod?: PaymentMethod;
	onCloseModalDelete: () => void;
	onAcceptDeletePaymentMethod: () => void;
	isLoading: boolean;
}

const ModalDeletePaymentMethod: React.FunctionComponent<IModalDeletePaymentMethodProps> = props => {
	const {
		paymentMethod,
		showModalDeletePaymentMethod,
		onAcceptDeletePaymentMethod,
		onCloseModalDelete,
		isLoading,
	} = props;

	return (
		<ConfirmModal
			title={`Are you sure you want to delete this payment method: ${paymentMethod?.title}?`}
			titleModal={'Delete Payment Method'}
			subTitle={'You will not be able to recover this information'}
			showModal={showModalDeletePaymentMethod}
			onClose={onCloseModalDelete}
			onClickButtonAccept={onAcceptDeletePaymentMethod}
			buttonAccepText={'Delete Payment Method'}
			isLoading={isLoading}
			buttonCancelText={'Cancel'}
		/>
	);
};

ModalDeletePaymentMethod.defaultProps = { paymentMethod: {} };

export default ModalDeletePaymentMethod;
