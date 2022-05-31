import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useContext, useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import { Store } from '../context/Store'
import { MdDarkMode } from 'react-icons/md'
import { FaSun } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: 'hero', current: true },
  { name: 'About', href: 'about', current: true },
  { name: 'Service', href: 'service', current: true },
  { name: 'Portfolio', href: 'portfolio', current: true },
  { name: 'Contact', href: 'contact', current: true },
]

const Header = () => {
  const {state, dispatch} = useContext(Store);
  const { darkMode } =state;
  const [isdark, setIsdark] = useState(true);
  const [showNav, setshowNav] = useState("0px");
  const [navPosition, setNavPosition] = useState("absolute");
  const [navColor, setNavColor] = useState("origin");
  const [navClass, setNavClass] = useState("dark-active");

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
    <Disclosure as="nav" >
      {({ open }) => (
        <div className={`w-full dark-inactive dark:dark-active ${navColor} dark:${navColor} `}
          style={{
          top: showNav,
          position: navPosition,
        }}
        >
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="w-full flex items-center justify-end sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                    <p className='text-2xl font-bold'>
                        <span className="dark:text-white">Port</span>
                        <span className=" text-skin-base">folio</span>
                    </p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-9 text-white">
                    <button onClick={handleDarkMode} className="p-2 rounded-full border-2 dark:border-white border-black">
                      {darkMode ? <FaSun/> : <MdDarkMode className='text-black'/> }</button>
                    {navigation.map((item) => (       
                      <>
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
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-black dark:text-white dark:bg-gray-800">
            <button onClick={handleDarkMode} className="p-2 rounded-full border-2 dark:border-white border-black">
                      {darkMode ? <FaSun/> : <MdDarkMode className='text-black'/> }</button>
              {navigation.map((item) => (
                <> 
                {open && 
                  <Link
                  activeClass="active"
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="cursor-pointer nav-item block py-2"
                >
                  {item.name}
                </Link>
                }
                </>

                //   className={classNames(
                //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                //     'block px-3 py-2 rounded-md text-base font-medium hover:border-b-2 hover:border-white'
                //   )}
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Header