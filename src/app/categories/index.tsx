import * as React from 'react';
import TableCategories from './TableCategories';

interface ICategoriesPageProps {}

const CategoriesPage: React.FunctionComponent<ICategoriesPageProps> = props => {
	const {} = props;
	return (
		<div className="tile">
			<TableCategories />
		</div>
	);
};

export default CategoriesPage;
