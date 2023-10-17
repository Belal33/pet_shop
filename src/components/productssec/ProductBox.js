import {
    faCartShopping,
    faEye,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProductBox({ price, img }) {
    return (
        <div class="col-md-6 text-center box my-3 col-lg-4 prod">
            <div class="img overflow-hidden mb-3 position-relative mx-auto w-100">
                <div class="icons position-absolute d-flex flex-column gap-3">
                    <div class="icon">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="bg-light p-3 mt-4"
                            size="lg"
                        />
                    </div>
                    <div class="icon">
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="bg-light p-3"
                            size="lg"
                        />
                    </div>
                    <div class="icon">
                        <FontAwesomeIcon
                            icon={faEye}
                            className="bg-light p-3"
                            size="lg"
                        />
                    </div>
                </div>
                <img src={img} alt="" class="w-100 img-fluid" />
            </div>
            <p class="fs-2 mb-1">Air-Dried Food</p>
            <span class="fs-5">${price}.00</span>
        </div>
    );
}
