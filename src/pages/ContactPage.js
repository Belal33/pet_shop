import Footer from "../components/footer";
import { NavBar } from "../components/navbar";
import ContactSec from "../components/contactsec";

export function ContactPage() {
    return (
        <>
            <NavBar />
            <main>
                <ContactSec />
            </main>
            <Footer />
        </>
    );
}
