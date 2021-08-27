import React from "react";
import { useState, useEffect } from "react";



const Tommy = (prop) => {
  console.log(`the tommy prop  0 is ${prop.info[0]}`);

  const [value, setValue] = useState({});

  useEffect(() => {
    let filteredData = {};
    for (let i = 0; i < prop.info.length; i++) {
      if (prop.info[i].company === "TOMMY") {
        console.log(`${i}Hello`);
        filteredData = { ...prop.info[i] };
      }
    }
    console.log(`filteredData= ${JSON.stringify(filteredData)}`);
    setValue((prevState) => filteredData);
  }, []);

  return (
    <div>
      <p className="title">{value.title}</p>
      <p className="companyName">{value.company}</p>
      <p className="date">{value.dates}</p>
      
    </div>
  );
};

export default Tommy;
