import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data?.map((val) => (
        <div key={val.id}>
          <h3>{val.title}</h3>
          <p>{val.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
