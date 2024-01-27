import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {Footer} from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestrauntMenu from "./Components/RestrauntMenu";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children :
      [
        {
          path:'/',
          element:<Body/>
        },
        {
          path:'/about',
          element:<About/> 
        },
        {
          path:'/contact',
          element:<Contact/> 
        },{
          path:'/restaurant/:id',
          element:<RestrauntMenu/>,
        }
      ]  
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);