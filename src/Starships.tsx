import { useParams } from "react-router-dom";
import { useData } from "./useData.ts";
import { STARSHIPS_ENDPOINT } from "./urls.ts";

export function Starships() {
  const { starshipId } = useParams();
  console.log({ starshipId });
  const { data, isLoading } = useData({
    endpoint: STARSHIPS_ENDPOINT,
    id: starshipId,
  });

  console.log({ data });

  return <h2>Starship: {isLoading ? "LOADING..." : data?.name}</h2>;
}
