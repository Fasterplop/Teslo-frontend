import paymentMethodService from '@/services/paymentMethod-service/paymentMethod-service';
import useQueryState from '@/utils/hooks/useQueryState';

async function fetchPaymentMethods() {
	const { data } = await paymentMethodService.getAll();
	return data;
}

export function useFetchPaymentMethods() {
	return useQueryState(['payment-methods'], fetchPaymentMethods, []);
}
