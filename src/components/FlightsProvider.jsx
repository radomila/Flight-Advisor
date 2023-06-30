import React, { useState, useEffect, createContext } from "react";

export const FlightsContext = createContext(); 


export default function FlightsProvider(props) {
  const [data, setData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json", { 
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json(); 
          setData(result); 
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <FlightsContext.Provider value={data}>
        {props.children} 
      </FlightsContext.Provider>
    </div>
  );
}

