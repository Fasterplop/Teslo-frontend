import { HeaderDataTable } from '@/components/ui/DataTable';

const headingCategories: HeaderDataTable[] = [
	{ title: 'ID', field: 'idcategory' },
	{ title: 'Name', field: 'title' },
	{ title: 'Date Created', field: 'dateFormatted', center: true },
	{ title: 'Image', field: 'imgTable', center: true },
	{ title: 'Actions', field: 'actions', center: true },
];

export default headingCategories;
