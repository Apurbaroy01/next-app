import BookCard from "@/Components/BookCard/BookCard";


const booksPage = async () => {

    const res = await fetch('http://localhost:5000/books')
    const books = await res.json();
    console.log(books);

    return (
        <div>
            <h2>books {books.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default booksPage;