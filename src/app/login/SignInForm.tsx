import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage';
import * as React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { InputFormik } from '@/components/@forms';
import { LoginUserDto } from '@/services/auth-service/interfaces';
import { authService } from '@/services/auth-service';
import { useAuthContext } from '@/context/AuthProvider';
import { useModal } from '@/context/ModalProvider';
import ButtonFormik from '@/components/@forms/ButtonFormik';

const ForgottenPasswordForm = React.lazy(() => import('./ForgottenPasswordForm'));

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Please enter your user name'),
	password: Yup.string().required('Please enter your password'),
});

const INITIAL_VALUES: LoginUserDto = {
	username: '',
	password: '',
};

interface ISignInFormProps {}

const SignInForm: React.FunctionComponent<ISignInFormProps> = props => {
	const {} = props;
	const { initAuthenticate } = useAuthContext();
	const [message, setMessage] = useTimeOutMessage();
	const { setModal } = useModal();

	const onSubmit = async (values: LoginUserDto) => {
		try {
			const req = await authService.LogIn(values);
			initAuthenticate(req.data);
			console.log(req.data);
		} catch (error) {
			console.log(error);
		}
	};

	const openForgottenPasswordModal = () => {
		setModal({
			title: 'Forgot Password',
			children: (
				<React.Suspense fallback={<></>}>
					<ForgottenPasswordForm />
				</React.Suspense>
			),
		});
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<Form>
				<InputFormik
					name="username"
					label="Username"
					placeholder="Type your username"
					showSuccess={false}
				/>

				<InputFormik
					name="password"
					type="password"
					label="Password"
					placeholder="Type your password"
					autoComplete="off"
					showSuccess={false}
				/>

				<div className="form-group">
					<ButtonFormik className="btn-primary" full>
						Sign In
					</ButtonFormik>
				</div>

				<p className="text-center">
					Have you forgotten your{' '}
					<button
						type="button"
						onClick={openForgottenPasswordModal}
						className="text-blue-500 hover:text-blue-700 transition font-bold"
					>
						password?
					</button>
				</p>
			</Form>
		</Formik>
	);
};

export default SignInForm;
