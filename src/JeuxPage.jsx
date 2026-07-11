import React, { useState } from 'react';
import { Share2, PlayCircle, Trophy, BarChart2, CheckCircle, ChevronLeft } from 'lucide-react';

export default function JeuxPage() {
  const [tab, setTab] = useState('wordle'); // wordle, quiz
  const [view, setView] = useState('home'); // home, result

  const keyboard = [
    ['A','Z','E','R','T','Y','U','I','O','P'],
    ['Q','S','D','F','G','H','J','K','L','M'],
    ['ENTER','W','X','C','V','B','N','DEL']
  ];

  if (view === 'result') {
    return (
      <div className="fade-up" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto 2rem' }}>
          <ChevronLeft size={16} /> Rejouer
        </button>
        
        <Trophy size={64} color="#f59e0b" style={{ margin: '0 auto 1.5rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Félicitations !</h2>
        <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', marginBottom: '2rem' }}>Vous avez trouvé le mot du jour en 4 essais.</p>
        
        <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Statistiques</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>12</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Joués</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>100%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Victoires</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>4</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Série Actuelle</div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-full" style={{ background: '#10b981', border: 'none', color: '#fff', fontSize: '1.1rem', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <Share2 size={20} /> Partager mon résultat (WhatsApp)
        </button>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Jeux</h2>
        <p style={{ color: 'var(--text-muted)' }}>Fidélisation quotidienne par des jeux culturels et linguistiques.</p>
      </div>

      <div className="jeux-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
        <button className={`jeux-tab ${tab === 'wordle' ? 'active' : ''}`} onClick={() => setTab('wordle')} style={{ padding: '0.5rem 1rem', background: tab === 'wordle' ? 'var(--primary)' : 'transparent', color: tab === 'wordle' ? '#000' : 'var(--text-main)', border: '1px solid var(--border)', borderRadius: '20px', fontWeight: 600 }}>Mot du Jour (Wolof)</button>
        <button className={`jeux-tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')} style={{ padding: '0.5rem 1rem', background: tab === 'quiz' ? 'var(--primary)' : 'transparent', color: tab === 'quiz' ? '#000' : 'var(--text-main)', border: '1px solid var(--border)', borderRadius: '20px', fontWeight: 600 }}>Quiz Actualité</button>
      </div>

      {tab === 'wordle' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="wordle-board" style={{ display: 'grid', gridTemplateRows: 'repeat(6, 1fr)', gap: '6px', marginBottom: '2rem' }}>
            {/* Example Board State */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
              <div className="wordle-tile absent" style={{ width: '50px', height: '50px', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', background: 'rgba(128,128,128,0.2)', color: 'var(--text-main)' }}>X</div>
              <div className="wordle-tile present" style={{ width: '50px', height: '50px', border: '2px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', background: '#f59e0b', color: '#000' }}>A</div>
              <div className="wordle-tile absent" style={{ width: '50px', height: '50px', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', background: 'rgba(128,128,128,0.2)', color: 'var(--text-main)' }}>L</div>
              <div className="wordle-tile correct" style={{ width: '50px', height: '50px', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', background: '#10b981', color: '#000' }}>I</div>
              <div className="wordle-tile absent" style={{ width: '50px', height: '50px', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', background: 'rgba(128,128,128,0.2)', color: 'var(--text-main)' }}>S</div>
            </div>
            {/* Empty Rows */}
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                {[1, 2, 3, 4, 5].map(j => (
                  <div key={j} className="wordle-tile" style={{ width: '50px', height: '50px', border: '2px solid var(--border)' }}></div>
                ))}
              </div>
            ))}
          </div>

          <div className="keyboard" style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {keyboard.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '6px' }}>
                {row.map(key => (
                  <button key={key} className={`key ${key.length > 1 ? 'wide' : ''}`} onClick={() => key === 'ENTER' && setView('result')} style={{ padding: '12px 10px', minWidth: key.length > 1 ? '60px' : '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-main)', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'quiz' && (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="quiz-card glass" style={{ padding: '2rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#8b5cf6', fontWeight: 'bold', textTransform: 'uppercase' }}>Question 1/5</span>
            <h3 style={{ fontSize: '1.4rem', margin: '1rem 0', color: 'var(--text-main)' }}>Quel est le taux de croissance économique prévu pour le Sénégal en 2026 selon la Banque Mondiale ?</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <button className="quiz-option" style={{ padding: '1rem', background: 'rgba(128,128,128,0.1)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'left', color: 'var(--text-main)', cursor: 'pointer' }}>A) 4.2%</button>
              <button className="quiz-option correct-answer" style={{ padding: '1rem', background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', borderRadius: '8px', textAlign: 'left', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                B) 8.3% <CheckCircle color="#10b981" size={20} />
              </button>
              <button className="quiz-option" style={{ padding: '1rem', background: 'rgba(128,128,128,0.1)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'left', color: 'var(--text-main)', cursor: 'pointer' }}>C) 12.1%</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
