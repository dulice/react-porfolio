import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-between items-center -mt-5 dark:bg-gray-900">
        <div className="w-2/5 h-2 bg-skin-base rounded-lg"></div>
        <p className="text-3xl font-bold dark:text-white text-center">
          Contact Me
        </p>
        <div className="w-2/5 h-2 bg-skin-base rounded-lg"></div>
      </div>
      <div className="dark:text-white dark:bg-gray-900 py-2">
        <div className="flex justify-center mt-3">
          <button className="bg-gray-300 py-2 px-4 dark:bg-gray-700 whitespace-nowrap">
            <Icon className="inline-block mr-3" icon="codicon:mail" />
            <a href="mailto:duliceellen600@gmail.com">
              duliceellen600@gmail.com
            </a>
          </button>
        </div>
        <div className="flex justify-around my-3">
          <button className="bg-gray-300 py-2 px-4 dark:bg-gray-700 whitespace-nowrap">
            <Icon className="inline-block mr-3" icon="carbon:phone" />
            <a href="tel:+959767331403">+959767331403</a>
          </button>

          <button className="bg-gray-300 py-2 px-4 dark:bg-gray-700 whitespace-nowrap">
            <Icon className="inline-block mr-3" icon="carbon:location" />
            <a href="https://goo.gl/maps/6NEcNujSqVBrzhyU8" target="_blank">
              Taunggyi, Myanmar
            </a>
          </button>
        </div>
        <div className="flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/nang-mywe-noon-67791a231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-xl mb-5" icon="logos:linkedin" />
          </a>
          <a
            href="https://www.facebook.com/nang.mywe.94/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-xl mb-5 text-blue-700" icon="bi:facebook" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=9767331403&text&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-xl mb-5" icon="logos:whatsapp" />
          </a>
          <a
            href="https://github.com/dulice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-xl mb-5" icon="bi:github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
