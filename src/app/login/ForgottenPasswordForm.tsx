import { InputFormik } from '@/components/@forms';
import ButtonFormik from '@/components/@forms/ButtonFormik';
import { useModalStore } from '@/store';
import { Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface IForgottenPasswordFormProps {}

const INITIAL_VALUES = {
	email: '',
};

const validationSchema = Yup.object({
	email: Yup.string().required('Email is required').email('Email not valid'),
});

const ForgottenPasswordForm: React.FunctionComponent<IForgottenPasswordFormProps> = props => {
	const {} = props;
	const { closeModal } = useModalStore();

	const onSubmit = (values: typeof INITIAL_VALUES) => {
		try {
			closeModal();
		} catch (error) {}
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<InputFormik
					name="email"
					label="Email"
					placeholder="Type your email"
					showSuccess={false}
				/>

				<ButtonFormik full className="btn-primary">
					Send Email
				</ButtonFormik>
			</Form>
		</Formik>
	);
};

export default ForgottenPasswordForm;
