import ordersService from '@/services/orders-service';
import useQueryState from '@/utils/hooks/useQueryState';
import { QueryFunctionContext } from '@tanstack/react-query';

async function fetchOrder(ctx: QueryFunctionContext) {
	const { data } = await ordersService.getOrderById(ctx.queryKey[1] as string);
	return data;
}

export function useFetchOrder(id: number | string) {
	return useQueryState(['order', id.toString()], fetchOrder, []);
}
