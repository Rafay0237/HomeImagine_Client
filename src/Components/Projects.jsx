import { FaLocationDot } from "react-icons/fa6";

const Projects = () => {
  return (<>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    </>
  )
}

function ProjectCard(){
    return(
        <div className="h-[200px] md:h-[360px] w-[45%] rounded-lg shadow-lg">
        <img className="h-40 md:h-80 rounded-md object-cover"
        src="https://st.hzcdn.com/fimgs/pictures/exteriors/a-rustic-farmhouse-guest-house-the-baldwin-architectural-group-img~c0e16596050ebe97_8238-1-2dc066c-w585-h390-b0-p0.jpg"
        alt='Project Wallpaper'
         />
         <div className="px-4">
         <p className="font-lightbold pt-2">A Farm House Barn Style </p>
         <div className="flex p-2 gap-2">
          <FaLocationDot className="h-5 w-5 "/>
         <p className="text-dark-grey ">Marrieta, GA</p>
         </div>
         </div>
      </div>
    )

}

export default Projects
