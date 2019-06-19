import React from 'react';

//conditionally rendering display colors of whether gate is closed/open and locked/unlocked
const Display = ({ closed, locked }) => {
  // if closed is true display red, otherwise display green
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel">
      {/* conditionally rendering text display, know what to display based on state changes */}
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      {/* if closed is true display closed, otherwise display open */}
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
