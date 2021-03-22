import React, { useState } from "react";
import './grow.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GrowEntry = props => {
    return (
        <div className="growComponent">
            <h1>New Grow</h1>
            <div className="container">
                <div className="Row">
                {/* New Grow Row */}
                    <div className="col s6">
                        <h3>Dates</h3>
                        <div className="Row">
                            <label htmlFor="germ" className="m-1"> Germination Start Date:</label>
                            <DatePicker className="inputStyles" 
                                        
                                        //Prevent you from selecting dates in the past
                                        // minDate={new Date()}
                                        // can also use maxDate
                                        
                                        //filter out dates from being selected 
                                        //filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                            
                                        
                            /> 
                        </div>

                        <div className="row">
                            <label htmlFor="veg" className="m-1"> Vegetation Start Date: </label>
                            <DatePicker className="inputStyles" selected={props.vegValue} onChange={props.vegChange} />
                        </div>

                        <div className="row">
                            <label htmlFor="flower" className="m-1"> Flowering Start Date: </label>
                            <DatePicker className="inputStyles" selected={props.vegValue} onChange={props.vegChange} />
                        </div>
                    </div>

                    <div className="col s6">
                        <h3 className="pt-2">Lights</h3>
                        <div className="row">
                            <label htmlFor="watts" className="col-xs-3"> Light watts </label>
                            <input className="inputStyles form-control w-50" type="text" placeholder="watts"></input>
                        </div>

                        <div className="row">
                            <label htmlFor="lightKind" className=""> Light kind </label>
                            <input className="inputStyles form-control w-50" type="text" placeholder="light kind"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GrowEntry;