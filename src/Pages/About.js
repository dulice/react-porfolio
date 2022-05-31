import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import aboutImg from '../image/about-img.png'
import green from '../image/green.png'
import yellow from '../image/yellow.png'
import blue from '../image/blue.png'
import cv from '../image/Resume.pdf'
import { Store } from '../context/Store';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    const { state } = useContext(Store);
    const { colorMode } = state;
  return (
    <div id="about" className="dark:bg-gray-900 dark:text-white py-10">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 mt-7">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-6" data-aos="fade-right" data-aos-duration="500">
                    {colorMode === 'green'
                    ?   <img src={green} alt="" className='w-4/6 mx-auto sm:mx-0' />
                    : colorMode === 'yellow'
                    ?   <img src={yellow} alt="" className='w-4/6 mx-auto sm:mx-0' />
                    : colorMode === 'blue'
                    ?   <img src={blue} alt="" className='w-4/6 mx-auto sm:mx-0' />
                    :   <img src={aboutImg} alt="" className='w-4/6 mx-auto sm:mx-0' />
                    }
                    
                </div>
                <div className="col-span-12 sm:col-span-6" data-aos="fade-up" data-aos-duration="00">
                    <div className="" >
                        <p className="font-bold text-3xl mt-5">About Me</p>
                        <div className="w-16 h-1 rounded-full mt-2 bg-skin-base"></div>
                    </div>
                    <p className="leading-normal mt-5">
                    I am a professional in HTML, CSS and JavaScript. I am passionate about CSS frameworks such as Bootstrap, Tailwind CSS and Material UI. I am also using css preprocessors such as sass. I am passionate about JavaScript frameworks such as JQuery and libraries like Reactjs. I am also familiar with Nodejs, Express and Mongodb.
                    </p>
                    <button className="mt-5 text-white px-4 py-2 rounded-full bg-skin-base hover:bg-tahiti-100 active:bg-tahiti-200">
                        <a href={cv} download> Download CV</a>
                    </button>
                </div>
                <div className="col-span-12">

                    <div className="mx-auto">
                        <p className="font-bold text-3xl mt-5 text-center" data-aos="zoom-in" data-aos-duration="600">Skills</p>
                        <div className="w-16 h-1 rounded-full mt-2 bg-skin-base mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div data-aos="fade-up" data-aos-duration="700" className="hover:bg-tahiti-100 hover:text-white duration-500 col-span-6 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:figma" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">Figma</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:html-5" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">HTML</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:css-3" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">CSS</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:sass" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">CSS preprocessors</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-start-0 sm:col-start-2 col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5 flex flex-col justify-between">
                            <Icon icon="logos:jquery" className='mx-auto text-center text-3xl' />
                            <p className="font-bold text-center mt-5">JQuery</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:javascript" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">JavaScript</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:react" className='mx-auto text-center text-7xl' />
                            <p className="font-bold text-center mt-5">React</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-start-0 sm:col-start-4 col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5">
                            <Icon icon="logos:nodejs" className='mx-auto text-center text-7xl' />
                            <Icon icon="logos:express" className='mx-auto text-center text-3xl' />
                            <p className="font-bold text-center mt-5">Nodejs</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="700" className="col-span-6 hover:bg-tahiti-100 hover:text-white duration-500 sm:col-span-3 border-2 shadow-sm p-5 border-gray-300 rounded-md mt-5 flex flex-col justify-between">
                            <Icon icon="logos:mongodb" className='mx-auto text-center text-3xl' />
                            <p className="font-bold text-center mt-5">MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About