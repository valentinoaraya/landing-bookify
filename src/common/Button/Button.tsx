import "./Button.css"

interface Props {
    children: React.ReactNode
    width?: string
}

const Button: React.FC<Props> = ({ children, width }) => {
    return (
        <button className="button"
            style={{
                width: width
            }}
        >
            <p className="pButton">{children}</p>
        </button>
    );
}

export default Button;
