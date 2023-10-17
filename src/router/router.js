import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ServicesPage } from "../pages/ServicesPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ContactPage } from "../pages/ContactPage";
import SinupPage from "../pages/SignupPage";
import LoginForm from "../components/loginform";

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
        element: <SinupPage />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
]);
