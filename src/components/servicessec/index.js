import {
    faBaseballBall,
    faBath,
    faCat,
    faDog,
    faDrumstickBite,
    faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { ServiceBox } from "./ServiceBox";
import "./servicessec.css";

export default function ServicesSec() {
    return (
        <section className="services py-5" id="services">
            <div className="container">
                <h2 className="fs-1 text-center mb-4">
                    Our <span> Services</span>
                </h2>
                <div className="row">
                    <ServiceBox name={"Dog Boarding"} icon={faDog} />
                    <ServiceBox name={"Cat Boarding"} icon={faCat} />
                    <ServiceBox name={"Pet Food"} icon={faDrumstickBite} />
                    <ServiceBox name={"Pet Exercise"} icon={faBaseballBall} />
                    <ServiceBox name={"Pets Grooming"} icon={faBath} />
                    <ServiceBox name={"Clinic"} icon={faHeartbeat} />
                    <ServiceBox name={"Pets Spa"} icon={faBath} />
                    <ServiceBox name={"Entertainment"} icon={faBaseballBall} />
                    <ServiceBox name={"Pet Care"} icon={faHeartbeat} />
                </div>
            </div>
        </section>
    );
}
