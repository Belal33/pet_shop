import useSignupProcess from "../../hooks/useSignupProcess";

function validateForm(values) {
    const errors = {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const emailRegex = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    // const passRegex = new RegExp("/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/");

    if (values.username) {
        if (values.username.split(" ").length > 1) {
            errors.username = "username should not contain any spaces";
        }
    } else errors.username = " is required";

    if (values.email) {
        if (!emailRegex.test(values.email)) {
            errors.email = " not valid";
        }
    } else errors.email = " is required";

    if (values.password) {
        if (!passRegex.test(values.password)) {
            errors.password =
                "must contains one lowercase ,one uppercase and one digit and special character";
        }
    } else errors.password = " is required";

    if (values.confirmPassword) {
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = " dosen't match";
        }
    } else errors.confirmPassword = " required";

    return errors;
}
// https://www.learmoreseekmore.com/2022/10/reactjs-v18-jwtauthentication-using-httponly-cookie.html

export { validateForm, useSignupProcess };
