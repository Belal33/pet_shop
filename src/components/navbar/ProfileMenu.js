import { Dropdown } from "react-bootstrap";
import { MyButton } from "../mybutton/MyButton";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function ProfileMenu({ user }) {
    const logout = useLogout();
    return (
        <Dropdown style={{ position: "unset" }} className="profile">
            <Dropdown.Toggle
                className="text-black border-0 px-0"
                id="dropdown-basic"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <span
                    style={{
                        fontSize: "calc(0.7rem + 1vw)",
                        fontWeight: "300",
                        lineHeight: "1",
                        // color: "#3d4d6f",
                    }}
                >
                    {user.username}
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{
                    right: "55px",
                    top: "45px",
                    left: "auto",
                    borderRadius: " 10px 0 10px 10px",
                }}
                className="shadow-lg text-center text-sm-start"
            >
                <Dropdown.Item as={Link} to={"/profile"}>
                    <div style={{ fontSize: "12px" }}>Username:</div>
                    <div className="ps-2 fs-5" style={{ color: "#3d4d6f" }}>
                        {user.username}
                    </div>
                </Dropdown.Item>

                <Dropdown.Item as={Link} to={"/profile"}>
                    <div style={{ fontSize: "12px" }}>Email:</div>
                    <div className="ps-2 fs-5" style={{ color: "#3d4d6f" }}>
                        {user.email}
                    </div>
                </Dropdown.Item>

                <Dropdown.Item as={Link} to={"/profile"}>
                    <div style={{ fontSize: "12px" }}>First Name:</div>
                    <div className="ps-2 fs-5" style={{ color: "#3d4d6f" }}>
                        {user.first_name}
                    </div>
                </Dropdown.Item>

                <Dropdown.Item as={Link} to={"/profile"}>
                    <div style={{ fontSize: "12px" }}>Last Name:</div>
                    <div className="ps-2 fs-5" style={{ color: "#3d4d6f" }}>
                        {user.last_name}
                    </div>
                </Dropdown.Item>

                <div className="text-center">
                    <Link to={"/profile"} className="me-2">
                        <MyButton
                            name={"Edit"}
                            className={"py-0 px-4"}
                            dark={true}
                        />
                    </Link>
                    <MyButton
                        name={"Logout"}
                        className={"py-0 px-4 bg-danger"}
                        dark={true}
                        onClickHandle={async (e) => await logout()}
                    />
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
