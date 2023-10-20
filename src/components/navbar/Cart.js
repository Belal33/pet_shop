import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { MyButton } from "../mybutton/MyButton";
import { useContext } from "react";
import { CartContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

export function Cart() {
    let { cartItems, updateCartItems } = useContext(CartContext);
    const navigete = useNavigate();
    let deleteItemHandler = (e, itemId) => {
        console.log(e.target);
        updateCartItems(
            cartItems.filter((cartItem) => cartItem?.id !== itemId)
        );
    };
    return (
        <Dropdown className="cart ">
            <Dropdown.Toggle
                className="text-black border-0 p-2 position-relative"
                id="dropdown-basic"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                {cartItems?.length && (
                    <div className="cartIcon">{cartItems?.length}</div>
                )}
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
                <div className="text-center">
                    <MyButton
                        onClickHandle={(e) => {
                            if (cartItems?.length) {
                                navigete("/payment");
                            }
                        }}
                        name={"Buy Now"}
                        className="mb-3"
                        dark={true}
                    />
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
