import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyButton } from "../mybutton/MyButton";

export function ServiceBox({ name, icon }) {
    return (
        <div className="col-md-6 text-center p-3 col-lg-4">
            <div className="box p-4">
                <FontAwesomeIcon
                    icon={icon}
                    size="2xl"
                    className="text-light p-3 rounded-circle icon"
                    style={{
                        backgroundColor: "var(--main-color)",
                    }}
                />
                <p className="fs-2 my-4">{name}</p>
                <MyButton dark={true} name={"Read More"} />
            </div>
        </div>
    );
}
