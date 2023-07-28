import React from 'react'
import { BsXLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
const Modal = ({card, handleClose}) => {
  return (
    <>
        <motion.div
              initial={{y: "-100vh"}}
              animate={{y: 0}}
              exit={{y: "100vh"}}
              transition={{
                duration: 1,
                type: "spring"
              }}
             className="popup shadow-md rounded-sm z-20 fixed width-full h-full overflow-y-scroll inset-x-6 sm:inset-x-20 bg-gray-300 dark:bg-gray-500 dark:text-white">
              <div className="grid grid-cols-6 gap-6 h-full">
                <div className="col-span-6 lg:col-span-3 p-10">
                  <button className='float-right' onClick={handleClose}><BsXLg/></button>
                  <p className="font-bold text-2xl mb-5">{card.title}</p>
                  <p className="" dangerouslySetInnerHTML={{__html: card.description}}></p>
                  <div className="flex justify-between mt-5">
                    <a href={card.demo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-bold">Demo</a>
                    <a href={card.source} target="_blank" rel="noopener noreferrer" className='underline text-blue-600 font-bold'>Source code</a>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-3">
                  <img src={card.image} alt="" className='h-full object-cover object-center'/>
                </div>               
              </div>
            </motion.div>
    </>
  )
}

export default Modal