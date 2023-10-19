import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ContactPage } from "../pages/ContactPage";
import SinupPage from "../pages/SignupPage";
import LoginForm from "../components/loginform";
import Auth from "../components/Auth";
import NoAuth from "../components/Auth/noauth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },

    {
        path: "/services",
        element: <ServicesPage />,
    },

    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
    {
        path: "/signup",
        element: <NoAuth children={SinupPage} />,
    },
    {
        path: "/login",
        element: <NoAuth children={LoginForm} />,
    },
]);
