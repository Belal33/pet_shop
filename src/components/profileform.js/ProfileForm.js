import { Form } from "react-bootstrap";
import { TextFormInput } from "../FormInputs";
import { MyButton } from "../mybutton/MyButton";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts";
import { validateForm } from "./utils";
// import { clientApi } from "../../clientApis/axiosBase";
import useAuthClientApi from "../../hooks/useAuthClientApi";

export function ProfileForm() {
    let authClientApi = useAuthClientApi();
    let { userData, updateUserData } = useContext(UserContext);
    let [editState, setEditState] = useState(false);
    let [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
    });
    let [formerrors, setFormErrors] = useState({
        firstname: "",
        lastname: "",
        username: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editState) {
            let errors = validateForm(data);
            console.log(errors);
            if (!errors.lastname && !errors.firstname && !errors.username) {
                try {
                    let reqData = {};
                    if (data.username) {
                        reqData.username = data.username;
                    }
                    if (data.firstname) {
                        reqData.first_name = data.firstname;
                    }
                    if (data.lastname) {
                        reqData.last_name = data.lastname;
                    }
                    let res = await authClientApi.patch("auth/user", reqData);
                    console.log(res?.data);
                    let newUserData = {};
                    newUserData.user = res.data;
                    newUserData.isAuth = true;
                    e.target.lastname.value = "";
                    e.target.username.value = "";
                    e.target.firstname.value = "";

                    updateUserData(newUserData);
                    setEditState(false);
                } catch (err) {
                    if (err?.response?.status === 400) {
                        errors = { ...err.response.data };
                        setFormErrors(errors);

                        console.log(err);
                    } else {
                        console.log(err);
                        errors = { non_field_errors: err.message };
                        setFormErrors(errors);
                    }
                }
            }
        } else {
            setEditState(true);
        }
    };

    return (
        <Form
            onChange={(e) => {
                // let data = {};
                data[e.target.name] = e.target.value;
                setData(data);
                console.log(data);
            }}
            onSubmit={(e) => handleSubmit(e)}
            className="p-2 p-sm-5 fs-5"
        >
            <div
                className={` mb-3 rounded-top bg-ligh `}
                style={{ color: "#3d4d6f" }}
            >
                <TextFormInput
                    name={"email"}
                    label={userData?.user?.email}
                    disabled={true}
                />
            </div>
            <div
                className={` ${editState && "text-main bg-white"}`}
                style={{ color: "#3d4d6f" }}
            >
                <TextFormInput
                    name={"username"}
                    label={editState ? "Username" : userData.user.username}
                    disabled={!editState}
                />
            </div>

            <div className="mb-2 text-danger">
                {formerrors.username && formerrors.username}
            </div>

            <div className={` ${editState && "text-main bg-white"}`}>
                <TextFormInput
                    name={"firstname"}
                    label={editState ? "First Name" : userData.user.first_name}
                    disabled={!editState}
                />
            </div>
            <div className="mb-2 text-danger">
                {formerrors.first_name && formerrors.firstname}
            </div>
            <div className={` ${editState && "text-main bg-white"}`}>
                <TextFormInput
                    name={"lastname"}
                    label={editState ? "Last Name" : userData.user.last_name}
                    disabled={!editState}
                />
            </div>

            <div className="mb-2 text-danger">
                {formerrors.last_name && formerrors.lastname}
            </div>

            <div className="mb-2 text-danger">
                {formerrors.non_field_errors && formerrors.non_field_errors}
            </div>

            <MyButton
                name={!editState ? "Edit Profile" : "Save Changes"}
                dark={true}
                className={`w-100 text-center my-4 ${
                    !editState ? "bg-white" : "bg-success text-white"
                }`}
            />
        </Form>
    );
}
