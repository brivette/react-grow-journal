import React, { useState } from "react";
import { CannIcon, CalIcon, NuteIcon } from '../Grows/Icons';
import './../App.scss';

const AddEntry = (props) => { 
        
    return (
        <div className="growComponent">
            <h1>New Entry</h1>
            <p>
                <CannIcon />  
                    <span>Chose grow:</span> 
                    <select className="inputStyles">
                        <option value="Blueberry Auto">Blueberry</option>
                        <option value="Zkittlez Auto">Zkittlez</option>
                        <option value="Gelat.OG Auto">Gelat.OG</option>
                        <option value="Sweet Zombie">Sweet Zombie</option>
                        <option value="White Widow">White Widow</option>
                    </select>
            </p>
            
            <p>     
                <CalIcon />
                    <span>Feed Date:</span> 
            </p>

            <p>
                <NuteIcon />
                    <span>Nutrients:</span> {props.nutrients}
            </p>
        </div>
    )
}

export default AddEntry;