import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { MyButton } from "../mybutton/MyButton";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts";

export function Cart() {
    let { cartItems, updateCartItems } = useContext(CartContext);
    let deleteItemHandler = (e, itemId) => {
        console.log(e.target);
        updateCartItems(
            cartItems.filter((cartItem) => cartItem?.id !== itemId)
        );
    };
    useEffect(() => console.log(`||||||| ${cartItems}`));
    return (
        <Dropdown className="cart ">
            {cartItems ? "" : ""}
            <Dropdown.Toggle
                className="text-black border-0 p-2 "
                id="dropdown-basic"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{
                    right: "10px",
                    top: "45px",
                    left: "auto",
                }}
                className="shadow-sm"
            >
                {cartItems?.length ? (
                    cartItems.map((cartItem) => (
                        <Dropdown.Item
                            key={cartItem.id}
                            as="div"
                            className="d-flex row align-items-center pe-2"
                        >
                            <div className="content d-flex col-10 justify-content-start align-items-center">
                                <div className="img me-3">
                                    <img
                                        className="img-fluid"
                                        alt=""
                                        src={cartItem.imageurl}
                                    />
                                </div>
                                <div className="text">
                                    <p className="mb-1">{cartItem.name}</p>
                                    <p className="mb-1">${cartItem.price}</p>
                                </div>
                            </div>
                            <div className="close-btn col-2 text-end ">
                                <button
                                    className="delete-icon me-1 keep-open"
                                    onClick={(e) =>
                                        deleteItemHandler(e, cartItem.id)
                                    }
                                >
                                    <FontAwesomeIcon
                                        className="text-danger"
                                        icon={faTrash}
                                    />
                                </button>
                            </div>
                        </Dropdown.Item>
                    ))
                ) : (
                    <p className="display-6 p-2 text-center m-0">
                        No items Found
                    </p>
                )}
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
                <div className="text-center">
                    <MyButton name={"Buy Now"} className="mb-3" dark={true} />
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
