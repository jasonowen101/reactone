// Button2.js
import React from 'react';

function Button2() {
    const handleClick = () => {
        // Add your logic for Button 2 here
        console.log('Button 2 clicked!');
    };

    return (
        <button onClick={handleClick}>Step 2</button>
    );
}

export default Button2;
