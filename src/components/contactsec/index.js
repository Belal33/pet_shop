import { ContactForm } from "./ContactForm";

export default function ContactSec() {
    return (
        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
