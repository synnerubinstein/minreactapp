import React, { useState } from 'react'

const Buttons = () => {
    const [message, setMessage] = useState('');
    const handleButtonClick = (event) => {
    if (event.target.id === 'buttonB') {
    setMessage('correct');
}
};
    return(
        <div id='buttonDiv'>
            <h1 id='header'>Press button B</h1>
            <button type="button" className='buttons' id='buttonA' onClick={handleButtonClick}>A</button>
            <button type="button" className='buttons' id='buttonB' onClick={handleButtonClick}>B</button>
            <button type="button" className='buttons' id='buttonC' onClick={handleButtonClick}>C</button>
            <button type="button" className='buttons' id='buttonD' onClick={handleButtonClick}>D</button>
            <h3 id='message'>{message}</h3>
        </div>
    );
};
export default Buttons;