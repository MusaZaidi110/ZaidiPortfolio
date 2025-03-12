import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import project1 from "../../images/website-img-1.png";
import project2 from "../../images/website-img-2.png";
import project3 from "../../images/website-img-3.jpg";

const projects = [
  {
    name: "Mr. Car Lift",
    year: "Aug2024",
    align: "right",
    image: project1,
    link: "https://mrcarlift.netlify.app/",
  },
  {
    name: "Ahdus Trachten",
    year: "Jan2025",
    align: "left",
    image: project2,
    link: "https://ahdustrachten.netlify.app/",
  },
  {
    name: "xPal",
    year: "July2023",
    align: "right",
    image: project3,
    link: "https://www.xpal.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
