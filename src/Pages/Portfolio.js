import AOS from "aos";
import ProjectCard from "../Components/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { port } from "./AddProject";
import Loading from "../Components/Loading";
AOS.init();

const Protfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${port}/projects`);
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  },[]);
  return (
    <div id="portfolio" className="dark:bg-gray-900 dark:text-white py-10">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="">
          <p
            data-aos="zoom-in"
            data-aos-duration="500"
            className="font-bold text-3xl mt-5"
          >
            Lastest Project
          </p>
          <div className="w-16 h-1 rounded-full mt-2 bg-skin-base"></div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-12 gap-6  mt-5">
            {projects.map((card) => (
              <ProjectCard card={card} key={card._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Protfolio;
