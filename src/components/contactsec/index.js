import { ContactForm } from "./ContactForm";

export default function ContactSec() {
    return (
        <section className="contact py-5" id="contact">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 my-4 p-0">
                        <div className="img">
                            <img
                                src="image/contact_img.png"
                                alt="woman "
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
