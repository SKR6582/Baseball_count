
import React, { useState, useEffect } from 'react';
import Field from './components/Field';
import Scoreboard from './components/Scoreboard';
import CountDisplay from './components/CountDisplay';
import PlayerInfo from './components/PlayerInfo';
import ControlPanel from './components/ControlPanel';

function App() {
  const [runners, setRunners] = useState({ 1: false, 2: false, 3: false });
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [inning, setInning] = useState({ num: 1, top: true });
  const [count, setCount] = useState({ b: 0, s: 0, o: 0 });
  const [players, setPlayers] = useState({ pitcher: 'Pitcher Name', batter: 'Batter Name', pitchCount: 0 });

  // --- Actions ---

  const toggleRunner = (base) => {
    setRunners(prev => ({ ...prev, [base]: !prev[base] }));
  };

  const updateScore = (team, delta) => {
    setScore(prev => ({
      ...prev,
      [team]: Math.max(0, prev[team] + delta)
    }));
  };

  const updateCount = (type) => {
    setCount(prev => {
      const next = { ...prev };
      if (type === 'b') {
        next.b = (next.b + 1) > 3 ? 0 : next.b + 1; // Loop 0-3
      } else if (type === 's') {
        next.s = (next.s + 1) > 2 ? 0 : next.s + 1; // Loop 0-2
      } else if (type === 'o') {
        next.o = (next.o + 1) > 2 ? 0 : next.o + 1; // Loop 0-2
        if (next.o === 0) {
          // Optional: Auto clear bases/count on 3 outs?
          // User asked for manual, so let's just loop.
        }
      }
      return next;
    });
  };

  const resetCount = () => setCount({ b: 0, s: 0, o: 0 });
  const resetRunners = () => setRunners({ 1: false, 2: false, 3: false });

  const nextInning = () => {
    setInning(prev => {
      if (prev.top) return { ...prev, top: false };
      return { num: prev.num + 1, top: true };
    });
    // Generally new inning resets count and bases
    resetCount();
    resetRunners();
  };

  const prevInning = () => {
    setInning(prev => {
      if (!prev.top) return { ...prev, top: true };
      if (prev.num > 1) return { num: prev.num - 1, top: false };
      return prev;
    });
  };

  const updatePlayer = (field, value) => {
    setPlayers(prev => ({ ...prev, [field]: value }));
  };

  // --- Keyboard Shortcuts ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in an input
      if (e.target.tagName === 'INPUT') return;

      switch (e.key.toLowerCase()) {
        case '1': toggleRunner(1); break;
        case '2': toggleRunner(2); break;
        case '3': toggleRunner(3); break;
        case 'b': updateCount('b'); break;
        case 's': updateCount('s'); break;
        case 'o': updateCount('o'); break;
        case 'r': resetCount(); break;
        case 'c': resetRunners(); break;
        case 'q': updateScore('away', 1); break;
        case 'p': updateScore('home', 1); break;
        case 'n': nextInning(); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // Dependencies are stable due to functional state updates

  // Actions object for ControlPanel
  const actions = {
    score: updateScore,
    count: updateCount,
    resetCount,
    resetRunners,
    nextInning,
    prevInning
  };

  return (
    <div className="overlay-container">
      {/* Left Panel: Field */}
      <div className="left-panel">
        <Field runners={runners} onToggleBase={toggleRunner} />
        <PlayerInfo players={players} onUpdate={updatePlayer} />
      </div>

      {/* Main Panel: Scoreboard & Stats */}
      <div className="main-panel">
        <Scoreboard score={score} inning={inning} />
        <CountDisplay count={count} />
        <ControlPanel actions={actions} />
      </div>
    </div>
  );
}

export default App;
