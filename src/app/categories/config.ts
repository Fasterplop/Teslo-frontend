import React from 'react';

export interface Category {
	idcategory?: string;
	title?: string;
	slug?: string;
	image?: string;
	dateCreated?: Date;
}

export interface CategoryDataTable extends Category {
	actions: React.ReactNode;
	imgTable: React.ReactNode;
	dateFormatted: string;
}

export interface CategoryDto {
	title?: string;
	slug?: string;
}
