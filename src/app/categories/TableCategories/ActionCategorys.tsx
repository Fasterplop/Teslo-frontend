import { protectedRoutes, validPaths } from '@/utils';
import * as React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Category } from '../config';

interface IActionsCategoryProps {
	category: Category;
	onUpdateCategory(category: Category): void;
	onDeleteCategory(category: Category): void;
}

const ActionsCategory: React.FunctionComponent<IActionsCategoryProps> = props => {
	const { category, onDeleteCategory, onUpdateCategory } = props;

	const handleClickUpdateCategory = () => onUpdateCategory(category);
	const handleClickDeleteCategory = () => onDeleteCategory(category);

	return (
		<div>
			<Link
				to={protectedRoutes.categoriesPage.fnPath(category.idcategory)}
				className="btn btn-success btn-xs"
			>
				<FaEye />
			</Link>
			<button
				className="btn btn-primary btn-xs"
				onClick={handleClickUpdateCategory}
			>
				<FaPen />
			</button>
			<button
				className="btn btn-danger btn-xs"
				onClick={handleClickDeleteCategory}
			>
				<FaTrash />
			</button>
		</div>
	);
};

export default ActionsCategory;
