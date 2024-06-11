import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  const [liveMessage,setLiveMessage] = useState(""); 

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20),
      }));
    },2000 );

    return () => clearInterval(i);
  },[]);

  return (
    <div className="flex flex-col rounded-lg border border-black my-1 mx-8">
      <div className="w-[600px] overflow-y-scroll flex flex-col-reverse h-[510px] ">
        <div className="py-1 bg-slate-100">
          {
              chatMessages.map((c,index) => 
           (<ChatMessage key={index} name={c.name} message={c.message}/>)
          )}
        </div>
      </div>
     <br></br>
     <div className="flex pb-4">
      <form onSubmit={(e)=> {
        e.preventDefault();
        dispatch(
          addMessage({
            name: "Vishad Saxena",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      } }>
        <input className="border shadow-3xl rounded-full w-[460px] h-8 my-1 mx-8 p-2" value={liveMessage} type="text" onChange={(e) => setLiveMessage(e.target.value) }/>
      
      <button className="shadow-xl rounded-full items-center w-8 my-1" >
        >
      </button>
      </form>
     </div>
    </div>
  );
};

export default LiveChat;