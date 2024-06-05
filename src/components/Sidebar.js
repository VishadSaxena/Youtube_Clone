const Sidebar = () => {
    return <div>
        <div className="p-4 m-2 w-56 shadow-lg">
            <ul>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="home" src="https://cdn-icons-png.flaticon.com/512/60/60817.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Home
                    </span>
                </div>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="shorts" src="https://www.iconpacks.net/icons/5/free-youtube-shorts-logo-icon-15253-thumb.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Shorts
                    </span>
                </div>  
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Music" src="https://icons.iconarchive.com/icons/pictogrammers/material/512/youtube-subscription-icon.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Subscriptions
                    </span>
                </div>     
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Youtube Music" src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-music-4560391-3789455.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Youtube Music
                    </span>
                </div>         
            </ul>

            <hr/>

            <ul>
                <h2 className="text-xl font-bold">
                    You       
                    <span>
                        &gt;
                    </span>
                </h2>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Your Channel" src="https://cdn-icons-png.flaticon.com/512/60/60817.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Your Channel
                    </span>
                </div>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="History" src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        History
                    </span>
                </div>  
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Watch Later" src="https://static.thenounproject.com/png/4970870-200.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Watch Later
                    </span>
                </div>     
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Liked videos" src="https://static.thenounproject.com/png/4530409-200.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Liked videos
                    </span>
                </div>        
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Downloads" src="https://static.thenounproject.com/png/770591-200.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Downloads
                    </span>
                </div>    
            </ul>

            <hr />

            
            <ul>
                <h2 className="text-xl font-bold">
                    Explore
                </h2>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Your Channel" src="https://cdn-icons-png.flaticon.com/512/1946/1946485.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Trending
                    </span>
                </div>
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Music" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/music-video-2071121-1745616.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Music
                    </span>
                </div>  
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Live" src="https://static-00.iconduck.com/assets.00/live-icon-2048x1506-jedkz877.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Live
                    </span>
                </div>     
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Gaming" src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Gaming
                    </span>
                </div>        
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="News" src="https://static-00.iconduck.com/assets.00/news-icon-2048x1784-65gvy8qa.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        News
                    </span>
                </div>   
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Sports" src="https://cdn-icons-png.flaticon.com/512/20/20647.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Sports
                    </span>
                </div> 
                <div className="flex">
                    <li className="p-2 cursor-pointer">
                        <img className="w-6" alt="Podcasts" src="https://static-00.iconduck.com/assets.00/live-icon-2048x1506-jedkz877.png"/>
                    </li>
                    <span className="p-2 font-semibold text-lg cursor-pointer">
                        Podcasts
                    </span>
                </div>  
            </ul>

        </div>
    </div>
}

export default Sidebar;