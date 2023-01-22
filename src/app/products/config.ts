import { File } from '@/utils/extends';
import React from 'react';
import { Category } from '../categories/config';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Gender = 'men' | 'women' | 'unisex' | 'kid';

export enum ValidGenders {
	MEN = 'men',
	WOMEN = 'women',
	UNISEX = 'unisex',
	KID = 'kid',
}

export enum ValidSizes {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
	XXL = 'XXL',
}

export const ARRGENDERS: Gender[] = ['kid', 'men', 'unisex', 'women'];
export const ARRSIZES: Size[] = ['L', 'M', 'S', 'XL', 'XS', 'XXL'];

export interface Product {
	id?: string;
	dateCreated?: Date;
	title?: string;
	slug?: string;
	price?: number;
	description?: string;
	stock?: number;
	sizes?: Size[];
	gender?: Gender;
	category?: Category;
	tags?: string[];
	images?: string[];
}

export interface ProductTable extends Product {
	priceFormatted?: string;
	actions: React.ReactNode;
	image: React.ReactNode;
	dateFormatted: string;
	sizesFormatted?: string;
}

export interface ProductDto {
	title?: string;
	price?: number;
	description?: string;
	slug?: string;
	stock?: number;
	gender?: Gender;
	tags?: string[];
	images?: string[] | File[];
	sizes?: Size[];
	category?: Category | string;
}
