import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Cart } from "./Cart";
import { MyButton } from "../mybutton/MyButton";
import { useContext } from "react";
import { UserContext } from "../../contexts";
import ProfileMenu from "./ProfileMenu";

export function NavBar() {
    let { userData, logout } = useContext(UserContext);
    console.log("userData from nav bar :");
    console.log(userData);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary sticky-top">
                <Container className="position-relative">
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon
                            className="logo"
                            style={{ color: "var(--main-color)" }}
                            size="2xl"
                            icon={faPaw}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="order-2 ms-2 p-1"
                        aria-controls="basic-navbar-nav"
                    />

                    <Navbar.Collapse className="order-3" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    padding: "8px",
                                }}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/services"
                                style={{
                                    textDecoration: "none",
                                    padding: "8px",
                                }}
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="/products"
                                style={{
                                    textDecoration: "none",
                                    padding: "8px",
                                }}
                            >
                                Products
                            </NavLink>

                            <NavLink
                                to="/contact"
                                style={{
                                    textDecoration: "none",
                                    padding: "8px",
                                }}
                            >
                                ContactUs
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className=" d-flex ms-auto   order-1 order-lg-4  position-relative">
                        {userData.isAuth && (
                            <ProfileMenu user={userData.user} logout={logout} />
                        )}
                        <Cart />
                    </div>
                </Container>
            </Navbar>

            {!userData.isAuth ? (
                <div
                    className="w-100 p-1"
                    style={{ backgroundColor: "#3d4d6f" }}
                >
                    <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                        <Link to={"/singup"}>
                            <p className="d-inline-block  p-1 m-0 text-white ">
                                Register now And <span> JoinUs </span>
                            </p>
                        </Link>
                        <p className="d-inline-block m-0  p-1 text-white mx-2 ">
                            Or
                        </p>
                        <Link to={"/login"}>
                            <MyButton
                                dark={false}
                                className={"m-0 py-0   bg-main"}
                                name={"Login"}
                            />
                        </Link>
                    </Container>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
