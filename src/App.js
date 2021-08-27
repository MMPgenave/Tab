import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Tommy from "./tommy";
import Bigdrop from "./bigdrop";
import Cuker from './cuker';

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("tommy");

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err))
      .then((DATA) => {
        console.log(`the data gatherd with axios is ${DATA}`);
        setData((prevValue) => DATA);
        setIsloading(false);

        console.log(`the data defined with useState is ${DATA}`);
      });
  }, []);

  if (isLoading) {
    return <h1>The page is Loading...</h1>;
  }

  return (
    <div>
      <h1>Experience</h1>
      {/*  <div className="underline"></div>  */}
      <div className="container">
        <div className="leftDiv">
          <div className="btn_container">
            <button
              type="button"
              className="singleBtn"
              onClick={() => setName((prevValue) => "tommy")}
            >
              toomy
            </button>
            <button
              type="button"
              className="singleBtn"
              onClick={() => setName((prevValue) => "bigdrop")}
            >
              bigdrop
            </button>
            <button
              type="button"
              className="singleBtn"
              onClick={() => setName((prevValue) => "cuker")}
            >
              cuker
            </button>
          </div>
        </div>
        <div className="rightDiv">
          {name === "tommy" ? <Tommy info={data} /> : <h4></h4>}
          {name === "bigdrop" ? <Bigdrop info={data} /> : <h4></h4>}
          {name === "cuker" ? <Cuker info={data} /> : <h4></h4>}
        </div>
      </div>
    </div>
  );
}

export default App;

// App.js => 1.hamma : line: 20-25 -> "hmma message ...";
//     2.Saheb : linee:20-25 -> "saheb Code ...";
