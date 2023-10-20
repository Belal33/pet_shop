import { useContext, useEffect, useState } from "react";
import { CartContext, UserContext } from "../contexts";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MyButton } from "../components/mybutton/MyButton";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import useAuthClientApi from "../hooks/useAuthClientApi";

export default function PaymentPage() {
    let { cartItems, updateCartItems } = useContext(CartContext);
    let { userData } = useContext(UserContext);
    let authClientApi = useAuthClientApi();
    let [totalPrice, setTotalPrice] = useState(0);
    let navigete = useNavigate();

    const handleSubmitOperation = (e) => {
        for (let cartItem of cartItems) {
            authClientApi
                .post("tools/user-operation", {
                    user: userData.user.pk,
                    product: cartItem.id,
                })
                .then((res) => {
                    console.log(cartItem.id);
                })
                .catch((err) => console.log(err));
        }
        updateCartItems([]);
    };

    let deleteItemHandler = (e, itemId) => {
        updateCartItems(
            cartItems.filter((cartItem) => cartItem?.id !== itemId)
        );
        console.log(e.target);
        // setTotalPrice(cartItems.reduce((b, e) => +b + +e.price, 0));
    };
    useEffect(() => {
        setTotalPrice(cartItems.reduce((b, e) => +b + +e.price, 0));
    }, [cartItems]);
    if (+totalPrice === 0) {
        navigete("/products");
    }
    return (
        <div
            className="d-flex flex-column justify-content-between"
            style={{ minHeight: "100vh" }}
        >
            <Container className="overflow-hidden px-4">
                <div
                    className="d-flex justify-content-center align-items-center  p-4 pt-5"
                    style={{
                        backgroundColor: "transparent",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="display-3 p-3"
                        size="xl"
                        style={{
                            backgroundColor: "transparent",
                        }}
                    />
                    <span
                        style={{
                            backgroundColor: "transparent",
                        }}
                        className="display-3 py-3"
                    >
                        {" "}
                        Content
                    </span>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center p-4"
                    style={{
                        backgroundColor: "transparent",
                    }}
                >
                    <div className="text-center fs-2">
                        {" "}
                        Total Price:{" "}
                        <span style={{ color: "#3d4d6f" }}>{totalPrice}$ </span>
                    </div>
                </div>

                <div className="row justify-content-center ">
                    {cartItems?.length ? (
                        cartItems.map((cartItem) => (
                            <div
                                // style={{ borderBottom: "2px solid black" }}
                                key={cartItem.id}
                                className=" d-flex mb-3 col-lg-8  row bg-light align-items-center  "
                            >
                                <div className="content col-10 d-flex  justify-content-start align-items-center">
                                    <div className="img me-3">
                                        <img
                                            style={{ width: "100px" }}
                                            className="img-fluid"
                                            alt=""
                                            src={cartItem.imageurl}
                                        />
                                    </div>
                                    <div className="text pt-3">
                                        <p className="mb-1 text-main display-6">
                                            {cartItem.name}
                                        </p>
                                        <p
                                            style={{ color: "#3d4d6f" }}
                                            className="mb-1 fs-4"
                                        >
                                            ${cartItem.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="close-btn col-2 text-end ">
                                    <button
                                        className="delete-icon  keep-open"
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
                                <p className="mt-3">
                                    Lorem Ipsum Dr Sit Amet Consectetur,
                                    Adipisicing Elit. Voluptatum Sint, Dolore
                                    Perspiciatis Iure Consequuntur Eligendi
                                    Quaerat Vitae Shaikh Anas.
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="display-6 py-5 text-center m-0">
                            No items Found
                        </p>
                    )}
                    <div className=" align-items-center mb-4 d-flex flex-column">
                        <MyButton
                            name={"Confirm operation"}
                            className="mb-3 bg-success text-white "
                            dark={true}
                            onClickHandle={(e) => {
                                handleSubmitOperation(e);
                            }}
                        />

                        <MyButton
                            name={"ignore"}
                            className=" bg-danger text-white mb-3 "
                            dark={true}
                            onClickHandle={(e) => navigete("/products")}
                        />
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
