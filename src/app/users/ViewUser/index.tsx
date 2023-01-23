import SelectFormik, { OptionReactSelect } from '@/components/@forms/SelectFormik';
import Loader from '@/components/ui/Loader';
import RenderIf from '@/components/ui/RenderIf';
import HeaderDashboard from '@/layouts/HeaderDashboardLayout';
import ProfileLayout from '@/layouts/ProfileLayout';
import usersService from '@/services/users-service';
import { useAuthStore } from '@/store';
import classNames from 'classnames';
import * as React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserDto, ValidRol, ValidRoles } from '../config';
import { protectedRoutes } from '@/utils';
import { useFetcUser } from '../hooks/useFetchUser';
import TableOrdersByUser from './TableOrdersByUser';

interface IViewUserPageProps {}
const validRolesActions = [ValidRoles.ADMIN, ValidRoles.SUPER_USER] as ValidRol[];

const ViewUserPage: React.FunctionComponent<IViewUserPageProps> = props => {
	const {} = props;
	const params = useParams();
	const { data: user, isFetching, setData, error } = useFetcUser(params.id);
	const { user: authUser } = useAuthStore();

	if (isFetching) return <Loader loading={true} />;

	if (!Object.keys(user).length && error) return <Navigate to={protectedRoutes.users.path} />;

	async function updateUser(values: UserDto) {
		try {
			if (!values.password?.trim()) delete values.password;
			const req = await usersService.updateUser(user.iduser, values);
			setData(req.data);
			toast.success('User updated successfully.');
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message || 'Error updating user');
		}
	}

	if (!Object.keys(user).length) return <Loader loading={true} />;

	const canUseActions =
		(user.iduser !== authUser.iduser &&
			!user.roles?.includes(ValidRoles.SUPER_USER) &&
			user.roles?.includes(ValidRoles.ADMIN) &&
			authUser.roles?.includes(ValidRoles.SUPER_USER)) ||
		user.roles?.includes(ValidRoles.USER);

	const isValidRol = authUser.roles?.some(role => validRolesActions.includes(role));

	return (
		<React.Fragment>
			<HeaderDashboard to="/users">Users</HeaderDashboard>
			<ProfileLayout
				user={user}
				onSubmitUpdateUser={updateUser}
				validRolesActions={validRolesActions}
				canUseActions={canUseActions}
				extraInitialValuesFormUpdate={{
					isActive: user.isActive,
					roles: user.roles,
				}}
				extraInputsFormFormUpdate={
					<>
						<SelectFormik
							name="isActive"
							options={[
								{ value: true, label: 'Active' },
								{ value: false, label: 'Inactive' },
							]}
						/>

						<SelectFormik
							multiple={true}
							name="roles"
							options={[
								{
									value: ValidRoles.ADMIN,
									label: 'Admin',
								},
								{
									value: ValidRoles.USER,
									label: 'User',
								},
							]}
							onChange={(
								items: OptionReactSelect[],
								lastState
							) => {
								if (!items) return lastState;
								const copyItems = [...items];
								if (copyItems.length === 2) {
									copyItems.shift();
								}
								return copyItems.map(
									item => item.value
								);
							}}
						/>
					</>
				}
			/>
			<RenderIf
				isTrue={
					true
					/* !user?.roles?.includes(ValidRoles.SUPER_USER) &&
					!user?.roles?.includes(ValidRoles.ADMIN) */
				}
			>
				<div
					className={classNames(
						'tile',
						canUseActions && isValidRol ? 'mt-10' : 'mt-64'
					)}
				>
					<TableOrdersByUser id={params.id} />
				</div>
			</RenderIf>
		</React.Fragment>
	);
};

export default ViewUserPage;
