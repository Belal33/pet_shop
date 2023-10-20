function validateForm(values) {
    const errors = {
        firstname: "",
        lastname: "",
        username: "",
    };

    if (values.username) {
        if (values.username.split(" ").length > 1) {
            errors.username = "username should not contain any spaces";
        }
    }

    if (values?.firstname) {
        if (values.firstname.split(" ").length > 1) {
            errors.firstname = "First Name should not contain any spaces";
        }
    }
    if (values?.lastname) {
        if (values.lastname.split(" ").length > 1) {
            errors.lastname = "Last Name should not contain any spaces";
        }
    }
    return errors;
}
// https://www.learmoreseekmore.com/2022/10/reactjs-v18-jwtauthentication-using-httponly-cookie.html

export { validateForm };
