import React, { useState } from "react";
import { CannIcon, CalIcon, NuteIcon } from '../Grows/Icons';

let plant = [
    {"plantid": '0', "plantName": 'White Widow', "variety": 'Sativa/Indica', "breeder": 'Seedsman', "imageURL": '', "floweringType": 'Photo-period', "floweringWeeks": '8'}
  ]

const JournalEntry = ({plantid, plantName, variety, breeder, imageURL, floweringType, floweringWeeks}) => {    
        return (
            <div className="growComponent">
                <p>
                    <CannIcon />  
                        <span>Strain:</span> {plantName}
                </p>
                
                <p>     
                    <CalIcon />
                        <span>Feed Date:</span> {variety}
                </p>

                <p>
                    <NuteIcon />
                        <span>Nutrients:</span> {floweringType}
                </p>
            </div>
        )
}

export default JournalEntry;