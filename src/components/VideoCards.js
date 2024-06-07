const VideoCards = ({ info }) => {

    //console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails} = snippet;
    const d = new Date();
  
    return (
      <div className="p-2 m-2 w-72 shadow-lg hover:bg-gray-200">
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <span className="flex">
          <li className="pr-2">{statistics.viewCount} views</li>
          <li>&#x2022;</li>
          <li className="pl-2">{(Math.floor(Math.random()*10))} weeks ago</li>
          </span>
        </ul>
      </div>
    );
  };


  export const AdVideo = ({info}) => {
    return(  
      <div className="border border-red-900">
        <VideoCards info={info}/>
        <div>Ad</div>
      </div>
     );
  };
export default VideoCards;