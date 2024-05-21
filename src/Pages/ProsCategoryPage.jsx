import ProsCard from "../Components/ProsCard";
import ProsFilter from "../Components/ProsFilter";
import Offcanvas from "../Components/Offcanvas";
import { useParams,Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getData } from "../APICALLS";

const ProsCategoryPage = () => {
  const { category } = useParams();

  const getProProfiles = async () => {
    const data = await getData("pro/get-profiles/" + category);
    if (data.found === false) return null;
    return data.userProfiles;
  };

  const {
    data: proProfiles,
    isLoading,
    isError,
  } = useQuery("profiles", getProProfiles);
  return (
    <div className="px-0 md:px-10 py-4 ">
      <h1 className="text-2xl md:text-3xl py-4 font-lightbold px-4 md:px-0">
        Tile & Stone Contractors in 30120
      </h1>
      <div className=" flex bg-[#143C2D] w-full">
        <div className="mx-auto text-white py-14 gap-4 px-5 md:px-0">
          <p className="text-xl md:text-3xl font-semibold">
            Get Matched with Local Professionals
          </p>
          <p className="text-sm md:text-md">
            Answer a few questions and we will put you in touch with pros who
            can help.
          </p>

          <div className="flex items-center w-full ">
            <input
              className="rounded-sm p-4 mt-6 font-lightbold bg-white border-none
      outline-0 text-black"
              type="text"
              placeholder="Enter Zip Code"
            />
            <button className="bg-[#00A287] rounded-sm p-4 -mb-6 inline-block w-30">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 mb-48 gap-4 ">
        <div className="w-1/4  mx-auto lg:mx-0  hidden lg:block ">
          <p className="text-xl font-lightbold border-b-2 border-[#b7b7b7] max-w-60 px-4">
            Filter Search Results
          </p>
          <ProsFilter />
        </div>
        <div className="max-w-sm  block lg:hidden  ">
          <Offcanvas />
        </div>
        {isLoading ? (
          <div className="flex justify-center w-full mt-12">
            <p className="text-3xl">Loading...</p>
          </div>
        ) : isError ? (
          <div>
            <div className="flex justify-center w-full mt-12">
              <p className="text-3xl">{isError}</p>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-3/4   ">
            {proProfiles ? (
              proProfiles.map((profile) => (
                <Link
                  to={"/pros/" + category + "/" + profile.userId}
                  key={profile._id}
                >
                  <ProsCard profile={profile} />
                </Link>
              ))
            ) : (
              <div className="pl-5 pt-10">
                <p className="text-2xl font-lightbold ">
                  We couldn't find any results
                </p>
                <p className="text-2xl font-lightbold py-3">
                  Tips for better results:
                </p>
                <li className="text-base">
                  Try removing a filter to see more results
                </li>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProsCategoryPage;
