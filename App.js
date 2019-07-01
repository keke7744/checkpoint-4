import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Title from "./Title.js";
import Photo from "./Photo.js";
import Small from "./Small.js";

function App() {
  return (
    <div className="App">
   
      <Photo src="https://www.disruptunisia.com/images/5adf3627dba7e.jpg" />

      <center>
        <Title name="Go My Code" />
      </center>

      <center>
        <Small small="GMC" />
      </center>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default" app"