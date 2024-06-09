

import React, { useState } from 'react'

const Subscriber = () => {


    const [subscriberBtn, setSubscriberBtn] = useState(true);
    const [showSubs,setShowSubs] = useState("Subscribe");
    const [bellUpdate,setBellUpdate] = useState("https://static-00.iconduck.com/assets.00/bell-icon-1715x2048-hael7mhz.png");

    const toggelSubs = () => {
        if(subscriberBtn){
            setShowSubs("UnSubscribe");
            setSubscriberBtn(false);
            setBellUpdate("https://cdn-icons-png.flaticon.com/512/472/472371.png");
        }
        else{
            setShowSubs("Subscribe");
            setSubscriberBtn(true);
            setBellUpdate("https://static-00.iconduck.com/assets.00/bell-icon-1715x2048-hael7mhz.png");
        }

    }

  return (
    <div>
        <div className="flex justify-between">
            <div className="flex">
                <div className="">
                    <img className="w-14 rounded-full p-1 m-1" alt="Profile-pic" src="https://yt3.ggpht.com/yti/ANjgQV8BkqgpXmPLFlZUIR-wnuAZ9N9UIJm6yuNw2IeEgC-LTbNh=s88-c-k-c0x00ffffff-no-rj" />
                </div>
                <div className="p-1 mt-1">
                    <div className="font-bold"> 
                        Vishad Saxena
                    </div >
                    <div className="font-light">
                        1.25M subscribers
                    </div>
                </div>
                <div className="flex p-1 mx-5 m-1 rounded-3xl shadow-2xl w-46 h-12 bg-gray-200" onClick={ () => toggelSubs()}>
                     <img className="m-2 p-1 w-1/5 h-8" alt="bell-icon" src={bellUpdate} />
                     <button className="w-4/5 text-center mr-3" > {showSubs} </button>
                </div>
            </div>
            <div className=" flex">
                <div className="flex p-2 m-1 mx-5 w-46 h-12 shadow-xl bg-gray-200 rounded-2xl">
                    <button className="flex"><img className="w-6 mr-2" alt="Like" src="https://cdn-icons-png.flaticon.com/512/25/25297.png"/><span>11k</span></button>
                    <button className=""><img className="w-6 ml-5" alt="Like" src="https://cdn-icons-png.flaticon.com/128/2415/2415402.png"/></button>
                </div>
                <div className="p-2 m-1 w-46 h-12 shadow-xl bg-gray-200 rounded-2xl" >
                    <button className="flex"><img className="w-6 mr-3" alt="share" src="https://cdn-icons-png.flaticon.com/128/2958/2958783.png"/> Share</button>
                </div>
                <div className="p-2 m-1 w-46 h-12 shadow-xl bg-gray-200 rounded-2xl" >
                    <button className="flex"><img className="w-6 mr-3" alt="share" src="https://cdn-icons-png.flaticon.com/128/2989/2989976.png"/> Download</button>
                </div>
                <div className="p-2 m-1 w-46 h-12 shadow-xl bg-gray-200 rounded-2xl" >
                    <button className="flex"><img className="w-6 mr-3" alt="share" src="https://cdn-icons-png.flaticon.com/128/2927/2927563.png"/> Clip</button>
                </div>
                <div className="p-2 m-1 h-12 w-1/10 shadow-xl bg-gray-200 rounded-2xl" >
                    <button className="flex"> ...</button>
                </div>
            </div>
         </div>
    </div>
  );
};

export default Subscriber