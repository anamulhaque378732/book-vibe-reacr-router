import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div className='lg:mx-20 md:mx-10 sm:mx-5 min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='w-full'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;