import Footer from "../components/footer";
import ProductsSec from "../components/productssec";
import { NavBar } from "../components/navbar";
import Auth from "../components/Auth";

export function ProductsPage() {
    return (
        <>
            <NavBar />
            <main>
                <Auth children={ProductsSec} />
            </main>

            <Footer />
        </>
    );
}
