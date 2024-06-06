import { Outlet } from "react-router-dom";
import ButtonList from "./ButtonList";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {


    return (
        <div>
            <div className="flex">
                <div className="">
                    <Sidebar/>
                </div>
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Body;