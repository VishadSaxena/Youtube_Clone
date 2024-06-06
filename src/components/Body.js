import ButtonList from "./ButtonList";
import Sidebar from "./Sidebar";

const Body = () => {


    return (
        <div className="flex">
            <div className="">
                <Sidebar/>
            </div>
            <div className="">
                <ButtonList/>
            </div>
        </div>
    )
}

export default Body;