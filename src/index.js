import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your button components
import Button1 from './Button1'; // Update with the correct path
import Button2 from './Button2'; // Update with the correct path
import Button3 from './Button3'; // Update with the correct path

function App() {
  return (
    <div>
      <div>
        <h1>Give My Page a Title</h1>
      </div>
      <div>
        <Button1>Button One</Button1><br /><br />
        <Button2>Button One</Button2><br /><br />
        <Button3>Button One</Button3><br />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

