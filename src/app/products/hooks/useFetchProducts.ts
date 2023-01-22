import productsService from '@/services/products-service';
import useQueryState from '@/utils/hooks/useQueryState';

async function fetchProducts() {
	const { data } = await productsService.getAllProducts();
	return data;
}

export function useFetchProducts() {
	return useQueryState(['products'], fetchProducts, []);
}
