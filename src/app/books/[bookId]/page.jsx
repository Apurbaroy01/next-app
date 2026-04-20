export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books')
    const books = await res.json();


    return books.map((book) => ({
        bookId: book.id,
    }))
}

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();
    return (
        <div>
            <h2>this id book id: {bookId}</h2>
            {
                book && (
                    <div>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Published: {book.publishedYear}</p>
                        <p>Rating: {book.rating}</p>
                        <p>Price: ${book.price}</p>
                    </div>
                )
            }
        </div>
    );
};

export default BookDetailsPage;