// Button1.js
import React from 'react';

function Button1() {
    const handleClick = () => {
        // Add your logic for Button 1 here
        console.log('Button 1 clicked!');
    };
    return (
        <button style={{ width: "100px", height: "50px",}} onClick={handleClick}>Step One</button>
    );
}

export default Button1;
