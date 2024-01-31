import { useParams } from "react-router-dom";
import { PEOPLE_ENDPOINT } from "./urls.ts";

import { useData } from "./useData.ts";

export function People() {
  const { peopleId } = useParams();
  console.log({ peopleId });
  const { data, isLoading } = useData({
    endpoint: PEOPLE_ENDPOINT,
    id: peopleId,
  });

  console.log({ data });

  return <h2>Person: {isLoading ? "LOADING..." : data?.name}</h2>;
}
