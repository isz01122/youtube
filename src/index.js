import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import Youtube from "./service/youtube";
import axios from "axios";

//한번만 만들어서 전달한다!
const httpClint = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClint);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
