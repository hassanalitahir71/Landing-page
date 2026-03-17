import React from 'react'

const Header = () => {
  return (
    <div className=" flex h-14  w-full mx-auto items-center  pl-21 pr-55  justify-between">
      <img src="images/logo.png" alt=""  className='h-full'/>
      <nav className="flex text-White1  text-lg gap-12 font-lexend font-normal" >
        <a href="" className="">
          HOME
        </a>
        <a href="" className="">
          SERVICES
        </a>
        <a href="" className="">
          FEATURES
        </a>
        <a href="" className="">
          PORTFOLIO
        </a>
        <a href="" className="">
          BLOG
        </a>
        <a href="" className="">
          CONTACT
        </a>
      </nav>
    </div>
  );
}

export default Header
