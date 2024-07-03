import React from "react";
import { useNavigate } from "react-router-dom";

function CardGym({title, description, imageUrl, link}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div 
        className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={handleClick}
        >
            <img src={imageUrl} alt="gym" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}

export default CardGym;