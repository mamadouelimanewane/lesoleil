import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Mic, FileAudio, ChevronLeft } from 'lucide-react';

export default function AudioPage() {
  const [playing, setPlaying] = useState(false);
  const [view, setView] = useState('home'); // home, player

  if (view === 'player') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour aux Podcasts
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '250px', height: '250px', background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', borderRadius: '24px', marginBottom: '2rem', boxShadow: '0 20px 40px rgba(139,92,246,0.3)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>🎙️</div>
            </div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Les Grands Débats</h2>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', marginBottom: '2rem' }}>Épisode 42 : L'avenir de l'agriculture face aux changements climatiques.</p>
            
            <div style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{ width: '100%', height: '6px', background: 'rgba(128,128,128,0.2)', borderRadius: '3px', marginBottom: '0.5rem', cursor: 'pointer' }}>
                <div style={{ width: '35%', height: '100%', background: '#8b5cf6', borderRadius: '3px', position: 'relative' }}>
                  <div style={{ width: '12px', height: '12px', background: '#fff', borderRadius: '50%', position: 'absolute', right: '-6px', top: '-3px' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>15:24</span>
                <span>45:00</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <SkipBack size={32} color="var(--text-main)" style={{ cursor: 'pointer', opacity: 0.8 }} />
              <button onClick={() => setPlaying(!playing)} style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#8b5cf6', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(139,92,246,0.4)' }}>
                {playing ? <Pause size={32} color="#fff" /> : <Play size={32} color="#fff" style={{ marginLeft: '4px' }} />}
              </button>
              <SkipForward size={32} color="var(--text-main)" style={{ cursor: 'pointer', opacity: 0.8 }} />
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileAudio size={20} color="#8b5cf6" /> Transcription Interactive
            </h3>
            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>...précédemment, nous parlions des semences améliorées.</p>
              <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 600, borderLeft: '3px solid #8b5cf6', paddingLeft: '1rem' }}>
                <span style={{ color: '#8b5cf6', fontSize: '0.9rem', display: 'block', marginBottom: '0.3rem' }}>15:24 - Ousmane Ndiaye (Expert Agronome)</span>
                La question de la salinisation des terres dans les Niayes est critique. Si nous ne mettons pas en place des digues de rétention d'ici 2028, nous risquons de perdre 30% des surfaces maraîchères de la région.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'block', marginBottom: '0.3rem' }}>15:40 - Journaliste</span>
                Mais quelles sont les solutions immédiates pour les producteurs locaux qui font face à ce problème aujourd'hui ?
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'block', marginBottom: '0.3rem' }}>15:45 - Ousmane Ndiaye</span>
                L'adaptation passe d'abord par la sélection de variétés résistantes au sel, développées en partenariat avec l'ISRA...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Audio</h2>
        <p style={{ color: 'var(--text-muted)' }}>Le journal qui s'écoute. Podcasts et Text-to-Speech natif.</p>
      </div>

      <div className="tts-banner glass" style={{ padding: '2rem', background: 'linear-gradient(90deg, rgba(139,92,246,0.1), rgba(0,0,0,0))', borderLeft: '4px solid #8b5cf6', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Lecture Vocale (IA)</h3>
          <p style={{ color: 'var(--text-sub)' }}>Tous les articles du Soleil sont désormais disponibles en audio, lus par notre voix de synthèse neutre ou en Wolof.</p>
        </div>
        <button className="btn btn-primary" style={{ background: '#8b5cf6', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Play size={18} /> Essayer sur un article
        </button>
      </div>

      <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Podcasts Originaux</h3>
      <div className="podcast-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        
        <div className="podcast-card glass" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer' }} onClick={() => setView('player')}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
            🎙️
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>Les Grands Débats</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Épisode 42 • 45 min</p>
          </div>
        </div>

        <div className="podcast-card glass" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #10b981, #3b82f6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>
            🌍
          </div>
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>Le Monde en Face</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Épisode 18 • 30 min</p>
          </div>
        </div>

      </div>
    </div>
  );
}
