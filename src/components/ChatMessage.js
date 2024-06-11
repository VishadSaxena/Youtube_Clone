import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex py-2 items-center shadow-md">
        <img className="h-8 pl-4" alt='user icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
        <span className="pl-2 pr-4 font-bold">{name}</span>
        <span className="">{message} </span>
    </div>
  );
};

export default ChatMessage;