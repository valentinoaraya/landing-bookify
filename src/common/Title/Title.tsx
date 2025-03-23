import "./Title.css"

interface Props {
    children: React.ReactNode;
    fontSize?: string;
    width?: string;
    textAlign?: "center" | "left" | "right";
}

const Title: React.FC<Props> = ({ children, fontSize, width, textAlign }) => {
    return (
        <h1
            className="title"
            style={{
                fontSize: fontSize,
                width: width,
                textAlign: textAlign
            }}
        >
            {children}
        </h1>
    );
}

export default Title;
