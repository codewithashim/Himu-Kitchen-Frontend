import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home";
import Services from "../Searvices/Searvices";
import Blogs from "../Blogs/Blogs";
import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";
import Recipes from "../Recipes/Recipes";
import ServicesDetails from "../Searvices/ServicesDetails/ServicesDetails";
import Order from "../Order/Order";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/order/:id",
        element: <Order></Order>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
