import "./foodsec.css";

export default function FoodSec() {
    return (
        <section className="food pb-5">
            <div className="container-fluid">
                <div className="row align-items-center py-4">
                    <div className="col-md-6 p-0">
                        <div className="img">
                            <img
                                src="image/dog_food.png"
                                alt="dog food"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-start my-3 text-center">
                        <p className="fs-1">
                            <span> Air Dried </span>Dog Food
                        </p>
                        <p className="text-black-50">
                            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing
                            Elit. Voluptatum Sint, Dolore Perspiciatis Iure
                            Consequuntur Eligendi Quaerat Vitae Shaikh Anas.
                        </p>
                        <p className="text-black fs-1">$15.00 ~ $35.00</p>
                        <a href="/" className="link-img">
                            <img
                                style={{
                                    transition: "0.3s",
                                }}
                                src="image/shop_now_dog.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6 text-start my-3 text-center">
                        <p className="fs-1">
                            <span> Air Dried </span>Cat Food
                        </p>
                        <p className="text-black-50">
                            Lorem Ipsum Dr Sit Amet Consectetur, Adipisicing
                            Elit. Voluptatum Sint, Dolore Perspiciatis Iure
                            Consequuntur Eligendi Quaerat Vitae Shaikh Anas.
                        </p>
                        <p className="text-black fs-1">$11.00 ~ $25.00</p>
                        <a href="/" className="link-img">
                            <img
                                style={{
                                    transition: "0.3s",
                                }}
                                src="image/shop_now_cat.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="img">
                            <img
                                src="image/cat_food.png"
                                alt="cat food"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
