/* id*	[...]
title*	[...]
price*	[...]
description*	[...]
stock*	[...]
sizes*	[...]
gender*	[...]
tags*	[...]
category*	Category{
idcategory*	[...]
title*	[...]
}
images* */

import { Category } from '../categories/config';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Gender = 'men' | 'women' | 'unisex';

export interface Product {
	id?: string;
	title?: string;
	price?: number;
	description?: string;
	stock?: number;
	sizes?: Size[];
	gender?: Gender;
	category?: Category;
	tags?: string[];
	images?: string[];
}

export interface ProductDto {
	title?: string;
	price?: number;
	description?: string;
	slug?: string;
	stock?: number;
	gender?: Gender;
	tags?: string[];
	images?: string[];
	sizes?: Size[];
}

/* title*	[...]
price*	[...]
description*	[...]
slug*	[...]
stock*	[...]
sizes*	[...]
gender*	[...]
tags*	[...]
images*	[...]
category* */
