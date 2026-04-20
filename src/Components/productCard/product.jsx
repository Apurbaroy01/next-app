import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <Image
        src={"/window.svg"}
        alt={product.name}
        width={100}
        height={100}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">
          {product.category} • {product.brand}
        </p>

        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-blue-600">
            ৳ {product.price}
          </span>
          <span className="text-yellow-500 text-sm">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Stock */}
        <p className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Button */}
        <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;