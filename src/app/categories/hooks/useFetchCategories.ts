import categoriesService from '@/services/categories-service';
import useQueryState from '@/utils/hooks/useQueryState';

async function fetchCategories() {
	const { data } = await categoriesService.getCategories();
	return data;
}

export function useFetchCategories() {
	return useQueryState(['categories'], fetchCategories, []);
}
