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
            <div className="cardIconContainer">
                {icon && <div className="cardIcon">{icon}</div>}
                <h3 className="cardTitle">{title}</h3>
            </div>
            <p className="cardDescription">{description}</p>
        </div>
    );
};

export default Card;
