import { Dropdown } from "react-bootstrap";
import { MyButton } from "../mybutton/MyButton";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

export default function ProfileMenu({ user }) {
    const logout = useLogout();
    return (
        <Dropdown className="profile">
            <Dropdown.Toggle
                className="text-black border-0 px-0"
                id="dropdown-basic"
                style={{
                    backgroundColor: "transparent",
                }}
            >
                <span
                    className="fs-sm-5"
                    style={{
                        fontSize: "20px",
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
                    right: "5px",
                    top: "30px",
                    left: "auto",
                    borderRadius: " 10px 0 10px 10px",
                }}
                className="shadow-lg"
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
