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
import People from '../../People.ts';
import Planet from '../../Planets.ts';
import Starship from '../../Starship.ts';

export const swapi = createApi({
	reducerPath: 'swapi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	// endpoints(
	// 	build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>,
	// ): Definitions {},
	endpoints: (builder) => ({
		getPersonById: builder.query<People, string | undefined>({
			query: (id) => `${PEOPLE_ENDPOINT}/${id}`,
		}),
		getPlanetById: builder.query<Planet, string | undefined>({
			query: (id) => `${PLANETS_ENDPOINT}/${id}`,
		}),
		getStarshipById: builder.query<Starship, string | undefined>({
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
