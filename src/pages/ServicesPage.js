import Footer from "../components/footer";
import ServicesSec from "../components/servicessec";
import { NavBar } from "../components/navbar";

export function ServicesPage() {
    return (
        <>
            <NavBar />
            <main>
                <ServicesSec />
            </main>
            <Footer />
        </>
    );
}
