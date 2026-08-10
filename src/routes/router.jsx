import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import { homeLoader } from "../pages/Home/homeLoader";
import Products from "../pages/Products/Products";
import { productsLoader } from "../pages/Products/productsLoader";
import Contact from "../pages/Contact/Contact";
import { contactLoader } from "../pages/Contact/contactLoader";
import Checkout from "../pages/Checkout/Checkout";
import { checkoutAction } from "../pages/Checkout/checkoutActions";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetail/ProductDetails";
import { productDetailsLoader } from "../pages/ProductDetail/productDetailsLoader";
import OrderConfirmation from "../pages/OrderConfirmation/OrderConfirmation";
import { orderConfirmationLoader } from "../pages/OrderConfirmation";
import Login from "../pages/Auth/Login";
import { authLoader } from "../pages/Auth/loginLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <NotFound />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        action: checkoutAction,
      },
      {
        path: "order-confirmation/:id",
        element: <OrderConfirmation />,
        loader: orderConfirmationLoader,
      },
      { path: "contact", element: <Contact />, loader: contactLoader },

      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login />, loader: authLoader },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

export default router;
