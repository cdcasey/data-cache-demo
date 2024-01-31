import { PEOPLE_ENDPOINT } from "./urls.ts";

import { useData } from "./useData.ts";

export function People() {
  const { data, isLoading } = useData({ endpoint: PEOPLE_ENDPOINT });

  return <h2>Person: {isLoading ? "LOADING..." : data?.name}</h2>;
}
