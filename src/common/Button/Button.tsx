import "./Button.css"

interface Props {
    children: React.ReactNode;
    width?: string;
    onSubmit?: () => void;
}

const Button: React.FC<Props> = ({ children, width, onSubmit }) => {
    return (
        <button className="button"
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
