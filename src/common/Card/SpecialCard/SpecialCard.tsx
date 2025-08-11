
import React from "react";
import "./SpecialCard.css";

interface SpecialCardProps {
    image?: string;
    title: string;
    description: string | React.ReactNode;
}

const SpecialCard: React.FC<SpecialCardProps> = ({ image, title, description }) => {
    return (
        <div className="special-card">
            <div className="special-card-image-container">
                {image && <img src={image} alt="image" className="special-card-image" />}
            </div>
            <div>
                <div className="special-card-text-container">
                    <h3 className="special-card-title">{title}</h3>
                    <p className="special-card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;
