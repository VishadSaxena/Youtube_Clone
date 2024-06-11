import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards, { AdVideo } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      getVideos();
    }, []);
  
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
      //console.log(json.items);
    };
  
    return (
      <div className="flex flex-wrap">
        {videos[0] && <AdVideo info={videos[0]} />}
        {videos.map((video) => (
         <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCards info={video} /> </Link>
          
        ))}
      </div>
    );
  };

export default VideoContainer;