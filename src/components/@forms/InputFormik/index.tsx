import { useFormikContext, getIn, Field, ErrorMessage } from 'formik';
import * as React from 'react';
import classNames from 'classnames';
import Label from '../label';
import RenderIf from '@/components/ui/RenderIf';

interface IInputFormikProps {
	type?: React.HTMLInputTypeAttribute;
	label?: React.ReactNode;
	className?: string;
	autoComplete?: 'on' | 'off';
	classNameInput?: string;
	classNameLabel?: string;
	disabled?: boolean;
	name: string;
	placeholder?: string;
	required?: boolean;
	showSuccess?: boolean;
	showError?: boolean;
	forceErrorMessage?: string;
}

const InputFormik: React.FunctionComponent<IInputFormikProps> = props => {
	const {
		type,
		label,
		className,
		autoComplete,
		name,
		classNameLabel,
		classNameInput,
		disabled,
		placeholder,
		required,
		showError,
		showSuccess,
		forceErrorMessage,
	} = props;
	const { errors, touched } = useFormikContext();
	const error = getIn(errors, name);
	const isTouched = getIn(touched, name);
	const validateError = (error && isTouched && showError) || Boolean(forceErrorMessage);
	const validateSuccess = !error && isTouched && showSuccess && !validateError;

	return (
		<div
			className={classNames(
				'form-group',
				validateError ? 'form-group-error' : null,
				validateSuccess ? 'form-group-success' : null,
				className
			)}
		>
			<Label htmlFor={name} className={classNameLabel}>
				{label}
			</Label>
			<Field
				type={type}
				className={classNames('form-control', classNameInput)}
				disabled={disabled}
				required={required}
				autoComplete={autoComplete}
				placeholder={placeholder}
				name={name}
				id={name}
			/>

			<RenderIf isTrue={validateError}>
				<p>{error || forceErrorMessage}</p>
			</RenderIf>
		</div>
	);
};

InputFormik.defaultProps = {
	type: 'text',
	autoComplete: 'on',
	showError: true,
	showSuccess: true,
};

export default InputFormik;
