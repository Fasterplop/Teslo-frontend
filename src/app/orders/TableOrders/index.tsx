import DataTable, { HeaderDataTable } from '@/components/ui/DataTable';
import { hideLoader, showLoader } from '@/components/ui/Loader';
import RenderIf from '@/components/ui/RenderIf';
import paymentMethodService from '@/services/paymentMethod-service/paymentMethod-service';
import { useModalStore } from '@/store';
import * as React from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { Order } from '../config';
import defaultHeadingOrders from './heading';
import mapOrders from './MapOrders';

const FormUpdateOrder = React.lazy(() => import('../forms/FormUpdateOrder'));
const ModalViewUser = React.lazy(() => import('./ModalViewUser'));

interface TableOrdersProps {
	heading?: HeaderDataTable[];
	refetch?(): void;
	isFetching: boolean;
	orders: Order[];
	setOrders(orders: Order[]): void;
	showPagination?: boolean;
	showSearch?: boolean;
}

const TableOrders: React.FunctionComponent<TableOrdersProps> = props => {
	const { orders, isFetching, heading, setOrders, refetch, showPagination, showSearch } =
		props;

	const setModal = useModalStore(state => state.setModal);
	const closeModal = useModalStore(state => state.closeModal);

	async function onClickUpdateOrder(order: Order) {
		function onSuccess(orderUpdated: Order) {
			setOrders(
				orders.map(order =>
					order.idorder === orderUpdated.idorder
						? { ...orderUpdated }
						: order
				)
			);
			closeModal();
		}

		try {
			showLoader();
			const req = await paymentMethodService.getAll();
			setModal({
				title: `Update Order ${order.idorder}`,
				size: 'lg',
				children: (
					<React.Suspense fallback={<></>}>
						<FormUpdateOrder
							paymentMethods={req.data}
							order={order}
							onSuccess={onSuccess}
						/>
					</React.Suspense>
				),
			});
		} catch (error) {
			console.log(error);
		} finally {
			hideLoader();
		}
	}

	function onClickViewUser(order: Order) {
		setModal({
			title: `View Order #${order.idorder} User`,
			children: (
				<React.Suspense fallback={<></>}>
					<ModalViewUser user={order.user} />
				</React.Suspense>
			),
			size: 'md',
		});
	}

	return (
		<DataTable
			buttons={
				<>
					<RenderIf isTrue={refetch}>
						<button
							className="btn btn-alternative btn-xs"
							onClick={refetch}
						>
							<AiOutlineReload />
						</button>
					</RenderIf>
				</>
			}
			data={mapOrders({ orders, onClickUpdateOrder, onClickViewUser })}
			loading={isFetching}
			heading={heading}
			showPagination={showPagination}
			showSearch={showSearch}
		/>
	);
};

TableOrders.defaultProps = {
	heading: defaultHeadingOrders,
};

export default TableOrders;
