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

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFood",
        element: <AllFood></AllFood>,
        loader: ()=> fetch("http://localhost:5000/myAddedFood"),
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
        element: <AddFood></AddFood>,
      },
      {
        path: "/myAddedFood",
        element: <MyAddedFood></MyAddedFood>,
      },
      {
        path: "/orderedFood",
        element: <OrderedFood></OrderedFood>,
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/myAddedFood/${params.id}`),
      },
      {
        path: "/purchaseFood/:id",
        element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/myAddedFood/${params.id}`),
      },
    ],
  },
]);

export default Route;
