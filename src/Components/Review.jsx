import {useState,useEffect} from "react";
import { getData } from "../APICALLS";
import ReviewStars from "./ReviewStars";

const Review = ({firmName,proId,reviewCount}) => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData("contract/reviews/" + proId).then((data) => {
      if(data.success) {
        setReviews(data.reviews);
      }
    });
    setLoading(false);
  }, []);


  if (loading)
    return (
      <div className="flex h-[80vh] justify-center items-center text-2xl font-lightbold">
        Loading...
      </div>
    );

  return (
    <div className="py-5  ">
      <p className="text-2xl font-lightbold py-4 pb-10">
        {reviews&& reviewCount===0 ? "No" :reviewCount} Reviews for {firmName}
      </p>
     {reviews && reviews.length!==0? reviews.map((review)=>(
       <ReviewCard key={review._id} review={review} />
     )):
     <div>
      No review comments yet
      </div>
    }
    </div>
  );
};

function ReviewCard ({review}){

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="border-b border-light-grey py-4">
      <div className="flex gap-4">
        <img
          className="h-11 w-11 object-cover rounded-full"
          src={review.userDp}
          alt="Profile"
        />
        <div>
          <p className="font-lightbold pl-1">{review.userName}</p>
          <ReviewStars stars={review.rating} reviewCount={1} hideCount={true} />
        </div>
      </div>
      <p className="py-4">
        {review.message}
      </p>
      <p className="pb-4 text-sm">
        {formatDate(review.createdAt)}
      </p>
    </div>
  );
};

export default Review;
