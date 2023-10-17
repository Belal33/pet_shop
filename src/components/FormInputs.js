import Form from "react-bootstrap/Form";

export function EmailFormInput() {
    return (
        <Form.Floating className="">
            <Form.Control
                style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "0",
                    borderBottom: " 2px solid black",
                }}
                id="floatingInputCustom"
                name="email"
                type="text"
                placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
    );
}
export function TextFormInput({ name, label }) {
    return (
        <Form.Floating className="">
            <Form.Control
                name={name}
                style={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "0",
                    borderBottom: " 2px solid black",
                }}
                id="floatingInputCustomText"
                type="text"
                placeholder={label}
            />
            <label htmlFor="floatingInputCustomText">{label}</label>
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
