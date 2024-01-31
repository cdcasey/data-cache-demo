import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BASE_URL } from "./urls.ts";

export function useData({ endpoint }: { endpoint: string }) {
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
    if (id && id !== "0") {
      getData();
    }
  }, [endpoint, id]);

  return { data, isLoading };
}
