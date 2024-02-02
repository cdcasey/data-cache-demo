import {
	createApi,
	EndpointBuilder,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../urls.ts';

export const swapi = createApi({
	reducerPath: 'swapi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	// endpoints(
	// 	build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>,
	// ): Definitions {},
	endpoints: (builder) => ({
		getPersonById: builder.query({
			query: (id) => `people/${id}`,
		}),
		getPlanetById: builder.query({
			query: (id) => `planets/${id}`,
		}),
		getStarshipById: builder.query({
			query: (id) => `starships/${id}`,
		}),
	}),
});

export const {
	useGetPersonByIdQuery,
	useLazyGetPersonByIdQuery,
	useGetPlanetByIdQuery,
	useLazyGetPlanetByIdQuery,
	useGetStarshipByIdQuery,
	useLazyGetStarshipByIdQuery,
} = swapi;
