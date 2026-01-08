import "./Button.css"

interface Props {
    children: React.ReactNode;
    width?: string;
    onSubmit?: () => void;
    boxShadow?: boolean;
}

const Button: React.FC<Props> = ({ children, width, onSubmit, boxShadow }) => {
    return (
        <button className={boxShadow ? "button boxShadow" : "button"}
            style={{
                width: width
            }}
            onClick={onSubmit}
        >
            <p className="pButton">{children}</p>
        </button>
    );
}

export default Button;
