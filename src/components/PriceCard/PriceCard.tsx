import React from "react";
import Button from "../../common/Button/Button";
import "./PriceCard.css";

interface PriceCardProps {
    title: string;
    price: string;
    features: string[];
    onClick?: () => void;
    highlight?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
    title,
    price,
    features,
    highlight = false,
}) => {
    return (
        <div className={`priceCard ${highlight ? "highlight" : ""}`}>
            <h3 className="priceCardTitle">{title}</h3>
            <p className="priceCardPrice">{price}</p>
            <ul className="priceCardFeatures">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <Button width="70%">Comenzá Ahora</Button>
        </div>
    );
};

export default PriceCard;
