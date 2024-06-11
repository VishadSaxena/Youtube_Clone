import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Subscriber from "./Subscriber";
import LiveChat from "./LiveChat";


const WatchPage = () => {

    const [searchParams] = useSearchParams();

    //console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    const closeSidebarHandler = () => {
        dispatch(closeSidebar());
    };

    useEffect(()=>{closeSidebarHandler()},[]);

    return (
        <div>
            <div className="p-1 mx-0.5 flex-row">
                <div className="flex">
                    <iframe 
                        width="1100" 
                        height="600"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen 
                        className="rounded-3xl shadow-lg">   
                    </iframe>
                    
                        <LiveChat/>
                    
                </div>    
                <div className="shadow-lg rounded-lg h-32 mt-6 w-[1100px]">
                    <Subscriber/>
                </div>
                <div className="shadow-lg bg-gray-200 rounded-lg h-32 mt-6 w-[1100px]">
                    <CommentContainer />
                </div>
            </div>
        </div>
);
};

export default WatchPage;