import usersService from '@/services/users-service';
import useQueryState from '@/utils/hooks/useQueryState';
import { QueryFunctionContext } from '@tanstack/react-query';

async function fetchUser(ctx: QueryFunctionContext) {
	const { queryKey } = ctx;
	const { data } = await usersService.getUser(queryKey[1] as string);
	return data;
}

export function useFetcUser(id: string) {
	return useQueryState(['user', id], fetchUser, {});
}
