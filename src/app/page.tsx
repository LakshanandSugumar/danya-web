import React from 'react';

// The main component must be named App and be the default export.
const App = () => {

  // The main container uses Tailwind classes to center content:
  // min-h-screen: Take up the full height of the viewport.
  // flex, items-center, justify-center: Use flexbox to center content horizontally and vertically.
  // bg-gray-50: A light background color for a clean look.
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      
      {/* The text element:
        text-7xl: Makes the text very large (adjust as needed, e.g., 6xl, 8xl).
        font-extrabold: Applies extra bold weight.
        text-gray-900: Dark color for contrast.
        tracking-tight: Reduces letter spacing slightly for a tighter look.
      */}
      <div className="text-center p-6 bg-white rounded-xl shadow-2xl">
        <p className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-gray-900 tracking-tight">
          Hello Danyasri HariShathish!
        </p>
      </div>

    </div>
  );
}

export default App;
