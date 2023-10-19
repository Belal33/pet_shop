import "./mybutton.css";

export function MyButton({ name, dark, className, onClickHandle }) {
    const handler = (e) => {
        if (onClickHandle) {
            e.preventDefault();
            onClickHandle(e);
        }
    };
    return (
        <button
            onClick={handler}
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
