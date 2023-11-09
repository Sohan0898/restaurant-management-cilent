import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import OrderedFood from "../Pages/MyOrderedFood/OrderedFood";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import OurMenu from "../Pages/Menu/OurMenu";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/myAddedFood"),
      },
      {
        path: "/allFood",
        element: <AllFood></AllFood>,
        // loader: () => fetch("http://localhost:5000/myAddedFood"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myAddedFood",
        element: (
          <PrivateRoute>
            <MyAddedFood></MyAddedFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/orderedFood",
        element: (
          <PrivateRoute>
            <OrderedFood></OrderedFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myAddedFood/${params.id}`),
      },
      {
        path: "/purchaseFood/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myAddedFood/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myAddedFood/${params.id}`),
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
    ],
  },
]);

export default Route;
