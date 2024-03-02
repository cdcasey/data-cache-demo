import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL } from './urls.ts';

export function useGetData({ endpoint }: { endpoint: string }) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();
	const { id } = useParams();

	useEffect(() => {
		async function getData() {
			setIsLoading(true);
			const response = await fetch(BASE_URL + endpoint + id);
			const responseData = await response.json();
			setData(responseData);
			setIsLoading(false);
		}
		if (id && id !== '0') {
			getData();
		}
	}, [endpoint, id]);

	return { data, isLoading };
}

// export function useGetDataById({
// 	endpoint,
// 	id,
// }: {
// 	endpoint: string;
// 	id: number;
// }) {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [data, setData] = useState();

// 	useEffect(() => {
// 		async function getData() {
// 			setIsLoading(true);
// 			const response = await fetch(BASE_URL + endpoint + id);
// 			const responseData = await response.json();
// 			setData(responseData);
// 			setIsLoading(false);
// 		}
// 		if (id && id !== '0') {
// 			getData();
// 		}
// 	}, [endpoint, id]);

// 	return { data, isLoading };
// }

export function useCreateData<T>({
	endpoint,
	body,
}: {
	endpoint: string;
	body: T;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		async function createData() {
			setIsLoading(true);
			const response = await fetch(BASE_URL + endpoint, {
				method: 'POST',
				body: JSON.stringify(body),
			});
			const responseData = await response.json();
			setData(responseData);
			setIsLoading(false);
		}
		createData();
	}, [endpoint, body]);

	return { data, isLoading };
}

export function useUpdateData<T>({
	endpoint,
	body,
}: {
	endpoint: string;
	body: T;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		async function updateData() {
			setIsLoading(true);
			const response = await fetch(BASE_URL + endpoint, {
				method: 'PATCH',
				body: JSON.stringify(body),
			});
			const responseData = await response.json();
			setData(responseData);
			setIsLoading(false);
		}
		updateData();
	}, [endpoint, body]);

	return { data, isLoading };
}

export function useDeleteData({
	endpoint,
	id,
}: {
	endpoint: string;
	id: number;
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		async function deleteData() {
			setIsLoading(true);
			const response = await fetch(BASE_URL + endpoint + `/${id}`, {
				method: 'DELETE',
			});
			const responseData = await response.json();
			setData(responseData);
			setIsLoading(false);
		}
		deleteData();
	}, [endpoint, id]);

	return { data, isLoading };
}
