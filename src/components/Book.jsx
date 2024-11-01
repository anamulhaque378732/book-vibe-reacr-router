import { Link,  } from "react-router-dom";
import PropTypes from "prop-types";


import { FcRating } from "react-icons/fc";

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;



    return (
        <div>
            <Link to={`/book/${bookId}`} className="flex flex-col">
                <div className="card bg-base-100 border border-1 rounded-lg border-gray-500 flex-grow shadow-xl">
                    <figure className="px-5 pt-5">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl bg-base-300  h-48 w-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className=" flex  gap-4 ">
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[0]}</p>
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[1]}</p>
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[2]}</p>
                        </div>
                        <div className=" border-b-2 py-2 border-dashed">
                            <h2 className="text-2xl font-bold py-2 "> {bookName}</h2>
                            <p className=" font-normal "> <span className="text-xl font-medium">By :</span> {author}</p>
                        </div>
                        <div className=" flex">
                            <p className="md:mr-28 font-medium">{category}</p>
                            <p className="flex gap-2"> {rating}  <FcRating className="text-xl" /></p>
                        </div>
                    </div>
                    {/* tabs */}
                  
                </div>
            </Link>

         
        </div>

    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired,
}



export default Book;