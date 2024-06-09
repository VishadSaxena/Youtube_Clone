import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/appSlice';
import { YOUTUBE_SUGGESTION_API } from '../utils/constants';
import { cacheSearch } from '../utils/searchSlice';

const Header = () => {

    const [searchItem,setSearchItem] = useState("🔍 Search");
    const [showSuggestion,setShowSuggestion] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
   
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar());
    }

    useEffect(()=>{
       const timer = setTimeout(() =>{
        if(searchCache[searchItem]){
            setSuggestions(searchCache[searchItem]);   
        }
        else {
                suggestionApi();
             }
        },200);
       
       return () => {
        clearTimeout(timer);
       };
    }, [searchItem] );

    const suggestionApi = async () => {
        const data = await fetch(YOUTUBE_SUGGESTION_API + searchItem);
        const json = await data.json();
        setSuggestions(json[1]);
        //console.log(json[1]);
        dispatch(cacheSearch({
            [searchItem]: json[1], 
        })
    );
    };

  return (
    <div className='grid grid-flow-col shadow-lg bg-gray-300'>
        <div className='m-2 p-4 col-span-1 flex'>
            <img className='w-18 h-8 cursor-pointer hover:bg-gray-200' alt="SideBar Menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" 
                onClick={() => toggleSidebarHandler()}
            />
            <a href='/'><img className='mx-2 h-8 cursor-pointer' alt='Logo' src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" /></a>


        </div>

        <div className='w-8/12 my-5 ml-60 px-14 col-span-10'>

            <input type='text' className="px-5 w-2/3 rounded-l-full p-2 border border-gray-400" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} onClick={() => setSearchItem("")} onFocus={()=> setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} />
            <button className="px-5 py-2 border border-gray-400 rounded-r-full hover:bg-gray-200"> 🔍 </button>
            {showSuggestion && (
                <div className="absolute bg-white py-3 px-2 w-[36rem] shadow-lg rounded-2xl border border-gray-100">
                    <ul>
                        {suggestions.map((s) => 
                            
                                <li key={s} className="flex py-2 px-3 shadow-sm hover:bg-gray-100"> 
                                <img className='w-8 pr-2' alt="search" src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"/>
                                    {s}
                                </li>)
                            
                        }
            
                    </ul>
                </div>
            )}
        </div>

        <div className="col-span-1 pt-6 cursor-pointer">
            <img className="h-8" alt='user icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>

        </div>
    </div>
  )
}

export default Header;