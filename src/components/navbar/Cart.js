import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { MyButton } from "../mybutton/MyButton";

export function Cart() {
    return (
        <Dropdown className="ms-auto  cart order-1 order-lg-4  position-relative">
            <Dropdown.Toggle
                className="text-black border-0 "
                id="dropdown-basic"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <FontAwesomeIcon icon={faCartShopping} size="2xl" />
            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{
                    right: "10px",
                    top: "45px",
                    left: "auto",
                }}
                className="shadow-sm"
            >
                <p className="display-6 p-2 text-center m-0">No items Found</p>
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
                <div className="text-center">
                    <MyButton name={"Buy Now"} dark={true} />
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
