import "./Title.css"

interface Props {
    children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
    return (
        <h1 className="title">
            {children}
        </h1>
    );
}

export default Title;
