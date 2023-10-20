import { MyButton } from "../mybutton/MyButton";
import Form from "react-bootstrap/Form";
import { EmailFormInput, TextFormInput } from "../FormInputs";

export function ContactForm() {
    return (
        <div className="col-sm-10 col-md-8 col-xl-6 p-3">
            <p className="text-sm-center text-md-start fs-1">Contact Us</p>

            <EmailFormInput />
            <TextFormInput name={"name"} label={"Name"} />

            <Form.Floating className="mb-3">
                <Form.Control
                    style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                        borderBottom: " 2px solid black",
                    }}
                    id="floatingInputCustomNumber"
                    type="text"
                    placeholder="number"
                />
                <label htmlFor="floatingInputCustomNumber">Phone Number</label>
            </Form.Floating>

            <Form.Floating className="mb-3">
                <Form.Control
                    style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                        borderBottom: " 2px solid black",
                        height: "100px",
                    }}
                    id="floatingTextarea2"
                    placeholder="Leave a comment here"
                    as={"textarea"}
                />
                <label htmlFor="floatingTextarea2">Your Comment Here</label>
            </Form.Floating>

            <MyButton
                name={"Send Message"}
                dark={true}
                className={"w-100 text-center my-4"}
            />
        </div>
    );
}
