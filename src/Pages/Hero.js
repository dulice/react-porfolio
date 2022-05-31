import React, { useContext } from 'react'
import { Store } from '../context/Store';
import heroImg from '../image/hero.png';
import { motion } from 'framer-motion';
const Hero = () => {
  const { dispatch} = useContext(Store);

  const handleClick = (currentValue) => {
    dispatch({type: "COLOR_MODE", payload: currentValue});
  }

  return (
    <div className='hero dark:bg-gray-500 dark:text-white' id="hero">
        <div className="absolute right-1 sm:right-5 top-10 z-20">
          <button onClick={() => handleClick('green')} className='block p-2 rounded-full border-2 border-gray-700 dark:border-white m-5 bg-[#009B72]'></button>
          <button onClick={() => handleClick('')} className='block p-2 rounded-full border-2 border-gray-700 dark:border-white m-5 bg-[#CC156D]'></button>
          <button onClick={() => handleClick('yellow')} className='block p-2 rounded-full border-2 border-gray-700 dark:border-white m-5 bg-[#F6B743]'></button>
          <button onClick={() => handleClick('blue')} className='block p-2 rounded-full border-2 border-gray-700 dark:border-white m-5 bg-[#7E5FF9]'></button>
        </div>
        <div className="grid grid-cols-6 gap-6 justify-between h-screen max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: "50"
            }}
           className="col-span-6 sm:col-span-3 h-full flex items-center">
            <div className="mt-20 sm:mt-0">
                <p className="font-bold mb-5">Hello, I’m Nang Mywe Noon</p>
                <p className="text-5xl leading-normal ">I am WEB DEVELOPER,<br/> WEB DESIGNER.</p>
                <p className="mb-5 dark:text-gray-300">I am passionate about build website with fully responsive on web and mobile solution using HTML, CSS, JAVASCRipt, REACT, NODEJS, etc.</p>
                <button className='text-white px-4 py-2 rounded-full bg-skin-base hover:bg-tahiti-100 active:bg-tahiti-200'>
                  <a href="https://api.whatsapp.com/send/?phone=9767331403&text&app_absent=0" target="_blank">Hire Me</a>
                </button>
            </div>
          </motion.div>
            <motion.div
            initial={{x: "100vh"}}
            animate={{x: 0}}
            transition={{
              duration: 1,
              type: "spring",
             }}
              className="col-span-6 sm:col-span-3 h-full flex items-end">
                <img src={heroImg} alt="" className='object-right-bottom' />
            </motion.div>
        </div>
        
    </div>
  )
}

export default Hero