import { EmailFormInput, PasswordFormInput } from "../FormInputs";
import { MyButton } from "../mybutton/MyButton";
import Form from "react-bootstrap/Form";
import { useLoginProcess, validateForm } from "./utils";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    let [data, setData] = useState({
        email: "",
        password: "",
    });
    let [formerrors, setFormErrors] = useState({
        email: "",
        password: "",
    });
    const handleLogin = useLoginProcess();
    return (
        <Form
            style={{ maxWidth: "600px" }}
            className="col-md-6 p-5"
            onChange={(e) => {
                data[e.target.name] = e.target.value;
                setData(data);
                // console.log(data);
            }}
            onSubmit={(e) => {
                e.preventDefault();
                formerrors = validateForm(data);
                setFormErrors(formerrors);
                console.log(formerrors);
                handleLogin(data, formerrors, setFormErrors);
            }}
        >
            <p
                style={{
                    fontWeight: "400",
                }}
                className="text-center  text-md-start display-2"
            >
                Log <span>In</span>
            </p>

            <EmailFormInput />
            <div className="mb-2 text-danger">
                {formerrors.email && formerrors.email}
            </div>

            <PasswordFormInput name={"password"} label={"Password"} />
            <div className="mb-2 text-danger">
                {formerrors.password && formerrors.password}
            </div>

            <div className="mb-2 text-danger">
                {formerrors.non_field_errors && formerrors.non_field_errors}
            </div>

            <div className="text center mt-5">
                <Link to={"/signup"}>
                    <span>Create an Account</span>
                </Link>
            </div>
            <MyButton
                name={"LogIn"}
                dark={true}
                className={"w-100 text-center mb-4"}
            />
        </Form>
    );
}
