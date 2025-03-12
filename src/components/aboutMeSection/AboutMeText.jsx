import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        <span>🚀 Syed Musa Raza Zaidi</span>
        <br />
        Full Stack Web Developer | Reliable, Results-Driven, and Ready to
        Elevate Your Project 🔥 Looking to hire a developer who combines
        technical expertise with relentless dedication? With 3+ years of proven
        experience in .NET Core, ReactJS, and NodeJS, I deliver full-stack
        solutions that are not just functional but future-proof. I’m here to
        turn your vision into reality—on time, within scope, and with precision.
        <br />
        <strong>
        Success isn’t just about code—it’s about commitment. I’m here to make your project my mission.
        </strong>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
