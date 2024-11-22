import { FaGithub } from "react-icons/fa";
const ProjectCards = ({
  
}) => {
  return (
    <div className="card card-bordered w-full lg:h-96 bg-base-100 lg:flex-row shadow-xl my-5 mx-5 hover:scale-95 transition-all duration-300 ease-in">
      <figure className="px-2">
        <img
          src={image}
          alt="YumRun"
          className="rounded-xl object-cover hover:scale-110 transition-all duration-300 ease-in"
        />
      </figure>
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title text-primary text-3xl mt-5">{name}</h2>
        <h3 className="md:w-4/5">{description}</h3>
        <h4 className="text-primary pb-4">{techStack.join(" , ")}</h4>
        <div className="card-actions">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-circle">
              <FaGithub />
            </button>
          </a>
         
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
