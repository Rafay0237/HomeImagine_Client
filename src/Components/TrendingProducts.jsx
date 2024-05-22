import ReviewStars from "../Components/ReviewStars";

const TrendingProducts = () => {
  return (
    <div className="gap-5  overflow-x-auto  scrollbar-hide md:scrollbar-show pb-10">
    <div className="flex  h-16 gap-5 py-10">
      <p className="font-lightbold text-2xl ">Trending Products</p>
      <p className="text-sm font-lightbold text-green bg-[#EDFAF6] h-10 p-2 px-4">
        BEST SELLER
      </p>
    </div>

    <div className="flex  gap-5 pt-8  px-4">
      {trendingProducts.map((product) => (
        <div key={product.title}
        className="flex justify-center hover:shadow-dark-xl max-w-48 p-4 rounded-sm">
        <div className=" max-w-36  " >
          <img
            className="h-40 w-36 object-contain"
            src={product.img}
            alt="product here"
          />
          <p>{product.title}</p>
          <div className="py-3">
            <ReviewStars
              stars={product.rating}
              reviewCount={product.reviewCount}
            />
          </div>
          <p className="font-semibold">{product.price}</p>
        </div>
      </div>        
      ))}
    </div>
  </div>
  )
}

let trendingProducts = [
    {
      title: "Fogless Dimmable LED Glass",
      img: "https://st.hzcdn.com/fimgs/c2416f7b01203787_4916-w240-h240-b1-p0--.jpg",
      rating: "4.7",
      price: "₹2249.00",
      reviewCount: 100,
    },
    {
      title: "Vanity Driftwood Single Sink",
      img: "https://st.hzcdn.com/fimgs/4b81420b03f91a0a_3904-w240-h240-b1-p0--.jpg",
      rating: "4.5",
      price: "₹11199.99",
      reviewCount: 90,
    },
    {
      title: "Mid-Century Modern Sofa",
      img: "https://st.hzcdn.com/fimgs/1231b1c205c0b1a3_9335-w240-h240-b1-p0--.jpg",
      rating: "4.5",
      price: "₹11799.00",
      reviewCount: 85,
    },
    {
      title: "Vardek Chill Dining Table",
      img: "https://st.hzcdn.com/fimgs/c4912ee406226409_0390-w240-h240-b1-p0--.jpg",
      rating: "4.8",
      price: "₹7549.99",
      reviewCount: 95,
    },
    {
      title: "Contemporary Pendant Light",
      img: "https://st.hzcdn.com/fimgs/ad319d01027b601a_2228-w240-h240-b1-p0--.jpg",
      rating: "4.6",
      price: "₹3149.99",
      reviewCount: 75,
    },
    {
      title: "Modern Sectional Sofa",
      img: "https://st.hzcdn.com/fimgs/e9a1127d0e6ff56a_0688-w240-h240-b1-p0--.jpg",
      rating: "4.9",
      price: "₹21299.00",
      reviewCount: 110,
    },
    {
      title: "Industrial Bar Stool",
      img: "https://st.hzcdn.com/fimgs/bb91bdff044a3e66_0417-w240-h240-b1-p0--.jpg",
      rating: "4.4",
      price: "₹4289.99",
      reviewCount: 60,
    },
    {
      title: "Teakwood Shower Bench",
      img: "https://st.hzcdn.com/fimgs/f0b1304e00ef7a22_0316-w240-h240-b1-p0--.jpg",
      rating: "4.7",
      price: "₹3299.99",
      reviewCount: 120,
    },
  ];

export default TrendingProducts
