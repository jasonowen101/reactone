// Button2.js
import React from 'react';

function Button2() {
    const handleClick = () => {
        // Add your logic for Button 2 here
        console.log('Button 2 clicked!');
    };

    return (
        <button style={{ width: "100px", height: "50px",}} onClick={handleClick}>Step Two</button>
    );
}

export default Button2;
