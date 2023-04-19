import React from "react";

export default function Start(props) {
    const starIcon = props.isFilled ? "star-gold.png" : "star-white.png"
    return (

        <img src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={props.handledClick}
        />
    )



}