import React from 'react'
import { Icon } from '@iconify/react';
import AOS  from 'aos';
AOS.init();

const Service = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white py-10">      
        <div id="service" className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <div className="mx-2">
                <p data-aos="zoom-in" data-aos-duration="600" className="font-bold text-3xl mt-5">Service Provide</p>
                <div className="w-16 h-1 rounded-full mt-2 bg-skin-base"></div>
            </div>
            <div className="grid grid-cols-12 gap-6 mx-2">
                <div data-aos="fade-left" data-aos-duration="500" className="group col-span-12 sm:col-span-4 hover:bg-tahiti-100 hover:text-white duration-500 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                    <button className=" rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm bg-skin-base px-5 py-2 group-hover:bg-white duration-500">
                        <Icon icon="ic:sharp-art-track" className='text-5xl text-white group-hover:text-skin-base duration-500'/>
                    </button>
                    <p className="text-2xl font-bold my-5">WEB DESIGN</p>
                    <p className="">
                    It's about organizing about the content and flow of a website based on research. Eventually I come up with a structure/ design that balance the users' desires with the business's needs.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="600" className="group col-span-12 sm:col-span-4 hover:bg-tahiti-100 hover:text-white duration-500 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                    <button className=" rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm bg-skin-base px-5 py-2 group-hover:bg-white duration-500">
                        <Icon icon="icon-park-outline:code-computer" className='text-5xl text-white group-hover:text-skin-base duration-500'/>
                    </button>
                    <p className="text-2xl font-bold my-5">FRONTEND DEVELOPMENT</p>
                    <p className="">
                    As a desinger, I understand the perfect user interface should look good and work even better. Alongside my clients, I uncover problems and solve them.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="700" className="group col-span-12 sm:col-span-4 hover:bg-tahiti-100 hover:text-white duration-500 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                    <button className=" rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm bg-skin-base px-5 py-2 group-hover:bg-white duration-500">
                        <Icon icon="entypo:database" className='text-5xl text-white group-hover:text-skin-base duration-500'/>
                    </button>
                    <p className="text-2xl font-bold my-5">WEB DEVELOPMENT</p>
                    <p className="">
                    It's about organizing about the content and flow of a website based on research. Eventually I come up with a structure/ design that balance the users' desires with the business's needs.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service