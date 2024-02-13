import { useEffect, useState } from "react";
import Papa from "papaparse";
import { QUERY, QUERY_DATA_MAP } from "../mocks";

export type GenericData<T extends Record<string, any>> = T[];

function useGetData(query: QUERY | null) {
  const [parsedData, setParsedData] = useState<GenericData<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query && query!== QUERY.INVALID) {
          const response = await fetch(QUERY_DATA_MAP[query]);
          const csvString = await response.text();

          Papa.parse(csvString, {
            complete: (result) => {
              setParsedData(result.data);
              setIsLoading(false);
            },
            header: true,
          });
        } else {
          
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);
  return { parsedData, isLoading, error };
}

export default useGetData;
