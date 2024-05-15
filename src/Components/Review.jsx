import React from "react";

const Review = () => {
  return (
    <div className="py-5  ">
      <p className="text-2xl font-lightbold py-4 pb-10">
        15 Reviews for The Baldwin Architectural Group
      </p>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

function ReviewCard (){
  return (
    <div className="border-b border-light-grey py-4">
      <div className="flex gap-4">
        <img
          className="h-11 w-11 object-cover rounded-full"
          src="https://st.hzcdn.com/fimgs/247380da0dcec0f1_1478-w40-h40-b0-p0--.jpg"
          alt="Profile"
        />
        <div>
          <p className="font-lightbold">Home and Made Custom Builders</p>
          <p>Rating: 5.0</p>
        </div>
      </div>
      <p className="py-4">
        As if his two time Best of Houzz awards wasnt enough to tell you the
        best Architect in the Atlanta metro, let me reassure you, he is! His
        attention to detail in the process of getting out of your head, your
        dream home, and putting it on paper is unprecedented. If you should find
        yourself choosing between the Baldwin group, and another Architect, Go
        with the Baldwin Group!
      </p>
    </div>
  );
};

export default Review;
