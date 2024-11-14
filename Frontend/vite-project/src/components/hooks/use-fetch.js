import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({});

  async function getData() {
    const fetchedData = await axios.get(url);
    return fetchedData.data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const value = await getData();
      setData(value); 
    };

    fetchData();
  }, [url]);

  return data;
}
