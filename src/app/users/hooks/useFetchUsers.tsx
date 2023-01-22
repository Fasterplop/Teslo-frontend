import usersService from '@/services/users-service';
import useQueryState from '@/utils/hooks/useQueryState';

async function fetchUsers() {
	const { data } = await usersService.getUsers();
	return data;
}

export function useFetcUsers() {
	return useQueryState(['user-all'], fetchUsers, []);
}
