import { useEffect, useState, type ReactNode } from "react";

type dataType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  children: ReactNode;
};

const Effect = () => {
  const [data, setData] = useState<dataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Id : {data.id}</p>
          <h1>{data.title}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Effect;
