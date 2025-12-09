
import React from 'react';

const CountDisplay = ({ count }) => {
  // Helper to render lamps
  const renderLamps = (type, max, current) => {
    const lamps = [];
    for (let i = 0; i < max; i++) {
      // i=0 is first lamp. if current=1, lamp 0 is active.
      lamps.push(
        <div key={i} className={`lamp ${i < current ? 'active' : ''} ${type}`}></div>
      );
    }
    return lamps;
  };

  return (
    <div className="broadcast-card">
      <div className="card-title">Count (BSO)</div>

      <div className="bso-row">
        <div className="bso-label B">B</div>
        <div className="lamp-container">
          {renderLamps('B', 3, count.b)}
        </div>
      </div>

      <div className="bso-row">
        <div className="bso-label S">S</div>
        <div className="lamp-container">
          {renderLamps('S', 2, count.s)}
        </div>
      </div>

      <div className="bso-row">
        <div className="bso-label O">O</div>
        <div className="lamp-container">
          {renderLamps('O', 2, count.o)}
        </div>
      </div>
    </div>
  );
};

export default CountDisplay;
