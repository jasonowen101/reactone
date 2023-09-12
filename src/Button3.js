// Button3.js
import React from 'react';

function Button3() {
    const handleClick = () => {
        // Add your logic for Button 3 here
        console.log('Button 3 clicked!');
    };
    return (
        <button style={{ width: "100px", height: "50px",}} onClick={handleClick}>Step Three</button>
    );
}

export default Button3;
