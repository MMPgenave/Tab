import React from "react";
import { useState, useEffect } from "react";

const Bigdrop = (prop) => {

  const [value, setValue] = useState({});

  useEffect(() => {
    let filteredData = {};
    for (let i = 0; i < prop.info.length; i++) {
      if (prop.info[i].company === "BIGDROP") {
        console.log(`${i}Hello`);
        filteredData = { ...prop.info[i] };
      }
    }
    console.log(`filteredData= ${JSON.stringify(filteredData)}`);
    setValue((prevState) => filteredData);
  }, []);

  return (
    <div>
      <h1>{value.title}</h1>
    </div>
  );
};

export default Bigdrop;
