import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your button components
import Button1 from './Button1'; // Update with the correct path
import Button2 from './Button2'; // Update with the correct path
import Button3 from './Button3'; // Update with the correct path

function App() {
  return (
    <div>
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

