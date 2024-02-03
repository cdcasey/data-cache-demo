import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchData.ts';
import People from '../People.ts';
import { useMemo } from 'react';

export function usePeople(endpoint: string, id?: string) {
	console.log(!!id && id !== '0');
	const { data, isLoading } = useQuery<People>({
		queryKey: [endpoint, id],
		queryFn: () => fetchData(endpoint, id),
		enabled: !!id && id !== '0',
	});

	const filmsSquared = useMemo(() => {
		return (data?.films.length || 0) * (data?.films.length || 0);
	}, [data?.films.length]);

	return { data, isLoading, filmsSquared };
}
