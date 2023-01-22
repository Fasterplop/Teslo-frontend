import { PaymentMethod, PaymentMethodDto } from '@/app/config/PaymenMethods/config';
import { axiosClient } from '@/config/axios';

const paymentMethodService = {
	getAll: () => axiosClient.get<PaymentMethod[]>('/payment-methods'),
	getOne: (id: string | number) => axiosClient.get<PaymentMethod>(`/payment-methods/${id}`),
	createOne: (data: PaymentMethodDto) =>
		axiosClient.post<PaymentMethod>('/payment-methods', data),
	updateOne: (id: string | number, data: PaymentMethodDto) =>
		axiosClient.put<PaymentMethod>(`/payment-methods/${id}`, data),
	deleteOne: (id: string | number) => axiosClient.delete(`/payment-methods/${id}`),
};

export default paymentMethodService;
