import { HeaderDataTable } from '@/components/ui/DataTable';

const defaultHeadingProducts: HeaderDataTable[] = [
	{ title: 'Image', field: 'image', center: true },
	{ title: 'Name', field: 'title' },
	{ title: 'Gender', field: 'gender', center: true },
	{ title: 'Sizes', field: 'sizesFormatted', center: true },
	{ title: 'Price', field: 'priceFormatted', center: true },
	{ title: 'Stock', field: 'stock', center: true },
	{ title: 'Category', field: 'category.title', center: true },
	{ title: 'Date Created', field: 'dateFormatted', center: true },
	{ title: 'Actions', field: 'actions', center: true },
];

export default defaultHeadingProducts;
