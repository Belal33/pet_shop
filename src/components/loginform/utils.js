import useLoginProcess from "../../hooks/useLoginProcess";

function validateForm(values) {
    const errors = {
        email: "",
        password: "",
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (values.email) {
        if (!emailRegex.test(values.email)) {
            errors.email = " not valid";
        }
    } else errors.email = " is required";

    if (!values.password) {
        errors.password = " is required";
    }

    return errors;
}
// https://www.learmoreseekmore.com/2022/10/reactjs-v18-jwtauthentication-using-httponly-cookie.html

export { validateForm, useLoginProcess };
