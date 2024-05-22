import ReviewStars from "./ReviewStars"

const ProductCard = ({product}) => {
  return (
    <div className="flex justify-center  hover:shadow-xl hover:cursor-pointer w-48 sm:w-56 p-4 rounded-sm ">
        <div className="max-w-40 sm:max-w-48  " key={product.title}>
          <img
            className="h-40 w-32 sm:h-48 sm:w-40 object-contain"
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
  )
}

export default ProductCard
