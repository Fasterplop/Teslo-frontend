import { InputFormik } from '@/components/@forms';
import { categoriesService } from '@/services/categories-service';
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { toast } from 'react-toastify';
import { Category, CategoryDto } from '../config';
import * as yup from 'yup';
import ButtonFormik from '@/components/@forms/ButtonFormik';

interface IFormCreateCategoryProps {
	category: Category;
	onSuccess?: (data: Category) => void;
}

const validationSchema = yup.object({ title: yup.string().required('Category name is required') });

const FormCreateCategory: React.FunctionComponent<IFormCreateCategoryProps> = props => {
	const { onSuccess, category } = props;

	const initialValues: CategoryDto = {
		title: category.title,
	};

	const [errorMessage, setErrorMessage] = useTimeOutMessage();

	const onSubmit = async (data: CategoryDto) => {
		try {
			console.log(category.idcategory);
			const req = await categoriesService.updateCategory(
				category.idcategory,
				data
			);
			console.log(req.data);
			if (onSuccess) onSuccess(req.data.category);
			toast.success('Category updated successfully!');
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message || 'Error creating category');
		}
	};

	return (
		<Formik
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			initialValues={initialValues}
		>
			<Form>
				<InputFormik
					name="title"
					placeholder="Type the name of the category"
					label={'Category name'}
					forceErrorMessage={errorMessage}
				/>

				<ButtonFormik className="btn-primary btn-sm" full>
					Update category
				</ButtonFormik>
			</Form>
		</Formik>
	);
};

export default FormCreateCategory;
