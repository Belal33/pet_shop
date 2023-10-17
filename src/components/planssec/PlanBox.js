import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyButton } from "../mybutton/MyButton";

export function PlanBox({
    time,
    price,
    icon,
    room,
    grooming,
    meals,
    exercise,
}) {
    return (
        <div className="col-md-6 pt-3 px-3 pb-5 col-lg-4">
            <div className="box text-start p-3 position-relative">
                <span className="text-center d-block fs-4">Pet Care</span>
                <p className="text-center fs-1">{time}</p>
                <FontAwesomeIcon
                    className="icon display-4 mt-1 mb-3"
                    size="2xl"
                    style={{ color: "var(--main-color)" }}
                    icon={icon}
                />
                <div className="d-flex justify-content-between">
                    <p>pet room</p>
                    {room ? (
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} />
                    )}
                </div>
                <div className="d-flex justify-content-between">
                    <p>Pet Grooming</p>
                    {grooming ? (
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} />
                    )}
                </div>
                <div className="d-flex justify-content-between">
                    <p>Pet Exercise</p>
                    {exercise ? (
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} />
                    )}
                </div>
                <div className="d-flex justify-content-between">
                    <p>Pet Meals</p>
                    {meals ? (
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} />
                    )}
                </div>
                <p className="fs-1">${price}</p>
                <div
                    className="position-absolute "
                    style={{ right: "20px", bottom: "-30px" }}
                >
                    <MyButton dark={true} name="Choose" />
                </div>
            </div>
        </div>
    );
}
