import Slider from "../Components/Slider";
import SendProposal from "../Components/SendProposal";
import Projects from "../Components/Projects";
import BuisnessDetails from "../Components/BuisnessDetails";
import ReviewStars from "../Components/ReviewStars";
import Review from "../Components/Review";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

let images = [
  "https://st.hzcdn.com/fimgs/c4b1ab2d050a08b2_6178-w794-h336-b2-p0--.jpg",
  "https://st.hzcdn.com/fimgs/19d1c1c30546f118_6824-w794-h336-b2-p0--.jpg",
  "https://st.hzcdn.com/fimgs/bdb1ac2f0546f10e_0771-w794-h336-b2-p0--.jpg",
  "https://st.hzcdn.com/fimgs/e891aa250546f10b_9398-w794-h336-b2-p0--.jpg",
];

const ProDetailsPage = () => {
  const AboutUsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const BuisnessDetailsRef = useRef(null);
  const ReviewRef = useRef(null);
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_APP_API_URL + "pro/get-profile/" + userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setProfile(data.userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-5 mt-2 ">
      <div className=" w-full md:w-[70%]  ">
        <Slider images={images} />

        <div className="flex p-8 ">
          <img
            className="h-32 w-32 object-contain"
            src={profile?.logo}
            alt="Logo"
          />
          <div className="mt-3 p-5">
            <p className="text-3xl font-lightbold ">
              {profile?.firmName}
            </p>
            <ReviewStars stars={profile?.reviews.rating} reviewCount={profile?.reviews.reviewCount} />
          </div>
        </div>

        <div className="flex gap-10 px-10 ">
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
          <Projects />
        </div>

        <div ref={BuisnessDetailsRef}>
          <BuisnessDetails profile={profile} />
        </div>

        <div ref={ReviewRef}>
          <Review />
        </div>
      </div>

      <div className="py-4 ">
        <SendProposal userId={userId}/>
      </div>
    </div>
  );
};

function AboutUs({profile}) {
  return (
    <div className="p-10 border-b border-light-grey ">
      <p className="font-lightbold py-4 text-xl">
        {profile?.descTitle}
        Commercial & Residential Architectural Firm Based in Atlanta, GA
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
