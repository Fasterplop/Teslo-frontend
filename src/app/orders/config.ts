import { PaymentMethod } from '../config/PaymenMethods/config';
import { Product } from '../products/config';
import { User } from '../users/config';

export enum ValidStatusOrder {
	PENDING = 'pending',
	COMPLETED = 'completed',
	CANCELED = 'cancelled',
}

export type StatusOrder = 'pending' | 'completed' | 'cancelled';

export const ARRSTATUSORDER: StatusOrder[] = ['cancelled', 'completed', 'pending'];

export interface Detail {
	id?: number;
	total?: number;
	quantity?: number;
	title?: string;
	product?: Product;
	order?: Order;
}

export interface Order {
	idorder?: string;
	reference?: string;
	status?: StatusOrder;
	total?: number;
	dateCreated?: Date;
	detail?: Detail[];
	user?: User;
	paymentMethod?: PaymentMethod;
}

export interface OrderTable extends Order {
	actions: React.ReactNode;
	fullName: string;
	dateCreatedFormatted: string;
	totalFormatted: string;
	badgeStatus: React.ReactNode;
}

export interface OrderDto {
	total?: number;
	reference?: string;
	status?: StatusOrder;
	detail?: DetailDto[];
	paymentMethod?: PaymentMethod | string;
}

interface DetailDto {
	total?: number;
	quantity?: number;
	product?: Product;
}
