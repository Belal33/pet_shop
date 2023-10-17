import Container from "react-bootstrap/esm/Container";
import dryImg from "../../image/about_img.png";
import { MyButton } from "../mybutton/MyButton";
export default function AboutSec() {
    return (
        <section className="about py-5" id="about">
            <Container>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="img">
                            <img
                                src={dryImg}
                                alt="About section"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-start my-3">
                        <p className="fs-1">
                            Premium <span> Pet Food </span>Manufacturer
                        </p>
                        <p className="text-black-50">
                            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                            Elit. Voluptatum Sint, Dolore Perspiciatis Iure
                            Consequuntur Eligendi Quaerat Vitae Shaikh Anas.
                        </p>
                        <MyButton name="READ MORE" dark={true} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
