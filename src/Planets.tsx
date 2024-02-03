import { useData } from './useData.ts';
import { PLANETS_ENDPOINT } from './urls.ts';
import { useGetPlanetByIdQuery } from './store/services/swapi.ts';
import { useParams } from 'react-router-dom';

export function Planets() {
	// const { data, isLoading } = useData({
	//   endpoint: PLANETS_ENDPOINT,
	// });
	const { id } = useParams();
	const { data, isLoading } = useGetPlanetByIdQuery(id, {
		skip: !id || id === '0',
	});
	console.log({ data });
	return <h2>Starship: {isLoading ? 'LOADING...' : data?.name}</h2>;
}
