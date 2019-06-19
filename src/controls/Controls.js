import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      {/* button is clicked (toggleLocked function invoked, closed=true and state changes: locked=true) then display 'unlock gate' if locked is false, otherwise, display lock gate.  */}
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {/* if button is clicked, gate -> locked (true), text dynamically changes to display unlock gate, otherwise if not clicked, default state conditions remain in place of locked=false, closed=true, in this case display locked gate */}
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>

        {/* button is clicked (toggleClosed function invoked, locked=false and state changes: closed=true) then display open gate if closed is false, otherwise, display close gate.  */}
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
      {/* if button is clicked, gate -> closed (true), text dynamically changes to display open gate, otherwise if not clicked, default state conditions remain in place of locked=false, closed=false, in this gate display close gate. */}
        {closed ? 'Open Gate' : 'Close Gate'} 
      </button>
    </div>
  );
};

export default Controls;
