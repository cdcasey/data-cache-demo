import { PEOPLE_ENDPOINT } from './urls.ts';
import { useParams } from 'react-router-dom';
import { useData } from './useData.ts';
import { usePeople } from './hooks/usePeople.ts';

export function People() {
	// const { data, isLoading } = useData({ endpoint: PEOPLE_ENDPOINT });
	const { id } = useParams();
	const { data, isLoading } = usePeople(PEOPLE_ENDPOINT, id);
	console.log({ data, isLoading });
	return <h2>Person: {isLoading ? 'LOADING...' : data?.name}</h2>;
}
