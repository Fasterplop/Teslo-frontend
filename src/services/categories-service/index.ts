import { Category, CategoryDto } from '@/app/categories/config';
import { axiosClient } from '@/config/axios';
import { CategoryRequestResponse } from './interfaces';

const categoriesService = {
	getCategories: () => axiosClient.get<Category[]>('/categories'),
	getCategory: (term: string) => axiosClient.get<Category>(`/categories/${term}`),
	createCategory: (data: CategoryDto) =>
		axiosClient.post<CategoryRequestResponse>('/categories', data),
	updateCategory: (idcategory: string, data: CategoryDto) =>
		axiosClient.put<CategoryRequestResponse>(`/categories/${idcategory}`, data),
	deleteCategory: (idcategory: string) => axiosClient.delete(`/categories/${idcategory}`),
};

export default categoriesService;
