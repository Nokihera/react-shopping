import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import products from "../Products";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "my-cart",
                element: <MyCart/>,
            },
            {
                path: `product-detail/:id`,
                element: <ProductDetail/>,
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
]);
export default router