
import React from 'react';

const Scoreboard = ({ score, inning }) => {
  return (
    <div className="broadcast-card">
      <div className="card-title">Scoreboard</div>
      <div className="scoreboard-row">
        {/* Away Team */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem', color: '#94a3b8' }}>AWAY</div>
          <div className="score-display">{score.away}</div>
        </div>

        {/* Inning */}
        <div className="inning-display">
          <div className="inning-arrow">
            {inning.top ? '▲' : '▼'}
          </div>
          <div className="inning-num">{inning.num}</div>
        </div>

        {/* Home Team */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem', color: '#94a3b8' }}>HOME</div>
          <div className="score-display">{score.home}</div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
