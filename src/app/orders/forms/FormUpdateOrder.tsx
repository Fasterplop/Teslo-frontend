import { PaymentMethod } from '@/app/config/PaymenMethods/config';
import ButtonFormik from '@/components/@forms/ButtonFormik';
import InputFormik from '@/components/@forms/InputFormik';
import SelectFormik from '@/components/@forms/SelectFormik';
import ordersService from '@/services/orders-service';
import { capitalize } from '@/utils';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { toast } from 'react-toastify';
import { Order, OrderDto, ARRSTATUSORDER } from '../config';

interface IFormUpdateOrderProps {
	order: Order;
	onSuccess?(order: Order): void;
	paymentMethods: PaymentMethod[];
}

const FormUpdateOrder: React.FunctionComponent<IFormUpdateOrderProps> = props => {
	const { order, onSuccess, paymentMethods } = props;

	const initialValues: OrderDto = {
		reference: order.reference,
		status: order.status,
		paymentMethod: order.paymentMethod.idpaymentmethod as unknown as string,
	};

	async function onSubmit(values: OrderDto) {
		try {
			values.paymentMethod = paymentMethods.find(
				paymentMethod =>
					paymentMethod.idpaymentmethod === values.paymentMethod
			);
			const req = await ordersService.updateOrder(order.idorder, values);
			toast.success('Order updated successfully.');
			onSuccess?.(req.data);
		} catch (error) {
			console.log(error);
			toast.error('Error updating order');
		}
	}

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<Form>
				<div className="table-responsive">
					<table className="table">
						<tbody>
							<tr>
								<td>User:</td>
								<td>
									<strong>
										{
											order.user
												.firstName
										}{' '}
										{
											order.user
												.lastName
										}
									</strong>{' '}
									<br />
									{order.user.email}
								</td>
							</tr>
							<tr>
								<td>Reference:</td>

								<td>
									<InputFormik
										className="mb-0"
										name="reference"
										placeholder="Type the reference of the transaction"
									/>
								</td>
							</tr>

							<tr>
								<td>Status:</td>

								<td>
									<SelectFormik
										className="my-2"
										name="status"
										options={ARRSTATUSORDER.map(
											status => ({
												value: status,
												label: capitalize(
													status
												),
											})
										)}
									/>
								</td>
							</tr>

							<tr>
								<td>Payment Method:</td>

								<td>
									<SelectFormik
										className="my-2"
										name="paymentMethod"
										options={paymentMethods.map(
											paymentMethod => ({
												value: paymentMethod.idpaymentmethod,
												label: paymentMethod.title,
											})
										)}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<ButtonFormik full className="btn-primary btn-sm mt-8">
					Update Order
				</ButtonFormik>
			</Form>
		</Formik>
	);
};

export default FormUpdateOrder;
