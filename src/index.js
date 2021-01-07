import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import Youtube from "./service/youtube";

//한번만 만들어서 전달한다!
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
