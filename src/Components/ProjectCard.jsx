import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Modal from "./Modal";

const ProjectCard = ({ card }) => {
  const [show, setShow] = useState(false);
  const handleShow = (id) => {
    setShow(true);
    disableBodyScroll(window.innerHeight);
  };
  const handleClose = () => {
    setShow(false);
    enableBodyScroll(window.innerHeight);
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="group col-span-12 sm:col-span-4 border-2 shadow-sm p-5 border-gray-300 dark:border-gray-700 rounded-md mt-5"
      >
        <img
          src={card.image}
          alt=""
          onClick={handleShow}
          className="hover:scale-95 duration-500"
        />
        <p className="text-center my-5 font-bold">{card.name}</p>
        <div className="flex justify-between">
          <a
            href={card.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-800"
          >
            Demo
          </a>
          <a
            href={card.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-800"
          >
            Source code
          </a>
        </div>
      </div>
      {show && <Modal card={card} handleClose={handleClose} />}
    </>
  );
};

export default ProjectCard;
