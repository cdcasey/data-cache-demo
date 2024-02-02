import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchData.ts';

export function usePeople(endpoint, id) {
	console.log(!!id && id !== '0');
	const { data, isLoading, is } = useQuery({
		queryKey: [endpoint, id],
		queryFn: () => fetchData(endpoint, id),
		enabled: false,
	});
	console.log({ isLoading });
	return { data, isLoading };
}
