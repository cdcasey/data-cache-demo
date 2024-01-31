import { useEffect, useState } from "react";
import { BASE_URL } from "./urls.ts";

export function useData({ endpoint, id }: { endpoint: string; id?: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(BASE_URL + endpoint + id);
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    }
    if (id !== "0") {
      getData();
    }
  }, [endpoint, id]);

  return { data, isLoading };
}
