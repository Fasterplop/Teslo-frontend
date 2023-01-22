import { API_URL } from '@/utils';
import axios from 'axios';

const AuthorizationHeader = localStorage.getItem('at')
	? {
			Authorization: 'Bearer ' + localStorage.getItem('at'),
	  }
	: {};

export const axiosClient = axios.create({
	baseURL: API_URL,
	headers: {
		...AuthorizationHeader,
	},
});
