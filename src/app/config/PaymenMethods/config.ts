export interface PaymentMethod {
	idpaymentmethod?: number;
	title?: string;
	owner?: string;
	phone?: string;
	dni?: string;
	email?: string;
}

export interface PaymentMethodDto {
	title?: string;
	owner?: string;
	phone?: string;
	dni?: string;
	email?: string;
}

export interface PaymentMethodTable extends PaymentMethod {
	actions: React.ReactNode;
}
