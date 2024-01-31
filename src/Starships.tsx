import { useData } from "./useData.ts";
import { STARSHIPS_ENDPOINT } from "./urls.ts";

export function Starships() {
  const { data, isLoading } = useData({
    endpoint: STARSHIPS_ENDPOINT,
  });
  console.log({ data });
  return <h2>Starship: {isLoading ? "LOADING..." : data?.name}</h2>;
}
