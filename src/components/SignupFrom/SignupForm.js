import {
    EmailFormInput,
    PasswordFormInput,
    TextFormInput,
} from "../FormInputs";
import { MyButton } from "../mybutton/MyButton";
import Form from "react-bootstrap/Form";
import { useSignupProcess, validateForm } from "./utils";
import { useState } from "react";

export default function SinupForm() {
    let [data, setData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    let [formerrors, setFormErrors] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const handleSignup = useSignupProcess();
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
                handleSignup(data, formerrors, setFormErrors);
            }}
        >
            <p
                style={{
                    fontWeight: "400",
                }}
                className="text-center text-main text-md-start display-2"
            >
                Sign Up
            </p>

            <EmailFormInput />
            <div className="mb-2 text-danger">
                {formerrors.email && formerrors.email}
            </div>
            <TextFormInput name={"username"} label={"Username"} />
            <div className="mb-2 text-danger">
                {formerrors.username && formerrors.username}
            </div>

            <PasswordFormInput name={"password"} label={"Password"} />
            <div className="mb-2 text-danger">
                {formerrors.password && formerrors.password}
            </div>
            <PasswordFormInput
                name={"confirmPassword"}
                label={"Confirm-Password"}
            />
            <div className="mb-2 text-danger">
                {formerrors.confirmPassword && formerrors.confirmPassword}
            </div>
            <div className="mb-2 text-danger">
                {formerrors.non_field_errors && formerrors.non_field_errors}
            </div>

            <MyButton
                name={"SignUp"}
                dark={true}
                className={"w-100 text-center my-4"}
            />
        </Form>
    );
}
