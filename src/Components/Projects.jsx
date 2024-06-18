import { FaLocationDot } from "react-icons/fa6";
import { useState,useEffect } from "react";
import {getData} from "../APICALLS"

const Projects = ({proId}) => {
  const [projects,setProjects]=useState(null)
  const [loading,setLaoding]=useState(false)


  useEffect(()=>{
  getData("pro/project/"+proId).then((data)=>{
    if(data.found){
      setProjects(data.projects)
    }
  })
  },[])

  if (loading)
    return (
      <div className="flex h-60 justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (<>
  {projects && projects.length!==0 ?
    projects.map((project)=>(
      <ProjectCard project={project} key={project._id}/>
    ))
    :<div className="pl-[2.5%]">
      no projects posted by this pro
      </div>}
    
    </>
  )
}

function ProjectCard({project}){
    return(
        <div className="h-[240px] xs:h-[220px] md:h-[360px] w-[40%] md:w-[45%] rounded-lg shadow-lg">
        <img className="h-40  md:h-80 rounded-md object-cover"
        src={project.img}
        alt='Project Wallpaper'
         />
         <div className="flex flex-col justify-center px-4">
         <p className="font-lightbold pt-2">{project.name} </p>
         <div className="flex p-2 gap-2">
          <FaLocationDot className="h-5 w-5 "/>
         <p className="text-dark-grey ">{project.location}</p>
         </div>
         </div>
      </div>
    )

}

export default Projects
