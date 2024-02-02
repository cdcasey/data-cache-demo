import { BASE_URL } from '../urls.ts';

export const fetchData = async (endpoint, id) => {
	const response = await fetch(`${BASE_URL}${endpoint}/${id}`);
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	console.log('FETCHING');
	return response.json();
};
