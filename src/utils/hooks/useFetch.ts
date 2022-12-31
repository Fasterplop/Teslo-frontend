import { axiosClient } from '@/config/axios';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
	loading: boolean;
	data?: T;
	error?: Error;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
	| { type: 'loading' }
	| { type: 'fetched'; payload: T }
	| { type: 'error'; payload: Error };

function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig): State<T> {
	const cache = useRef<Cache<T>>({});

	// Used to prevent state update if the component is unmounted
	const cancelRequest = useRef<boolean>(false);

	const initialState: State<T> = {
		error: undefined,
		data: undefined,
		loading: true,
	};

	// Keep state logic separated
	const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
		switch (action.type) {
			case 'loading':
				return { ...initialState, loading: true };
			case 'fetched':
				return { ...initialState, data: action.payload, loading: false };
			case 'error':
				return { ...initialState, error: action.payload, loading: false };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		// Do nothing if the url is not given
		if (!url) return;

		cancelRequest.current = false;

		const fetchData = async () => {
			dispatch({ type: 'loading' });

			// If a cache exists for this url, return it
			if (cache.current[url]) {
				dispatch({ type: 'fetched', payload: cache.current[url] });
				return;
			}

			try {
				const response = await axiosClient<T>(url, options);
				const data = response.data;
				cache.current[url] = data;
				if (cancelRequest.current) return;
				dispatch({ type: 'fetched', payload: data });
			} catch (error) {
				if (cancelRequest.current) return;
				dispatch({ type: 'error', payload: error as Error });
			}
		};

		void fetchData();

		// Use the cleanup function for avoiding a possibly...
		// ...state update after the component was unmounted
		return () => {
			cancelRequest.current = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return state;
}

export default useFetch;
