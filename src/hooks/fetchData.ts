import { BASE_URL } from '../urls.ts';

/**
 * Fetches data from an API endpoint.
 * Data returned is based on type passed to useQuery.
 * @throws {Error} - If the network response is not ok.
 */

export const fetchData = async <T>(endpoint: string, id: string) => {
	const url = `${BASE_URL}${endpoint}/${id}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	console.log('FETCHING');
	return (await response.json()) as Promise<T>;
};
