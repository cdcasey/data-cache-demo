import { useData } from './useData.ts';
import { STARSHIPS_ENDPOINT } from './urls.ts';
import { useParams } from 'react-router-dom';

export function Starships() {
	const { id } = useParams();
	const { data, isLoading } = useData({
		endpoint: STARSHIPS_ENDPOINT,
		id,
	});
	console.log({ data });
	return <h2>Starship: {isLoading ? 'LOADING...' : data?.name}</h2>;
}
