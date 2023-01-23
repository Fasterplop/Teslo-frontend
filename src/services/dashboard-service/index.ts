import { Order } from '@/app/orders/config';
import { User } from '@/app/users/config';
import { axiosClient } from '@/config/axios';
import {
	FindOrdersAnioResponse,
	FindOrdersByAnioMonthResponse,
	FindPaymentMethodsByYearMonth,
	TotalCountersResponse,
} from './interface';

const dashboardService = {
	counters: () => axiosClient.get<TotalCountersResponse>('/dashboard/counters'),
	findAllOrdersByYear: (year: number) =>
		axiosClient.get<FindOrdersAnioResponse>(`/dashboard/findAllOrders/${year}`),
	findAllOrdersByYearMonth: (year: number, month: number) =>
		axiosClient.get<FindOrdersByAnioMonthResponse>(
			`/dashboard/findOrders/${year}/${month}`
		),
	findPaymentMethodsByYearMonth: (year: number, month: number) =>
		axiosClient.get<FindPaymentMethodsByYearMonth>(
			`/dashboard/findPaymentMethods/${year}/${month}`
		),
	getLastTenUsers: () => axiosClient.get<User[]>('/dashboard/getTenUsers'),
	getLastTenOrders: () => axiosClient.get<Order[]>('/dashboard/getTenOrders'),
};

export default dashboardService;
