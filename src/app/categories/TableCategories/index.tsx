import DataTable from '@/components/ui/DataTable';
import { useModalStore } from '@/store';
import * as React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Category } from '../config';
import { useFetchCategories } from '../hooks/useFetchCategories';
import headingCategories from './heading';
import mapCategories from './mapCategories';
import { toast } from 'react-toastify';
import { categoriesService } from '@/services/categories-service';

const FormCreateCategory = React.lazy(() => import('../forms/FormCreateCategory'));
const FormUpdateCategory = React.lazy(() => import('../forms/FormUpdateCategory'));
const ModalDeleteCategory = React.lazy(() => import('./ModalDeleteCategory'));

interface ITableCategoriesProps {}

const TableCategories: React.FunctionComponent<ITableCategoriesProps> = props => {
	const {} = props;
	const [showModalDeleteCategory, setShowModalDeleteCategory] = React.useState(false);
	const [stateCategoryDelete, setStateCategoryDelete] = React.useState<Category>(null);
	const [isLoadingDeleteCategory, setIsLoadingDeleteCategory] = React.useState(null);
	const { data: categories, setData, isFetching } = useFetchCategories();

	const setModal = useModalStore(state => state.setModal);
	const closeModal = useModalStore(state => state.closeModal);

	const onUpdateCategory = (category: Category) => {
		const onSuccess = (data: Category) => {
			setData(
				categories.map(c =>
					c.idcategory === data.idcategory ? { ...c, ...data } : c
				)
			);
			closeModal();
		};

		setModal({
			title: 'Update Category',
			children: (
				<React.Suspense fallback={<></>}>
					<FormUpdateCategory
						category={category}
						onSuccess={onSuccess}
					/>
				</React.Suspense>
			),
			size: 'md',
		});
	};

	const onCreateCategory = () => {
		const onSuccess = (data: Category) => {
			setData([data, ...categories]);
			closeModal();
		};

		setModal({
			title: 'Create Category',
			children: (
				<React.Suspense fallback={<></>}>
					<FormCreateCategory onSuccess={onSuccess} />
				</React.Suspense>
			),
		});
	};

	const onCloseModalDelete = () => {
		setShowModalDeleteCategory(false);
		setStateCategoryDelete(null);
	};

	const onDeleteCategory = (category: Category) => {
		setShowModalDeleteCategory(true);
		setStateCategoryDelete(category);
	};

	const onAcceptDeleteCategory = async () => {
		try {
			setIsLoadingDeleteCategory(true);
			await categoriesService.deleteCategory(stateCategoryDelete.idcategory);
			setData(
				categories.filter(
					c => c.idcategory !== stateCategoryDelete.idcategory
				)
			);
			onCloseModalDelete();
			toast.success('Category deleted successfully');
		} catch (error) {
			console.log(error);
			toast.error(
				error.response.data.message ||
					'There was an error deleting the category'
			);
		} finally {
			setIsLoadingDeleteCategory(false);
		}
	};

	return (
		<React.Fragment>
			<DataTable
				buttons={
					<button
						className="btn btn-primary btn-xs"
						onClick={onCreateCategory}
					>
						<FaPlus />
					</button>
				}
				data={mapCategories({
					categories,
					onDeleteCategory,
					onUpdateCategory,
				})}
				heading={headingCategories}
				loading={isFetching}
			/>
			<ModalDeleteCategory
				onAcceptDeleteCategory={onAcceptDeleteCategory}
				onCloseModalDelete={onCloseModalDelete}
				showModalDeleteCategory={showModalDeleteCategory}
				category={stateCategoryDelete}
				isLoading={isLoadingDeleteCategory}
			/>
		</React.Fragment>
	);
};

export default TableCategories;
