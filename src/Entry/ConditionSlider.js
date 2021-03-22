import React from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

//can this be put in state?


const ConditionSlider = (props) => {

return (
    <div className="slide-class">
        <RangeSlider 
            className="fgclass"
            value={props.currentCondition}
            onChange={e => props.setEntryCondition(e.target.value)}
            min={1}
            max={5}
            step={1}
            size='lg'
            tooltip='off'
            variant='primary'
        />
    </div>
    )};

export default ConditionSlider;