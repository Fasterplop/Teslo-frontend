import { protectedRoutes } from '@/utils';
import * as React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Product } from '../config';

interface IActionsProductsProps {
	product: Product;
	onDeleteProduct(product: Product): void;
	onUpdateProduct(product: Product): void;
}

const ActionsProducts: React.FunctionComponent<IActionsProductsProps> = props => {
	const { product, onDeleteProduct, onUpdateProduct } = props;

	const handleClickUpdateProduct = () => onUpdateProduct(product);
	const handleClickDeleteProduct = () => onDeleteProduct(product);

	return (
		<div>
			<Link
				to={protectedRoutes.viewProduct.fnPath(product.id)}
				className="btn btn-success btn-xs"
			>
				<FaEye />
			</Link>
			<button
				className="btn btn-primary btn-xs"
				onClick={handleClickUpdateProduct}
			>
				<FaPen />
			</button>
			<button
				className="btn btn-danger btn-xs"
				onClick={handleClickDeleteProduct}
			>
				<FaTrash />
			</button>
		</div>
	);
};

export default ActionsProducts;
