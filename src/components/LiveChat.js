import { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");

      dispatch(addMessage({
        name: "Vishad",
        message: "Om Namah Shivay",
      }));
    },2000 );

    return () => clearInterval(i);
  },[]);

  return (
     <div className="h-[600px] my-1 mx-8 rounded-lg border border-black w-[600px] overflow-y-scroll">
       <div className="p-1 bg-slate-100">
         {
              chatMessages.map((c,index) => 
           (<ChatMessage key={index} name={c.name} message={c.message}/>)
         )}
         </div>
     </div>
    // <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    //     <div>
    //       {
    //         // Disclaimer: Don't use indexes as keys
    //         chatMessages.map((c, i) => (
    //           <ChatMessage key={i} name={c.name} message={c.message} />
    //         ))
    //       }
    //     </div>
    //   </div>
  );
};

export default LiveChat;