import Button from "./Button";


const ButtonList = () => {
    return (
        
        <div className="flex flex-wrap ml-2 mt-2 overflow-auto">
            <div className="mt-3 m-2 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200 hover:bg-gray-200">
                <Button name="All"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Music"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-60 h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Twenty20 Cricket"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="News"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Gaming"/>
            </div>
            <div className="m-3 py-2 shadow-lg text-center w-96 h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Indian Premier League"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Live"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="JavaScript"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Thrillers"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-64 h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Reaction videos"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Cricket"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Movies"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-64 h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Computer Programming"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Podcasts"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Gadgets"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Gadgets"/>
            </div>
            <div className="m-3 px-4 py-2 shadow-lg text-center w-auto h-10 bg-gray-300 rounded-xl hover:bg-gray-200">
                <Button name="Gadgets"/>
            </div>
        </div>

    );
};

export default ButtonList;