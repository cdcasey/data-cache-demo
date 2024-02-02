import {
	createApi,
	EndpointBuilder,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
	BASE_URL,
	PEOPLE_ENDPOINT,
	PLANETS_ENDPOINT,
	STARSHIPS_ENDPOINT,
} from '../../urls.ts';

export const swapi = createApi({
	reducerPath: 'swapi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	// endpoints(
	// 	build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>,
	// ): Definitions {},
	endpoints: (builder) => ({
		getPersonById: builder.query({
			query: (id) => `${PEOPLE_ENDPOINT}/${id}`,
		}),
		getPlanetById: builder.query({
			query: (id) => `${PLANETS_ENDPOINT}/${id}`,
		}),
		getStarshipById: builder.query({
			query: (id) => `${STARSHIPS_ENDPOINT}/${id}`,
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
