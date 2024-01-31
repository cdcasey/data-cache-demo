import { useParams } from "react-router-dom";
import { BASE_URL, PEOPLE_ENDPOINT } from "./urls.ts";
import { useEffect } from "react";

export function People() {
  const { peopleId } = useParams();
  console.log({ peopleId });

  useEffect(() => {
    async function getData() {
      const response = await fetch(BASE_URL + PEOPLE_ENDPOINT + peopleId);
      const data = await response.json();
      console.log({ data });
    }
    getData();
  }, [peopleId]);

  return <h2>PEOPLE</h2>;
}
