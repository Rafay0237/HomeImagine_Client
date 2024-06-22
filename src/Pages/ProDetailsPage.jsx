import Slider from "../Components/Slider";
import SendProposal from "../Components/SendProposal";
import Projects from "../Components/Projects";
import BuisnessDetails from "../Components/BuisnessDetails";
import ReviewStars from "../Components/ReviewStars";
import Review from "../Components/Review";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../APICALLS";


const ProDetailsPage = () => {
  const AboutUsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const BuisnessDetailsRef = useRef(null);
  const ReviewRef = useRef(null);
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
      setLoading(true)
      getData("pro/get-profile/" + userId).then((data)=>{
        if(data.found){
          setProfile(data.userProfile);
        }
      })
      setLoading(false)
  }, []);

  if (loading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row p-4 gap-5 mt-2 ">
      <div className=" w-full md:w-[70%] ">
        <Slider images={profile?.sliderImages} />

        <div className="flex items-center p-3 xs:p-8 ">
          <img
            className="h-24 w-24 xs:h-32 xs:w-32 object-contain"
            src={profile?.logo}
            alt="Logo"
          />
          <div className="mt-3 p-5">
            <p className="text-2xl xs:text-3xl font-lightbold ">
              {profile?.firmName}
            </p>
            <ReviewStars stars={profile?.reviews.rating} reviewCount={profile?.reviews.reviewCount} />
          </div>
        </div>

        <div className="flex gap-5 xs:gap-10 px-4 xs:px-10  ">
          <p
            onClick={() => scrollToSection(AboutUsRef)}
            className="text-dark-grey font-lightbold border-b-2 border-white 
     hover:border-b-2 hover:border-black"
          >
            About Us
          </p>
          <p
            className="text-dark-grey font-lightbold hover:border-b-2 border-black"
            onClick={() => scrollToSection(ProjectsRef)}
          >
            Projects
          </p>
          <p
            className="text-dark-grey font-lightbold hover:border-b-2 border-black"
            onClick={() => scrollToSection(BuisnessDetailsRef)}
          >
            Buisness
          </p>
          <p
            className="text-dark-grey font-lightbold hover:border-b-2 border-black"
            onClick={() => scrollToSection(ReviewRef)}
          >
            Reviews
          </p>
        </div>
        
        <div ref={AboutUsRef}>
          <AboutUs profile={profile} />
        </div>

        <div className="p-6  " ref={ProjectsRef}>
          <p className="text-2xl font-lightbold ">Projects </p>
        </div>
        <div className="flex flex-wrap pb-10 gap-4 border-b border-light-grey">
          <Projects proId={userId}/>
        </div>

        <div ref={BuisnessDetailsRef}>
          <BuisnessDetails profile={profile} />
        </div>

        <div ref={ReviewRef}>
          {profile && 
          (<Review firmName={profile?.firmName} proId={profile?.userId}
            reviewCount={profile?.reviews.reviewCount}/>
          )}
        </div>
      </div>

      <div className="py-4 ">
        <SendProposal userId={userId} firmName={profile?.firmName}/>
      </div>
    </div>
  );
};

function AboutUs({profile}) {
  return (
    <div className="p-3 xs:p-8 border-b border-light-grey ">
      <p className="font-lightbold py-4 text-xl">
        {profile?.descTitle}
      </p>
      <p>
       {profile?.desc}
      </p>
      <p className="text-2xl font-lightbold py-4">Services </p>
      <p>
       {profile?.services}
      </p>
    </div>
  );
}

export default ProDetailsPage;
