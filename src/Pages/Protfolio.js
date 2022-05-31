import React, { useState } from 'react'
import mernEcom from '../image/mern-ecom.png'
import bookingApp from '../image/booking-app.png'
import crypto from '../image/crypto.png'
import movieImg from '../image/movie.png'
import cooking from '../image/cooking.png'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import AOS  from 'aos';
import { BsXLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
AOS.init();

const data = [
  {id: "0", name: "Ecommerce Website", image: mernEcom, demo: "https://mern-ecom-dulice.herokuapp.com/", source: "https://github.com/dulice/amazon", description: "This is a full responsive ecommerce website include client view and admin view. I am using frontend with Reactjs and user global control state Context Api. Using backend with nodejs framework express and store data with Mongodb.<br/>Card Number: 4242 4242 4242 4242<br/> MM/YY: 12 / 24 <br/>CVC: 123 <br/><br/>These are the following require to login into admin side.<br/>Name: popper1@gmail.com<br/>Password: 123456"},
  {id: "1", name: "Booking App", image: bookingApp, demo: "https://hotel-booking-dulice.herokuapp.com/", source: "https://github.com/dulice/booking", description: "This is full responsive website can book a room can choose date and form admin side can create room."},
  {id: "2", name: "Crypto Currency Tracker", image: crypto, demo: "https://ddcrypto-hunter.netlify.app/", source: "https://github.com/dulice/crypto-tracker", description: "This is a crypto tracker app using frontend with React and fetching api with redux toolkit. To get top crypto currency, fetching api from coin ranking and to get the daily news update of crypto currency, fetching api from bing news search api."},
  {id: "3", name: "Movie Trailer App", image: movieImg, demo: "https://ddmovie.netlify.app/", source: "https://github.com/dulice/movie-app", description: "This is a full responsive movie trailer App include search bar, top movie, top tv show, popular people, etc. Using frontend as a Reactjs and CSS framwork Bootstrap. Fetching data from TMDB."},
  {id: "4", name: "Cooking Recipe App", image: cooking, demo: "https://recipe-app-dulice.netlify.app/", source: "https://github.com/dulice/cooking-app", description: "I created cooking recipe app using React and fetching api from spoonacular. You can search every recipe and can see the instruction and also ingredients."},

]

const Protfolio = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});
  const handleShow = (id) => {
    const selected = data.find(el => el.id.toString() === id.toString());
    setSelected(selected);
    if(selected) {
      setShow(true);
      disableBodyScroll(window.innerHeight)
    }
  }
  const handleClose = () => {
    setShow(false);
    enableBodyScroll(window.innerHeight);
  }
  return (
    <div id="portfolio" className='dark:bg-gray-900 dark:text-white py-10'>
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="">
            <p data-aos="zoom-in" data-aos-duration="500" className="font-bold text-3xl mt-5">Lastest Project</p>
            <div className="w-16 h-1 rounded-full mt-2 bg-skin-base"></div>
        </div>
        <div className="grid grid-cols-12 gap-6  mt-5">
          {data.map((card, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="500" className="group col-span-12 sm:col-span-4 border-2 shadow-sm p-5 border-gray-300 dark:border-gray-700 rounded-md mt-5">
              <img src={card.image} alt="" onClick={() =>handleShow(index)} className="hover:scale-95 duration-500"/>
              <p className="text-center my-5 font-bold">{card.name}</p>
              <div className="flex justify-between">
                <a href={card.demo} target="_blank" rel="noopener noreferrer" className="underline text-blue-800">Demo</a>
                <a href={card.source} target="_blank" rel="noopener noreferrer" className='underline text-blue-800'>Source code</a>
              </div>
            </div>
          ))}      
          {show && (
            <motion.div
              initial={{y: "-100vh"}}
              animate={{y: 0}}
              exit={{y: "100vh"}}
              transition={{
                duration: 1,
                type: "spring"
              }}
             className="popup shadow-md rounded-sm z-20 fixed width-full inset-x-6 sm:inset-x-20 bg-gray-300 dark:bg-gray-500 dark:text-white">
              <div className="grid grid-cols-6 gap-6 h-full">
                <div className="col-span-6 lg:col-span-3 p-10">
                  <button className='float-right' onClick={handleClose}><BsXLg/></button>
                  <p className="font-bold text-2xl mb-5">{selected.name}</p>
                  <p className="" dangerouslySetInnerHTML={{__html: selected.description}}></p>
                  <div className="flex justify-between mt-5">
                    <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-bold">Demo</a>
                    <a href={selected.source} target="_blank" rel="noopener noreferrer" className='underline text-blue-600 font-bold'>Source code</a>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-3">
                  <img src={selected.image} alt="" className='h-full object-cover object-center'/>
                </div>               
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Protfolio