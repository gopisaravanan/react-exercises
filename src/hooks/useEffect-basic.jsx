import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("api calling...");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>useEffect-basic</div>
      <ol>
        {data.map((val) => (
          <li>{val.name}</li>
        ))}
      </ol>
    </>
  );
};

export default DataFetch;
