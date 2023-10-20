import "./landing.css";
import home_bg_img from "../../image/home_bg_img.jpg";
import bottom_wave from "../../image/bottom_wave.png";
import { MyButton } from "../mybutton/MyButton";
import { Link } from "react-router-dom";
export function LandingSec() {
    return (
        <header className="overflow-hidden">
            <div
                className="landding position-relative overflow-hidden"
                id="home"
                style={{ backgroundImage: `url(${home_bg_img})` }}
            >
                <div className="container text-sm-center h-100">
                    <div className="row h-100 align-items-center justify-content-end">
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="text-light">
                                <span> Hi</span> Welcome To Our Pet Shop
                            </h1>
                            <Link to={"/products"}>
                                <MyButton name="SHOP NOW" dark={false} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className="position-absolute start-0 bottom-0 w-100"
                    style={{
                        height: "160px",
                        backgroundImage: `url(${bottom_wave})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>
            </div>
        </header>
    );
}
