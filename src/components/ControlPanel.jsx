
import React from 'react';

const ControlPanel = ({ actions }) => {
  return (
    <div className="broadcast-card" style={{ gridColumn: '1 / -1' }}>
      <div className="card-title">Manual Control Panel</div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Score Controls */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '0.5rem' }}>Score</div>
          <div className="control-grid">
            <button className="btn btn-primary" onClick={() => actions.score('away', 1)}>
              Away +1 <span className="kb-hint">Q</span>
            </button>
            <button className="btn btn-primary" onClick={() => actions.score('home', 1)}>
              Home +1 <span className="kb-hint">P</span>
            </button>
            <button className="btn btn-danger" onClick={() => actions.score('away', -1)}>
              Away -1
            </button>
            <button className="btn btn-danger" onClick={() => actions.score('home', -1)}>
              Home -1
            </button>
          </div>
        </div>

        {/* Count Controls */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '0.5rem' }}>Count</div>
          <div className="control-grid">
            <button className="btn btn-ghost" style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }} onClick={() => actions.count('b')}>
              Ball <span className="kb-hint">B</span>
            </button>
            <button className="btn btn-ghost" style={{ background: 'rgba(250, 204, 21, 0.2)', color: '#facc15' }} onClick={() => actions.count('s')}>
              Strike <span className="kb-hint">S</span>
            </button>
            <button className="btn btn-ghost" style={{ background: 'rgba(218, 41, 28, 0.2)', color: '#fda4af' }} onClick={() => actions.count('o')}>
              Out <span className="kb-hint">O</span>
            </button>
            <button className="btn btn-danger" onClick={actions.resetCount}>
              Reset Count <span className="kb-hint">R</span>
            </button>
          </div>
        </div>

        {/* Inning Controls */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '0.5rem' }}>Inning</div>
          <div className="control-grid">
            <button className="btn btn-primary" onClick={actions.nextInning}>
              Next Inn <span className="kb-hint">N</span>
            </button>
            <button className="btn btn-danger" onClick={actions.prevInning}>
              Prev Inn
            </button>
          </div>
        </div>

        {/* Runners Controls */}
        <div style={{ flex: 1, minWidth: '150px' }}>
          <div style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '0.5rem' }}>Runners</div>
          <div className="control-grid">
            <button className="btn btn-ghost" onClick={actions.resetRunners}>
              Clear All <span className="kb-hint">C</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ControlPanel;
