
import React from "react";
import "./SpecialCard.css";

interface SpecialCardProps {
    image?: string;
    title: string;
    description: string | React.ReactNode;
}

const SpecialCard: React.FC<SpecialCardProps> = ({ image, title, description }) => {
    return (
        <div className="specialCard">
            <div className="specialCardImageContainer">
                {image && <img src={image} alt="image" className="specialCardImage" />}
            </div>
            <div>
                <div className="specialCardTextContainer">
                    <h3 className="specialCardTitle">{title}</h3>
                    <p className="specialCardDescription">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;
