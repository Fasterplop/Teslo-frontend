import { Product, ProductDto } from '@/app/products/config';
import { axiosClient } from '@/config/axios';
import { Pagination } from '../interfaces.api';

const productsService = {
	getAllProducts: () => axiosClient.get<Product[]>('/products/all'),
	getAllProductsByCategory: (idcategory: string) =>
		axiosClient.get<Product[]>(`/products/all/${idcategory}`),
	getProducts: (pagination: Pagination) =>
		axiosClient.get<Product[]>('/products', { params: pagination }),
	getProduct: (term: string) => axiosClient.get(`/products/${term}`),
	createProduct: (productDto: ProductDto) =>
		axiosClient.post<Product>('/products', productDto),
	updateProduct: (idproducto: string, productDto: ProductDto) =>
		axiosClient.put<Product>(`/products/${idproducto}`, productDto),
	deleteProduct: (idproducto: string) => axiosClient.delete(`/products/${idproducto}`),
};

export default productsService;
