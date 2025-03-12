import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer",
    company: "Terminal CTRL",
    date: "FEB/2022 - MAY/2023",
    responsibilities: [
      "Full-stack development of responsive websites and management systems using React.js and Node.js, ensuring seamless integration.",
      "Collaborated with teams to build scalable web apps with modern frameworks.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Enabling Systems",
    date: "MAY/2023 - JAN/2024",
    responsibilities: [
      "Full-stack development of XPAL(messaging app) and management systems using React.js and .NET Core, ensuring end-to-end integration.",
      "Built scalable solutions with modern frameworks, focusing on real-time features.",
    ],
  },
  {
    job: "Website Developer",
    company: "MSPL",
    date: "JAN/2024 - JUL/2024",
    responsibilities: [  
      "Focuses on .NET Core expertise and management systems.",  
      "Highlights collaboration and Agile practices for teamwork context.",
      "using .NET Core for robust backend architecture"  
    ] 
  },
  {
    job: "Jr.Software Engineer",
    company: "ID-WARE",
    date: "JUL/2024 - Present",
    responsibilities: [
      "Full-stack development of a Government-Grade Card-Based PIAM System",
      "Integrated card-reader hardware and access control systems with RESTful APIs and Microservices",
      "Designed workflows for government stakeholders.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
