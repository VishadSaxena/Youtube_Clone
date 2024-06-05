import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col shadow-lg bg-gray-300'>
        <div className='m-2 p-4 col-span-1 flex'>
            <img className='w-18 h-8 cursor-pointer' alt="SideBar Menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
            <img className='mx-2 h-8 cursor-pointer' alt='Logo' src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>


        </div>

        <div className='w-8/12 my-5 ml-60 px-14 col-span-10'>

            <input type='text' className="px-5 w-2/3 rounded-l-full p-2 border border-gray-400"/>
            <button className="px-5 py-2 border border-gray-400 rounded-r-full"> 🔍 </button>

        </div>

        <div className="col-span-1 pt-6 cursor-pointer">
            <img className="h-8" alt='user icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>

        </div>
    </div>
  )
}

export default Header;