import React from 'react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false,
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <>
        {/* passing default state down as props */}
        <Display locked={locked} closed={closed} />
        {/* passing default state and toggle functions as props */}
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </>
    );
  }

// Toggle Functions

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  // updating locked to true based on the previous state condition
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
    // updating closed to true based on the previous state condition
  };
}

export default Dashboard;