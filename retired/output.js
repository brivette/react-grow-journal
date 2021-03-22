import React, { useState } from 'react';
import InputGrow from './input';
import uuid from 'react-uuid';

const OutputGrow = ({ addGrowEntry }) => {
    const[growEntry, setGrowEntry] = useState([
       { germDate: '1/2/2020', id: 1 },
       { germDate: '1/4/2020', id: 2},
       { germDate: '2/1/2020', id: 3 }
    ]);
    const addGrowEntry = (germDate) => {
        setGrowEntry([...growEntry, { germDate: 'new date', id: uuid() }]);
    } 
return (
    <div className="grow-list">
        <ul>
            {growEntry.map(entry => {
                return ( <li key={entry.id}>{entry.germDate}</li> );
            })}
        </ul>
            <InputGrow addGrowEntry={addGrowEntry}/>
    </div>
)

}

export default OutputGrow;