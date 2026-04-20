import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            {/* Image */}
            <Image
                src={book.image || "/public/globe.svg"}
                width={200}
                height={300}
                alt={book.title}
                className="w-36 h-36 object-cover border-2 items-center justify-center mx-auto mt-4"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                    {book.title}
                </h2>

                <p className="text-sm text-gray-600">
                    by <span className="font-medium">{book.author}</span>
                </p>

                <p className="text-sm text-gray-500">
                    Genre: {book.genre}
                </p>

                <p className="text-sm text-gray-500">
                    Published: {book.publishedYear}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-yellow-500 font-semibold">
                        ⭐ {book.rating}
                    </span>

                    <span
                        className={`text-xs px-2 py-1 rounded-full ${book.inStock
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                            }`}
                    >
                        {book.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600">
                        ${book.price}
                    </span>

                    <Link href={`/books/${book.id}`} key={book.id}>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;