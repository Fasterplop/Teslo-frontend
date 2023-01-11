import { User } from '@/app/users/config';
import { hideLoader } from '@/components/ui/Loader';
import { axiosClient } from '@/config/axios';
import tokenAuth from '@/config/token';
import { authService } from '@/services/auth-service';
import { ReturnValuesLogin } from '@/services/auth-service/interfaces';
import create from 'zustand';

interface AuthStoreValues {
	user: User;
	authenticated: boolean;
	accessToken: string;
	loading: boolean;
	initAuthenticate?(data?: ReturnValuesLogin): Promise<void>;
	logOut(): void;
}

export const useAuthStore = create<AuthStoreValues>(set => ({
	user: {},
	authenticated: false,
	loading: true,
	accessToken: localStorage.getItem('at'),
	logOut() {
		set({
			user: {},
			accessToken: null,
			loading: false,
			authenticated: false,
		});
		localStorage.removeItem('at');
	},
	async initAuthenticate(data) {
		const setUser = (user: User) =>
			set(() => ({
				authenticated: true,
				loading: false,
				accessToken: localStorage.getItem('at'),
				user,
			}));

		if (data) {
			localStorage.setItem('at', data.token);
			tokenAuth(data.token);
			setUser(data.user);
			return;
		}

		try {
			if (!localStorage.getItem('at')) return;
			const req = await authService.refresh();
			tokenAuth(req.data.token);
			localStorage.setItem('at', req.data.token);
			setUser(req.data.user);
		} catch (error) {
			console.log(error);
			set({
				user: {},
				accessToken: null,
				loading: false,
				authenticated: false,
			});
		} finally {
			hideLoader();
		}
	},
}));
