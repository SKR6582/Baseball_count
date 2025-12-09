
import React from 'react';

const PlayerInfo = ({ players, onUpdate }) => {
  return (
    <div className="broadcast-card">
      <div className="card-title">Matchup Info</div>

      {/* Pitcher */}
      <div className="player-row">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="player-role">P</span>
            <input
              className="player-name-input"
              value={players.pitcher}
              onChange={(e) => onUpdate('pitcher', e.target.value)}
              placeholder="Pitcher Name"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>PITCHES:</span>
            <span style={{ fontSize: '1rem', fontWeight: '700', color: '#fff' }}>{players.pitchCount}</span>
            <button
              className="btn btn-ghost"
              style={{ padding: '2px 6px', fontSize: '0.7rem', marginLeft: 'auto' }}
              onClick={() => onUpdate('pitchCount', players.pitchCount + 1)}
            >
              +1
            </button>
            <button
              className="btn btn-ghost"
              style={{ padding: '2px 6px', fontSize: '0.7rem' }}
              onClick={() => onUpdate('pitchCount', Math.max(0, players.pitchCount - 1))}
            >
              -1
            </button>
          </div>
        </div>
      </div>

      {/* Batter */}
      <div className="player-row" style={{ borderBottom: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <span className="player-role">H</span>
          <input
            className="player-name-input"
            value={players.batter}
            onChange={(e) => onUpdate('batter', e.target.value)}
            placeholder="Batter Name"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
