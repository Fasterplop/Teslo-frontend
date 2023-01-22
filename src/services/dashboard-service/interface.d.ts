export interface TotalCountersResponse {
	totalCategories: number;
	totalOrders: number;
	totalProducts: number;
	totalUsers: number;
}

export interface FindOrdersByAnioMonthResponse {
	year: number;
	month: string;
	total: string;
	orders: Array<{
		day: number;
		total: number;
		quantity: number;
	}>;
}

export interface FindOrdersAnioResponse {
	year: number;
	orders: Array<{
		num_month: number;
		sell: number;
	}>;
}
