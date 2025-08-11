import React from "react";
import "./Card.css";
interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description: string | React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="card">
            <div className="card-icon-container">
                {icon && <div className="card-icon">{icon}</div>}
                <h3 className="card-title">{title}</h3>
            </div>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
