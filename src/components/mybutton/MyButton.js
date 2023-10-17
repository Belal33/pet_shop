import "./mybutton.css";

export function MyButton({ name, dark, className }) {
    return (
        <button
            href="/"
            className={`button    ${className && className}   ${
                dark && "dark"
            }`}
            style={{ marginTop: "16px" }}
            type="submit"
        >
            {name}
        </button>
    );
}
