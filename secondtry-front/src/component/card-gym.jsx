import React from "react";
import './CSS/card-gym.css'

function CardGym({heading,description,svgIcon}){
    return(
        <div className="card-gym">
            <div className="col-md-4 text-center">
                <div className="card-gym-icon">{svgIcon}</div>
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
            {/* <h2 className="card-heading">{heading}</h2>
            <p className="card-description">{description}</p> */}
            {/* <ul className="card-points">
                {points.map((point,index)=> (
                    <li key ={index} className="card-point">{point}</li>
                ))}
            </ul>
            <button className="card-button"onClick={onButtonClick}>{buttonText}</button> */}
        </div>
    );
}
export default CardGym;