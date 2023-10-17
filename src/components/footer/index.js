import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/esm/Container";
import { MyButton } from "../mybutton/MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: "url(image/footer_background.jpg)",
            }}
        >
            <Container>
                <div className="d-flex flex-wrap w-75 mx-auto justify-content-center">
                    <MyButton
                        name={
                            <>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className=" me-3"
                                />
                                facebook
                            </>
                        }
                        className={"my-4 me-3"}
                    />

                    <MyButton
                        name={
                            <>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className=" me-3"
                                />
                                linkedin
                            </>
                        }
                        className={"my-4 me-3"}
                    />

                    <MyButton
                        name={
                            <>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className=" me-3"
                                />
                                instagram
                            </>
                        }
                        className={"my-4 me-3"}
                    />

                    <MyButton
                        name={
                            <>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className=" me-3"
                                />
                                Twitter
                            </>
                        }
                        className={"my-4 me-3"}
                    />

                    <MyButton
                        name={
                            <>
                                <FontAwesomeIcon
                                    icon={faPinterest}
                                    className=" me-3"
                                />
                                pinterest
                            </>
                        }
                        className={"my-4 me-3"}
                    />
                </div>
                <p className="fs-3 pb-4 text-light text-center m-0">
                    Created By <span>Belal Elbanna</span> | All Rights Reserved!
                </p>
            </Container>
        </footer>
    );
}
