import { useEffect, useState } from "react";
import Book from "../components/Book";
 

const Books = () => {
 
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div to='/books'>
            <div>
                <h2 className="text-4xl my-5 font-extrabold text-center text-black">Books</h2>
         
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 ">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;