import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";


const ReadBooks = ({ read }) => {
 

    const { bookId, bookName, author, image, tags, publisher, rating, category, totalPages, yearOfPublishing } = read;
 
    
    return (
        <div className="p-4 my-5 rounded-lg  border-2 border-indigo-500/75 ...">
            <div className="grid   grid-cols-3">
                <div className="md:mr-24">
                    <img src={image} alt="" className="w-48" />
                </div>
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold text-black pb-3">{bookName}</h2>
                    <p className="text-2xl font-medium">By : <span className="text-xl">{author}</span></p>

                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <h2 className="text-xl font-medium">Tags :</h2>
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[0]}</p>
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[1]}</p>
                            <p className="bg-base-200 px-2 py-1 rounded-sm text-green-400 font-medium"> {tags[2]}</p>
                        </div>
                        <div className=" flex gap-2 ml-8">
                            <p className="text-xl"> <CiLocationOn></CiLocationOn></p>
                            <p> Year of Publish : <span className="font-medium ml-5">{yearOfPublishing}</span></p>
                        </div>
                    </div>
                    <div className="flex gap-8 my-2 border-b-2 ">
                        <p className="flex gap-2"> <IoPeople className="text-xl mt-1"></IoPeople> Publisher : <span className="font-medium"> {publisher}</span></p>
                        <p className="pb-2 flex gap-2"> Page : <FaBookOpen className="text-xl mt-1"></FaBookOpen> <span className="font-medium">{totalPages}</span></p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-xl p-2 px-2 bg-lime-100 rounded-md"> Category : <span className="font-medium text-black">{category}</span></p>
                        <p className="text-xl p-2 bg-green-100 rounded-md">Rating : <span className="font-medium text-red-400">{rating}</span></p>

                        <Link to={`/book/${bookId}`} className="btn  text-xl font-medium    border-1 mr-1    bg-green-300 rounded-lg">View Details</Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

ReadBooks.propTypes = {
    read: PropTypes.object.isRequired
}
export default ReadBooks;