import DataTable, { HeaderDataTable } from '@/components/ui/DataTable';
import classNames from 'classnames';
import * as React from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { PaymentMethod } from '../config';
import FormPaymentMethod from '../Forms/FormPaymentMethod';
import { useFetchPaymentMethods } from '../hooks/useFetchPaymentMethods';
import defaultHeadingPaymentMethods from './heading';
import mapPaymentMethods from './mapPaymentMethods';

interface ITablePaymentMethodsProps {
	heading?: HeaderDataTable[];
}

const TablePaymentMethods: React.FunctionComponent<ITablePaymentMethodsProps> = props => {
	const { heading } = props;
	const [stateForm, setStateForm] = React.useState<'create' | 'update'>('create');
	const [tempPaymentMethod, setTempPaymentMethod] = React.useState<PaymentMethod>(null);
	const { isFetching, data: paymentMethods, setData, refetch } = useFetchPaymentMethods();

	function onSuccessForm(paymentMethod: PaymentMethod) {
		if (stateForm === 'create') {
			setData([paymentMethod, ...paymentMethods]);
		} else if (stateForm === 'update') {
			setData(
				paymentMethods.map(p =>
					p.idpaymentmethod === paymentMethod.idpaymentmethod
						? { ...paymentMethod }
						: p
				)
			);
		}
	}

	async function deletePaymentMethod(paymentMethod: PaymentMethod) {}

	function updatePaymentMethod(paymentMethod: PaymentMethod) {
		setTempPaymentMethod(paymentMethod);
		setStateForm('update');
	}

	function createPaymentMethod() {
		setTempPaymentMethod(null);
		setStateForm('create');
	}

	return (
		<div className="grid lg:grid-cols-5 gap-4">
			<div className="lg:col-span-3">
				<div className="tile">
					<DataTable
						buttons={
							<>
								<button
									className="btn btn-primary btn-xs"
									onClick={
										createPaymentMethod
									}
								>
									<FaPlus />
								</button>
								<button
									className="btn btn-outline-alternative btn-xs"
									onClick={() => refetch()}
								>
									<AiOutlineReload />
								</button>
							</>
						}
						loading={isFetching}
						data={mapPaymentMethods({
							paymentMethods,
							updatePaymentMethod,
							deletePaymentMethod,
						})}
						heading={heading}
					/>
				</div>
			</div>
			<div className="lg:col-span-2">
				<div
					className={classNames(
						'tile mb-0 rounded-b-none text-white py-3',
						stateForm === 'create' && 'bg-blue-600',
						stateForm === 'update' && 'bg-red-600'
					)}
				>
					<h6>
						{stateForm === 'create'
							? 'Create Payment Method'
							: 'Update Payment Method'}
					</h6>
				</div>
				<div className="tile rounded-t-none">
					<FormPaymentMethod
						state={stateForm}
						onSuccess={onSuccessForm}
						paymentMethod={tempPaymentMethod}
					/>
				</div>
			</div>
		</div>
	);
};

TablePaymentMethods.defaultProps = {
	heading: defaultHeadingPaymentMethods,
};

export default TablePaymentMethods;
