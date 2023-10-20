import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ContactPage } from "../pages/ContactPage";
import SinupPage from "../pages/SignupPage";
import Auth from "../components/Auth";
import NoAuth from "../components/Auth/noauth";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";

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
        element: <NoAuth children={LoginPage} />,
    },
    {
        path: "/profile",
        element: <Auth children={ProfilePage} />,
    },
    {
        path: "/payment",
        element: <Auth children={PaymentPage} />,
    },
]);
