import {
    faBicycle,
    faCarSide,
    faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";
import { PlanBox } from "./PlanBox";

export default function PlansSec() {
    return (
        <section className="choose py-5">
            <div className="container">
                <h2 className="fs-1 text-center mb-4">
                    Choose A <span>Plan</span>
                </h2>
                <div className="row">
                    <PlanBox
                        time={"Day"}
                        price={5}
                        meals={true}
                        icon={faBicycle}
                    />
                    <PlanBox
                        time={"Week"}
                        price={30}
                        meals={true}
                        exercise={true}
                        icon={faMotorcycle}
                    />
                    <PlanBox
                        time={"Month"}
                        price={100}
                        icon={faCarSide}
                        meals={true}
                        room={true}
                        grooming={true}
                        exercise={true}
                    />
                </div>
            </div>
        </section>
    );
}
