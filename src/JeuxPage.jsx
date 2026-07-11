import React, { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Delete, Trophy } from 'lucide-react';

const WOLOF_WORDS = ['TERANGA', 'JAMM', 'NDANK', 'BAAT', 'SUÑU', 'JËMM', 'NAAN', 'LEKK', 'TOGG', 'YÀLLA'];
const WORD_OF_DAY = WOLOF_WORDS[new Date().getDate() % WOLOF_WORDS.length];
const WORD_LENGTH = WORD_OF_DAY.length;
const MAX_GUESSES = 6;

const QUIZ_QUESTIONS = [
  { q: 'En quelle année le journal Le Soleil a-t-il été fondé ?', options: ['1960', '1965', '1970', '1975'], answer: 2 },
  { q: 'Quelle est la capitale du Sénégal ?', options: ['Saint-Louis', 'Thiès', 'Dakar', 'Ziguinchor'], answer: 2 },
  { q: 'Quel est le surnom de l\'équipe nationale de football ?', options: ['Les Aigles', 'Les Lions de la Téranga', 'Les Éléphants', 'Les Guépards'], answer: 1 },
  { q: 'Quel fleuve forme la frontière nord du Sénégal ?', options: ['Le Niger', 'Le Sénégal', 'La Gambie', 'La Casamance'], answer: 1 },
  { q: 'Que signifie "Téranga" en wolof ?', options: ['Courage', 'Fierté', 'Hospitalité', 'Force'], answer: 2 },
];

const KEYBOARD_ROWS = [
  ['A','Z','E','R','T','Y','U','I','O','P'],
  ['Q','S','D','F','G','H','J','K','L','M'],
  ['ENTER','W','X','C','V','B','N','⌫'],
];

function WordleGame() {
  const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill(''));
  const [currentGuess, setCurrentGuess] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [revealedRows, setRevealedRows] = useState([]);

  const submitGuess = useCallback(() => {
    if (currentInput.length !== WORD_LENGTH || gameOver) return;
    
    const newGuesses = [...guesses];
    newGuesses[currentGuess] = currentInput;
    setGuesses(newGuesses);
    setRevealedRows(prev => [...prev, currentGuess]);

    const newUsedKeys = { ...usedKeys };
    for (let i = 0; i < currentInput.length; i++) {
      const letter = currentInput[i];
      if (WORD_OF_DAY[i] === letter) newUsedKeys[letter] = 'correct';
      else if (WORD_OF_DAY.includes(letter) && newUsedKeys[letter] !== 'correct') newUsedKeys[letter] = 'present';
      else if (!WORD_OF_DAY.includes(letter)) newUsedKeys[letter] = 'absent';
    }
    setUsedKeys(newUsedKeys);

    if (currentInput === WORD_OF_DAY) { setGameOver(true); setWon(true); }
    else if (currentGuess >= MAX_GUESSES - 1) { setGameOver(true); }
    else { setCurrentGuess(currentGuess + 1); }
    setCurrentInput('');
  }, [currentInput, currentGuess, gameOver, guesses, usedKeys]);

  const handleKey = useCallback((key) => {
    if (gameOver) return;
    if (key === 'ENTER') { submitGuess(); return; }
    if (key === '⌫' || key === 'BACKSPACE') { setCurrentInput(prev => prev.slice(0, -1)); return; }
    if (currentInput.length < WORD_LENGTH && /^[A-ZÀ-Ÿ]$/.test(key)) {
      setCurrentInput(prev => prev + key);
    }
  }, [currentInput, gameOver, submitGuess]);

  useEffect(() => {
    const handler = (e) => handleKey(e.key.toUpperCase());
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleKey]);

  const getTileClass = (rowIdx, colIdx) => {
    if (!revealedRows.includes(rowIdx)) return guesses[rowIdx]?.[colIdx] ? 'filled' : '';
    const letter = guesses[rowIdx][colIdx];
    if (!letter) return '';
    if (WORD_OF_DAY[colIdx] === letter) return 'correct reveal';
    if (WORD_OF_DAY.includes(letter)) return 'present reveal';
    return 'absent reveal';
  };

  const reset = () => {
    setGuesses(Array(MAX_GUESSES).fill(''));
    setCurrentGuess(0); setCurrentInput(''); setGameOver(false);
    setWon(false); setUsedKeys({}); setRevealedRows([]);
  };

  return (
    <div>
      <div className="wordle-board">
        {Array(MAX_GUESSES).fill(null).map((_, rowIdx) => (
          <div key={rowIdx} style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            {Array(WORD_LENGTH).fill(null).map((_, colIdx) => {
              const letter = rowIdx === currentGuess && !revealedRows.includes(rowIdx)
                ? currentInput[colIdx] || ''
                : guesses[rowIdx]?.[colIdx] || '';
              return (
                <div key={colIdx} className={`wordle-tile ${getTileClass(rowIdx, colIdx)}`}
                  style={{ animationDelay: `${colIdx * 0.15}s` }}>
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {gameOver && (
        <div style={{ textAlign: 'center', margin: '1.5rem 0', animation: 'fadeUp 0.4s ease' }}>
          {won
            ? <div style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 700 }}><Trophy size={24} style={{verticalAlign:'middle'}}/> Bravo ! Vous avez trouvé "{WORD_OF_DAY}" !</div>
            : <div style={{ color: '#f87171' }}>Le mot était : <strong>{WORD_OF_DAY}</strong></div>}
          <button className="btn btn-primary" onClick={reset} style={{ marginTop: '1rem' }}><RotateCcw size={16} /> Rejouer</button>
        </div>
      )}

      <div className="keyboard">
        {KEYBOARD_ROWS.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            {row.map(k => (
              <button key={k}
                className={`key ${k === 'ENTER' || k === '⌫' ? 'wide' : ''} ${usedKeys[k] || ''}`}
                onClick={() => handleKey(k)}>
                {k === '⌫' ? <Delete size={18}/> : k}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizGame() {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUIZ_QUESTIONS[qIdx];
  
  const select = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) setScore(s => s + 1);
    setTimeout(() => {
      if (qIdx < QUIZ_QUESTIONS.length - 1) { setQIdx(i => i + 1); setSelected(null); }
      else setFinished(true);
    }, 1200);
  };

  const reset = () => { setQIdx(0); setSelected(null); setScore(0); setFinished(false); };

  if (finished) return (
    <div style={{ textAlign: 'center', padding: '2rem', animation: 'fadeUp 0.4s ease' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
      <h3>Score : {score} / {QUIZ_QUESTIONS.length}</h3>
      <p style={{ margin: '1rem 0' }}>{score === QUIZ_QUESTIONS.length ? 'Parfait !' : score >= 3 ? 'Bien joué !' : 'Réessayez demain !'}</p>
      <button className="btn btn-primary" onClick={reset}><RotateCcw size={16}/> Recommencer</button>
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <span>Question {qIdx + 1}/{QUIZ_QUESTIONS.length}</span>
        <span>Score : {score}</span>
      </div>
      <div className="quiz-card glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>{q.q}</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {q.options.map((opt, i) => (
          <button key={i}
            className={`quiz-option ${selected === i ? (i === q.answer ? 'correct-answer' : 'wrong-answer') : ''} ${selected !== null && i === q.answer ? 'correct-answer' : ''}`}
            onClick={() => select(i)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function JeuxPage() {
  const [activeGame, setActiveGame] = useState('wordle');
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Jeux</h2>
        <p>Jouez chaque jour et partagez vos résultats sur WhatsApp !</p>
      </div>
      <div className="jeux-tabs">
        <button className={`jeux-tab ${activeGame === 'wordle' ? 'active' : ''}`} onClick={() => setActiveGame('wordle')}>🇸🇳 Baat Bu Toj (Wordle Wolof)</button>
        <button className={`jeux-tab ${activeGame === 'quiz' ? 'active' : ''}`} onClick={() => setActiveGame('quiz')}>🎯 Kaay Xam (Quiz du Jour)</button>
      </div>
      <div className="glass" style={{ padding: '2rem', marginTop: '1.5rem' }}>
        {activeGame === 'wordle' ? <WordleGame /> : <QuizGame />}
      </div>
      <div className="game-stats glass" style={{ marginTop: '1.5rem', padding: '1.5rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>7</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Série en cours</div></div>
        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>42</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Parties jouées</div></div>
        <div style={{ textAlign: 'center' }}><div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>85%</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Taux de victoire</div></div>
      </div>
    </div>
  );
}
