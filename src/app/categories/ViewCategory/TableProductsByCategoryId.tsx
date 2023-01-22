import TableProducts from '@/app/products/TableProducts';
import DataTable from '@/components/ui/DataTable';
import * as React from 'react';
import type { Category } from '../config';
import { useFetchProductsByCategoryId } from '../hooks/useFetchProductsByCategoryId';

interface ITableProductsByCategoryIdProps {
	category: Category;
}

const TableProductsByCategoryId: React.FC<ITableProductsByCategoryIdProps> = props => {
	const { category } = props;
	const {
		data: products,
		setData,
		isFetching,
		refetch,
	} = useFetchProductsByCategoryId(category.idcategory);

	return (
		<div className="tile">
			<TableProducts
				products={products}
				setProducts={setData}
				isFetching={isFetching}
				refetch={refetch}
			/>
		</div>
	);
};

export default TableProductsByCategoryId;
