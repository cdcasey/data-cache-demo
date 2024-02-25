import { BASE_URL } from '../urls.ts';

/**
 * Fetches data from an API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @param {any} id - The ID of the resource to fetch.
 * @returns {Promise<any>} - The JSON data from the API response.
 * @throws {Error} - If the network response is not ok.
 */
export const fetchData = async (endpoint: string, id: any): Promise<any> => {
	const url = `${BASE_URL}${endpoint}/${id}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	console.log('FETCHING');
	return response.json();
};
