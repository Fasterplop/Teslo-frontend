import Loader from '@/components/ui/Loader';
import { useModalStore } from '@/store';
import * as React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Category } from './config';
import { useFetchCategory } from './hooks/useFetchCategory';
import dayjs from 'dayjs';
import { categoriesService } from '@/services/categories-service';
import { toast } from 'react-toastify';
import { protectedRoutes } from '@/utils';

const FormUpdateCategory = React.lazy(() => import('./forms/FormUpdateCategory'));
const ModalDeleteCategory = React.lazy(() => import('./TableCategories/ModalDeleteCategory'));

interface IViewCategoryPageProps {}

const ViewCategoryPage: React.FunctionComponent<IViewCategoryPageProps> = props => {
	const {} = props;
	const navigate = useNavigate();
	const params = useParams();
	const { data: category, setData, isFetching } = useFetchCategory(params.id);
	const setModal = useModalStore(state => state.setModal);
	const closeModal = useModalStore(state => state.closeModal);
	const [showModalDeleteCategory, setShowModalDeleteCategory] = React.useState(false);
	const [isLoadingDeleteCategory, setIsLoadingDeleteCategory] = React.useState(null);

	const onUpdateCategory = () => {
		const onSuccess = (data: Category) => {
			console.log(data);
			setData({ ...category, ...data });
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

	const onCloseModalDelete = () => {
		setShowModalDeleteCategory(false);
	};

	const onDeleteCategory = () => {
		setShowModalDeleteCategory(true);
	};

	const onAcceptDeleteCategory = async () => {
		try {
			setIsLoadingDeleteCategory(true);
			await categoriesService.deleteCategory(category.idcategory);
			onCloseModalDelete();
			toast.success('Category deleted successfully');
			navigate(protectedRoutes.categories.path);
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

	console.log(isFetching, category);

	if (isFetching) return <Loader loading={true} />;

	if (!category) return <Navigate replace to={protectedRoutes.categories.path} />;

	return (
		<React.Fragment>
			<div className="grid lg:grid-cols-12 lg:gap-8 gap-4">
				<div className="tile lg:col-span-4">
					<div className="flex items-center justify-center mb-4">
						<img
							src={
								category.image ||
								'/img/others/box.png'
							}
							className={'w-32'}
							alt=""
						/>
					</div>
					<div className="flex flex-col justify-center items-center">
						<button
							onClick={onUpdateCategory}
							className="mx-auto w-full btn btn-primary btn-sm"
						>
							Update Category <FaPen className="ml-2" />
						</button>

						<button
							className="mx-auto w-full btn btn-danger btn-sm"
							onClick={onDeleteCategory}
						>
							Delete Category <FaTrash className="ml-2" />
						</button>
					</div>
				</div>
				<div className="tile lg:col-span-8">
					<h4 className="mb-6">{category.title}</h4>
					<div className="text-sm space-y-3">
						<p>
							<span className="font-bold">ID:</span>{' '}
							{category.idcategory}
						</p>

						<p>
							<span className="font-bold">
								Date Created:
							</span>{' '}
							{dayjs(category.dateCreated).format(
								'DD/MM/YYYY HH:mm:ss'
							)}
						</p>

						<p>
							<span className="font-bold">Slug:</span>{' '}
							{category.slug}
						</p>
					</div>
				</div>
			</div>

			<ModalDeleteCategory
				onAcceptDeleteCategory={onAcceptDeleteCategory}
				onCloseModalDelete={onCloseModalDelete}
				showModalDeleteCategory={showModalDeleteCategory}
				category={category}
				isLoading={isLoadingDeleteCategory}
			/>
		</React.Fragment>
	);
};

export default ViewCategoryPage;
