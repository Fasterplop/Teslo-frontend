import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import DataTable from '@/components/ui/DataTable';
import { formatter } from '@/utils';
import { FaPlus } from 'react-icons/fa';
import { useModal } from '@/context/ModalProvider';
import LoginPage from '@/app/login';

interface IAppRouterProps {}

const AppRouter: React.FunctionComponent<IAppRouterProps> = props => {
	const {} = props;
	const { setModal } = useModal();

	const openModal = () => {
		setModal({
			title: 'Title',
			children: (
				<DataTable
					data={[
						{
							product: "Dario's T'Shirt 1",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},

						{
							product: "Dario's T'Shirt 2",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},

						{
							product: "Dario's T'Shirt 3",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},

						{
							product: "Dario's T'Shirt 4",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},

						{
							product: "Dario's T'Shirt 5",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 6",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 7",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 8",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 9",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 10",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 11",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Purple',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Red',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Yellow',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'White',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Blue',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'White',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Black',
							category: 'Shirts',
							price: formatter.format(500),
						},
						{
							product: "Dario's T'Shirt 0",
							color: 'Red',
							category: 'Shirts',
							price: formatter.format(500),
						},
					]}
					heading={[
						{
							title: 'Product Name',
							field: 'product',
						},
						{
							title: 'Color',
							field: 'color',
						},
						{
							title: 'Category',
							field: 'category',
						},
						{
							title: 'Price',
							field: 'price',
							center: true,
						},
					]}
				/>
			),
			size: 'lg',
		});
	};

	return (
		<Routes>
			<Route index element={<LoginPage />} />
			<Route path="/dashboard" element={<DashboardLayout />} />
			<Route
				path="/test"
				element={
					<div className="max-w-4xl mx-auto">
						<div className="tile">
							<button
								className="btn btn-primary"
								onClick={openModal}
							>
								Show Modal
							</button>

							{/* <DataTable
								data={[
									{
										product: "Dario's T'Shirt 1",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},

									{
										product: "Dario's T'Shirt 2",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},

									{
										product: "Dario's T'Shirt 3",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},

									{
										product: "Dario's T'Shirt 4",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},

									{
										product: "Dario's T'Shirt 5",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 6",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 7",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 8",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 9",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 10",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 11",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Purple',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Red',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Yellow',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'White',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Blue',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'White',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Black',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
									{
										product: "Dario's T'Shirt 0",
										color: 'Red',
										category: 'Shirts',
										price: formatter.format(
											500
										),
									},
								]}
								heading={[
									{
										title: 'Product Name',
										field: 'product',
									},
									{
										title: 'Color',
										field: 'color',
									},
									{
										title: 'Category',
										field: 'category',
									},
									{
										title: 'Price',
										field: 'price',
										center: true,
									},
								]}
							/> */}
						</div>
					</div>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
