import ConfirmModal from '@/components/ui/Modal/ConfirmModal';
import * as React from 'react';
import { Category } from '../config';

interface IModalDeleteCategoryProps {
	showModalDeleteCategory: boolean;
	category?: Category;
	onCloseModalDelete: () => void;
	onAcceptDeleteCategory: () => void;
	isLoading: boolean;
}

const ModalDeleteCategory: React.FunctionComponent<IModalDeleteCategoryProps> = props => {
	const {
		category,
		showModalDeleteCategory,
		onAcceptDeleteCategory,
		onCloseModalDelete,
		isLoading,
	} = props;

	return (
		<ConfirmModal
			title={`Are you sure you want to delete this category: ${category?.title}?`}
			titleModal={'Delete Category'}
			subTitle={'You will not be able to recover this information'}
			showModal={showModalDeleteCategory}
			onClose={onCloseModalDelete}
			onClickButtonAccept={onAcceptDeleteCategory}
			buttonAccepText={'Delete Category'}
			isLoading={isLoading}
			buttonCancelText={'Cancel'}
		/>
	);
};

ModalDeleteCategory.defaultProps = { category: {} };

export default ModalDeleteCategory;
