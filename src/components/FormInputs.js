import Form from "react-bootstrap/Form";

export function EmailFormInput({ disabled }) {
    return (
        <Form.Floating className="">
            <Form.Control
                style={{
                    border: "none",
                    backgroundColor: "white",
                    boxShadow: "none",
                    borderRadius: "0",
                    borderBottom: " 2px solid black",
                }}
                id="floatingInputCustom"
                name="email"
                type="text"
                placeholder="name@example.com"
                disabled={disabled}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
    );
}
export function TextFormInput({ name, label, disabled }) {
    return (
        <Form.Floating className="">
            <Form.Control
                name={name}
                style={{
                    border: "none",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    borderRadius: "0",
                    borderBottom: " 2px solid black",
                }}
                id="floatingInputCustomText"
                type="text"
                placeholder={label}
                disabled={disabled}
            />
            <label
                style={{ color: "inherit" }}
                htmlFor="floatingInputCustomText"
            >
                {label}
            </label>
        </Form.Floating>
    );
}
export function PasswordFormInput({ name, label }) {
    return (
        <Form.Floating className="">
            <Form.Control
                style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "0",
                    borderBottom: " 2px solid black",
                }}
                id="floatingInputCustomNumber"
                type="password"
                name={name}
                placeholder="password"
            />
            <label htmlFor="floatingTextarea2">{label}</label>
        </Form.Floating>
    );
}
