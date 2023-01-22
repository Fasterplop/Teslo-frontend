import SelectFormik, { OptionReactSelect } from '@/components/@forms/SelectFormik';
import { useFormikContext } from 'formik';
import * as React from 'react';
import { ARRSIZES } from '../config';

interface ISizesProductProps {
	defaultOpen?: boolean;
}

const options: OptionReactSelect[] = ARRSIZES.map(option => ({ value: option, label: option }));

const SizesProduct: React.FunctionComponent<ISizesProductProps> = props => {
	const {} = props;
	const {} = useFormikContext();

	return (
		<SelectFormik
			multiple={true}
			name="sizes"
			options={options}
			onChange={(items: OptionReactSelect[], lastState) => {
				if (!items) return lastState;
				const copyItems = [...items];
				return copyItems.map(item => item.value);
			}}
			label={'Sizes'}
		/>
	);
};

export default SizesProduct;
