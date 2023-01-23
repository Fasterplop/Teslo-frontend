import ordersService from '@/services/orders-service';
import useQueryState from '@/utils/hooks/useQueryState';
import { QueryFunctionContext } from '@tanstack/react-query';

async function fetchOrders(ctx: QueryFunctionContext) {
	const { data } = await ordersService.getOrdersByPaymentMethod(
		ctx.queryKey[1] as string | number
	);
	return data;
}

export function useFetchOrdersByPayment(id: number | string) {
	return useQueryState(['orders-by-payment', id as string], fetchOrders, []);
}
