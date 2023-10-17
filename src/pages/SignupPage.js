import SinupForm from "../components/SignupFrom/SignupForm";

export default function SinupPage() {
    return (
        <section
            className="d-flex align-items-center  py-5"
            id="contact"
            style={{
                height: "100vh",
                // backgroundImage: `url(${footerBg})`,
                // backgroundSize: `cover`,
            }}
        >
            <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start  align-items-center">
                    <div
                        style={{
                            display: "none",
                        }}
                        className="col-md-6 d-md-block  my-4 p-0"
                    >
                        <div className="img">
                            <img
                                src="image/contact_img.png"
                                alt="woman "
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <SinupForm />
                </div>
            </div>
        </section>
    );
}
