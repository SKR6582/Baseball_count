
import React from 'react';

const Field = ({ runners, onToggleBase }) => {
  return (
    <div className="broadcast-card">
      <div className="card-title">Field View</div>
      <div className="field-wrapper">
        <div className="diamond">
          {/* Base 3 (Left) */}
          <div
            className={`base base-3 ${runners[3] ? 'occupied' : ''}`}
            onClick={() => onToggleBase(3)}
            title="Toggle 3rd Base"
          />
          {/* Base 2 (Top) */}
          <div
            className={`base base-2 ${runners[2] ? 'occupied' : ''}`}
            onClick={() => onToggleBase(2)}
            title="Toggle 2nd Base"
          />
          {/* Base 1 (Right) */}
          <div
            className={`base base-1 ${runners[1] ? 'occupied' : ''}`}
            onClick={() => onToggleBase(1)}
            title="Toggle 1st Base"
          />
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem', color: '#64748b', fontSize: '0.8rem' }}>
        Click bases to toggle runners
      </div>
    </div>
  );
};

export default Field;
