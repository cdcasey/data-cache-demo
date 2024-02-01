import {
	createApi,
	EndpointBuilder,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../urls.ts';

export const swapi = createApi({
	reducerPath: 'swapi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints(
		build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>,
	): Definitions {},
});
