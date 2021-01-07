import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAFRCTSBDyr2xTy6ZkdnG6fBeBPMddkDfY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;

  // <div>
  //   <i className="fab fa-youtube"></i>
  //   <div className="navbar">
  //     <div className="navbar-icon">icon</div>
  //     <div className="navbar-title">Youtube</div>
  //     <input type="text" className="navbar-search" placeholder="Search" />
  //     <button className="navbar-btn">검색</button>
  //   </div>
  //   <div className="list"></div>
  // </div>
}

export default App;
