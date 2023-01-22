import { axiosClient } from '@/config/axios';
import { UploadImageResponse } from './interfaces';

const filesService = {
	uploadFileCategory: (file: FormData) =>
		axiosClient.post<UploadImageResponse>('/files/category', file, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		}),
	uploadFileProduct: (file: FormData) =>
		axiosClient.post<UploadImageResponse>('/files/product', file, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		}),
};

export default filesService;
