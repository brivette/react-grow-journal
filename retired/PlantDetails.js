import React from "react";
import './details.scss';
import './../App.scss';


const PlantDetails = (props) => {
    return (
        <div className="details">
            <h1>{props.plantName}</h1>
            <h3>Variety: {props.variety}</h3> |
            <h3>Breeder: {props.breeder}</h3> |
            <h3>Flowering Type: {props.floweringType}</h3> |
            <h3>Flowering Time in Weeks: {props.floweringWeeks}</h3> |
        </div>
    )
}

export default PlantDetails;