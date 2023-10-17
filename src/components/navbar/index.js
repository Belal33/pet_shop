import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Cart } from "./Cart";

export function NavBar() {
    return (
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
                    className="order-2 ms-2"
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

                <Cart />
            </Container>
        </Navbar>
    );
}
