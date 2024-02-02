import { PEOPLE_ENDPOINT } from './urls.ts';

import { useData } from './useData.ts';
import { useGetPersonByIdQuery } from './store/services/swapi.ts';
import { useParams } from 'react-router-dom';

export function People() {
	// const { data, isLoading } = useData({ endpoint: PEOPLE_ENDPOINT });
	const { id } = useParams();
	const { data, isLoading } = useGetPersonByIdQuery(id);

	return <h2>Person: {isLoading ? 'LOADING...' : data?.name}</h2>;
}
