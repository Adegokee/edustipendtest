import React from 'react'

const Eventhandling = () => {

    const handleMouseEnter = () => {
        console.log('Mouse entered the element');
      };
    
      const handleMouseLeave = () => {
        console.log('Mouse left the element');
      };
    
      const handleKeyPress = (e) => {
        console.log('Key pressed:', e.key);
      };
  return (
    <div>
       <h2>Event Handling Component</h2>
      <div
        style={{ border: '1px solid black', padding: '10px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyPress}
        tabIndex={0}>
        Hover over this element and press a key!
      </div>
    </div>
  )
}

export default Eventhandling
