import { useParams } from "react-router-dom";
import { useData } from "./useData.ts";
import { PLANETS_ENDPOINT } from "./urls.ts";

export function Planets() {
  const { planetId } = useParams();
  console.log({ planetId });
  const { data, isLoading } = useData({
    endpoint: PLANETS_ENDPOINT,
    id: planetId,
  });

  console.log({ data });

  return <h2>Starship: {isLoading ? "LOADING..." : data?.name}</h2>;
}
