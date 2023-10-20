import Footer from "../components/footer";
import ProductsSec from "../components/productssec";
import { NavBar } from "../components/navbar";

export function ProductsPage() {
    return (
        <>
            <NavBar />
            <main style={{ minHeight: "100vh" }}>
                <ProductsSec />
            </main>

            <Footer />
        </>
    );
}
