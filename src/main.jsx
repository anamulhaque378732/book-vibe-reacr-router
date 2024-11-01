import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Root from './components/Root';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ListedBook from './pages/ListedBook';
import PageOfRead from './pages/PageOfRead';
import BookDetails from './pages/BookDetails';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/pageOfRead',
        element: <PageOfRead></PageOfRead>,

      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>,
        loader: () => fetch('books.json')
      },

      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json'),

      },






    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
 
  </StrictMode>,
)
