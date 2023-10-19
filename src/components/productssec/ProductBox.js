import {
    faCartShopping,
    faEye,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts";

export function ProductBox({ id, name, price, img }) {
    let { cartItems, updateCartItems } = useContext(CartContext);
    let [inCart, setInCart] = useState(0);
    useEffect(() => {
        setInCart(cartItems.filter((cartItem) => cartItem?.id === id).length);
        console.log("inCart.current");
        console.log(inCart);
    }, []);
    return (
        <div className="col-md-6 text-center box my-3 col-lg-4 prod">
            <div className="img overflow-hidden mb-3 position-relative mx-auto w-100">
                <div className="icons position-absolute d-flex flex-column gap-3">
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className={`bg-light p-3 mt-4 ${
                                inCart && "active"
                            }`}
                            size="lg"
                            onClick={(e) => {
                                let inCart = cartItems.filter(
                                    (cartItem) => cartItem?.id === id
                                ).length;

                                console.log("|||||clidkinCart");
                                console.log(inCart);
                                if (inCart === 0) {
                                    cartItems.push({
                                        id,
                                        name,
                                        price,
                                        imageurl: img,
                                    });
                                    console.log("cartItems|||||");
                                    console.log(cartItems);
                                    e.target.classList.add("active");
                                    updateCartItems(cartItems);
                                }
                                if (inCart === 1) {
                                    // if the item in the cart
                                    console.log(cartItems);
                                    cartItems = cartItems.filter(
                                        (cartItem) => cartItem?.id !== id
                                    );

                                    console.log(cartItems);
                                    e.target.classList.remove("active");
                                    updateCartItems(cartItems);
                                }
                            }}
                        />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="bg-light p-3"
                            size="lg"
                            onClick={(e) => {
                                e.target.classList.toggle("active");
                            }}
                        />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={faEye}
                            className="bg-light p-3"
                            size="lg"
                            onClick={(e) => {
                                e.target.classList.toggle("active");
                            }}
                        />
                    </div>
                </div>
                <img src={img} alt="" className="w-100 img-fluid" />
            </div>
            <p className="fs-2 mb-1">{name}</p>
            <span className="fs-5">${price}</span>
        </div>
    );
}
