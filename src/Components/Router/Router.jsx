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
import AddServices from "../AddServices/AddServices";
import MyRevews from "../MyRevews/MyRevews";
import Profile from "../Profile/Profile";
import EditMyRevews from "../MyRevews/EditMyRevews/EditMyRevews";
import PrivetRoute from "./PrivetRoute";

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
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
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
        path: "/addservices",
        element: (
          <PrivetRoute>
            <AddServices></AddServices>
          </PrivetRoute>
        ),
      },
      {
        path: "/myrevews",
        element: (
          <PrivetRoute>
            <MyRevews></MyRevews>
          </PrivetRoute>
        ),
      },
      {
        path: "editerevews/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/reviews/${params.id}`);
        },
        element: (
          <PrivetRoute>
            <EditMyRevews></EditMyRevews>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default route;
