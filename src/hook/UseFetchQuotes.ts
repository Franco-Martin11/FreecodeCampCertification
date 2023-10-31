import { useEffect, useState } from "react";
import { quoteObject } from "../types/types";

const UseFetchQuotes = (): {
  data: quoteObject[] | null;
  isLoading: boolean | null;
  error: Error | null;
  fetchData: () => void;
} => {
  const url = "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937",
      "X-RapidAPI-Host": "quotes-by-api-ninjas.p.rapidapi.com",
    },
  };
  const [data, setData] = useState<quoteObject[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const json: quoteObject[] = await response.json();
      if (response.status !== 200) {
        throw new Error(`Error fetching. Status: ${response.status}`);
      } else {
        setData(json);
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a la función para obtener los datos al cargar el componente
  }, []);

  return { data, isLoading, error, fetchData };
};
export default UseFetchQuotes;
