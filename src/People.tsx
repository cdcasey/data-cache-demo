import { PEOPLE_ENDPOINT } from './urls.ts';
import { useParams } from 'react-router-dom';

import { usePeople } from './hooks/usePeople.ts';

export function People() {
	// const { data, isLoading } = useData({ endpoint: PEOPLE_ENDPOINT });
	const { id } = useParams();
	const { data, isLoading, filmsSquared } = usePeople(PEOPLE_ENDPOINT, id);
	console.log('PEOPLE');
	console.log({ data });
	return (
		<h2>
			Person: {isLoading ? 'LOADING...' : data?.name} {filmsSquared}
		</h2>
	);
}
