import { useData } from './useData.ts';
import { PLANETS_ENDPOINT } from './urls.ts';

export function Planets() {
	const { data, isLoading } = useData({
		endpoint: PLANETS_ENDPOINT,
	});

	return <h2>Starship: {isLoading ? 'LOADING...' : data?.name}</h2>;
}
