
import { useLoaderData, } from "react-router-dom";
import { getStoreReadBooks } from "../Utils/LocalStorage";
import { useEffect, useState } from "react";
import ReadBooks from "./ReadBooks";

 


const ListedBook = () => {
    const booked = useLoaderData();
    const [bookRead, setBookRead] = useState([]);
    const [displayBook, setDisplayBook] = useState([])

    const handleRatting = booking => {

        const rating1 = booking.sort((a, b) => {
            if (a.rating < b.rating) {
                return -1
            }
        });
        setDisplayBook(rating1)

    };

    useEffect(() => {
        const storeBookIds = getStoreReadBooks()
        if (booked.length > 0) {
            const readBooks = [];
            for (let Id of storeBookIds) {
                const book = booked.find(book => book.bookId === Id);
                if (book) {
                    readBooks.push(book)
                }
            }
            setDisplayBook(readBooks)
            setBookRead(readBooks);
        }

    }, [booked])




    return (
        <div>

            <div className="bg-base-200 mt-5 mb-4 rounded-lg">
                <h2 className="p-2 text-3xl text-center font-bold"> Books : {bookRead.length}</h2>
            </div>
            <div>
                <details className="dropdown ">
                    <summary className="btn m-1 text-2xl font-medium">Sort by</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleRatting(bookRead)}><a>Rating</a></li>
                        <li><a>Number of page </a></li>
                        <li ><a>Publish Year </a></li>
                    </ul>
                </details>
            </div>

            <div className="my-10 ">
                {
                    displayBook.map(read => <ReadBooks key={read.bookId} read={read}></ReadBooks>)
                }

            </div>

        </div>
    );
};

export default ListedBook;