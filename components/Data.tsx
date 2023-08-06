import { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState("Loading...");
  const [responseReceived, setResponseReceived] = useState(false);
  useEffect(() => {
    if (data) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            process.env.BACKEND_API_IP
            // "http://localhost:5191/get-variable"
          );
          const data = await response.text();
          setData(data);
          setResponseReceived(true);
        } catch (error) {
          console.log("Error fetching data: ", error);
        }
      };
      const interval = setInterval(() => {
        if (!responseReceived) {
          fetchData();
        }
      }, 50);
      return () => {
        clearInterval(interval);
      };
    }
  }, [data, responseReceived]);

  return <p>{data}</p>;
}
