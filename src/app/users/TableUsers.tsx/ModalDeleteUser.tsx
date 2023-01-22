import ConfirmModal from '@/components/ui/Modal/ConfirmModal';
import * as React from 'react';
import { User } from '../config';

interface IModalDeleteUserProps {
	showModalDeleteUser: boolean;
	user?: User;
	onCloseModalDelete: () => void;
	onAcceptDeleteUser: () => void;
	isLoading: boolean;
}

const ModalDeleteUser: React.FunctionComponent<IModalDeleteUserProps> = props => {
	const { user, showModalDeleteUser, onAcceptDeleteUser, onCloseModalDelete, isLoading } =
		props;

	return (
		<ConfirmModal
			title={`Are you sure you want to delete this user: ${user?.firstName} ${user?.lastName}?`}
			titleModal={'Delete User'}
			subTitle={'You will not be able to recover this information'}
			showModal={showModalDeleteUser}
			onClose={onCloseModalDelete}
			onClickButtonAccept={onAcceptDeleteUser}
			buttonAccepText={'Delete User'}
			isLoading={isLoading}
			buttonCancelText={'Cancel'}
		/>
	);
};

ModalDeleteUser.defaultProps = { user: {} };

export default ModalDeleteUser;
