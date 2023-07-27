import React from 'react'
import { useContext, useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import { Store } from '../context/Store'
import { MdDarkMode } from 'react-icons/md'
import { FaSun } from 'react-icons/fa'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: 'hero', current: true },
    { name: 'About', href: 'about', current: true },
    { name: 'Service', href: 'service', current: true },
    { name: 'Portfolio', href: 'portfolio', current: true },
    { name: 'Contact', href: 'contact', current: true },
  ]

const Navbar = () => {

    const {state, dispatch} = useContext(Store);
    const { darkMode } =state;
    const [isdark, setIsdark] = useState(true);
    const [showNav, setshowNav] = useState("0px");
    const [navPosition, setNavPosition] = useState("absolute");
    const [navColor, setNavColor] = useState("origin");
    const [navClass, setNavClass] = useState("dark-active");
    const [open, setOpen] = useState(false);
  
    const listenScrollEvent = () => {
      window.scrollY > window.innerHeight - 100 ? setshowNav("0px") : setshowNav("-10px");
      window.scrollY > window.innerHeight - 100 ? setNavPosition("fixed") : setNavPosition("absolute");
      window.scrollY > window.innerHeight - 100 ? setNavClass("dark-active") : setNavClass("dark-inactive");
      window.scrollY > window.innerHeight - 100 ? setNavColor("given") : setNavColor("origin");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
  
    const handleDarkMode = () => {
      setIsdark(!isdark);
      dispatch({type: "DARK_MODE", payload: isdark});
    }

  return (
    <nav className={`duration-500 w-full dark-inactive dark:dark-active ${navColor} dark:${navColor} `}
      style={{
        top: window.innerWidth > 640 ? showNav : '0px',
        position: navPosition,
      }}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`py-3 hidden sm:flex justify-between items-center duration-500 `}>
          <Link to="hero" className='cursor-pointer' smooth={true}>
            <p className='text-2xl font-bold'>
                <span className="dark:text-white">Port</span>
                <span className=" text-skin-base">folio</span>
            </p>
          </Link>
            <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-9 text-white">
                    <button onClick={handleDarkMode} className="p-2 rounded-full border-2 dark:border-white border-black">
                    {darkMode ? <FaSun/> : <MdDarkMode className='text-black'/> }</button>
                    {navigation.map((item) => (       
                    <Link
                    arila-hidden="true"
                        activeClass="active"
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500}
                        key={item.name}
                        to={item.href}
                        className="cursor-pointer nav-item text-black dark:text-white"
                    >
                        {item.name}
                    </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className={`px-2 py-3 flex justify-between items-center duration-500 sm:hidden ${open ? 'bg-gray-300 dark:bg-gray-800' : ''} `}>
            <p className='text-2xl font-bold'>
                <span className="dark:text-white">Port</span>
                <span className=" text-skin-base">folio</span>
            </p>
            {open ? (
                <XIcon onClick={()=>setOpen(false)} className="block h-6 w-6 duration-500 dark:text-white" />
              ) : (
                <MenuIcon onClick={()=>setOpen(true)} className="block h-6 w-6 duration-500 dark:text-white" />
              )}
        </div>
        {open && 
          <div className="pl-3 block sm:hidden bg-gray-300 dark:bg-gray-800 rounded-b-md">
              <div className="text-white">
                  <button onClick={handleDarkMode} className="p-2 rounded-full border-2 dark:border-white border-black duration-500">
                  {darkMode ? <FaSun/> : <MdDarkMode className='text-black'/> }</button>
                  {navigation.map((item) => (       
                  <Link
                  arila-hidden="true"
                      activeClass="active"
                      spy={true} 
                      smooth={true} 
                      offset={-50} 
                      duration={500}
                      key={item.name}
                      to={item.href}
                      className="cursor-pointer nav-item text-black dark:text-white block my-3 duration-500"
                      onClick={() => setOpen(false)}
                  >
                      {item.name}
                  </Link>
                  ))}
              </div>
          </div>
        }
        </div>
    </nav>
  )
}

export default Navbar