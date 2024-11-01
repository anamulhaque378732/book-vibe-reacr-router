import { useLoaderData, useParams, } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveReadBooks } from "../Utils/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookDetails = () => {

    // const jobs = useLoaderData();
    // const { id } = useParams();
    // const idInt = parseInt(id);

    // const job = jobs.find(job => job.id === idInt);

    const details = useLoaderData();

    const { bookId } = useParams();
    const book = details.find(book => book.bookId == bookId)

    const { image, tags, bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing } = book;
    // const [tabIndex, setTabIndex] = useState(0);
    const handleReadBook = () => {

        saveReadBooks(bookId);

        toast('Read the book successfully')

    }


    return (



        <div className=" grid grid-cols-2 mt-10 gap-8  ">

            <div className="p-4 m-2 rounded-lg   bg-base-200  ">
                <div className="py-auto">
                    <img src={image} alt="" className=" rounded-lg " />

                </div>
            </div>

            <div className=" px-2 m-2 rounded-lg ">
                <div className="border-b-2">
                    <h2 className="text-2xl font-bold py-2 "> {bookName}</h2>
                    <p className=" font-normal mb-2 "> <span className="text-xl font-medium">By :</span> {author}</p>
                </div>
                <div className="border-b-2 mt-2">
                    <p className="mb-4 text-xl font-medium"> {category}</p>
                </div>
                <div className="py-2">
                    <h2 className="text-black"> <span className="text-xl font-medium">  Review : </span> {review}</h2>
                    <div className="flex gap-4 my-4 border-b-2 ">
                        <h1 className="text-2xl font-semibold">Tags :</h1>
                        <div className="flex gap-4">

                            <p className="bg-base-200 px-2 py-1 mb-2 rounded-md text-green-400 font-medium"> {tags[0]}</p>
                            <p className="bg-base-200 px-2 py-1 mb-2 rounded-md text-green-400 font-medium"> {tags[1]}</p>
                            <p className="bg-base-200 px-2 py-1 mb-2 rounded-md text-green-400 font-medium"> {tags[2]}</p>
                        </div>
                    </div>
                    <div>
                        <p> Number of pages :  <span className="pl-10  font-medium"> {totalPages}</span></p>
                        <p> Publisher :  <span className="pl-10  font-medium"> {publisher}</span></p>
                        <p> Year Of Publish :  <span className="pl-10  font-medium"> {yearOfPublishing}</span></p>
                        <p> Rating :  <span className="pl-10  font-medium"> {rating}</span></p>

                    </div>

                </div>
                <div className="flex gap-5">
                    <Link to='' onClick={handleReadBook}><button className="btn hover:bg-secondary text-xl border-primary">read</button></Link>
                    <Link><button className="btn text-xl border-secondary hover:bg-primary">WishList</button></Link>


                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;