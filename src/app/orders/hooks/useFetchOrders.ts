import ordersService from '@/services/orders-service';
import useQueryState from '@/utils/hooks/useQueryState';

async function fetchOrders() {
	const { data } = await ordersService.getOrders();
	return data;
}

export function useFetchOrders() {
	return useQueryState(['orders'], fetchOrders, []);
}
