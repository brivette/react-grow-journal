import React, { useState } from 'react';

const InputGrow = () => {
    const [germDate, setGermDate] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();  
      console.log(germDate);
    }
    return(
        <form onSumbit={handleSubmit}>
            <label>GermDate:</label>
            <input type="text" value={germDate} required onChange={(e) => setGermDate(e.target.value)} />
            <input type="submit" value="Add Entry" />
        </form>
    )
}

export default InputGrow;