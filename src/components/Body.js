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
                <div className="">
                    <div className="flex flex-wrap">
                        <ButtonList/>
                    </div>
                    <VideoContainer />
                </div>
            </div>
            
        </div>
    )
}

export default Body;