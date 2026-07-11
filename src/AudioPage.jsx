import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Headphones, Mic } from 'lucide-react';

const PODCASTS = [
  { id: 1, emoji: '🌅', title: 'Le Journal Parlé du Soleil', desc: 'L\'actu du jour en 10 minutes', cat: 'Quotidien', dur: '10 min', episodes: 342 },
  { id: 2, emoji: '🔍', title: 'Soleil Enquêtes', desc: 'Reportages longs formats et investigations', cat: 'Bi-mensuel', dur: '35-50 min', episodes: 28 },
  { id: 3, emoji: '💬', title: 'Ndaje Soleil', desc: 'Le grand débat hebdomadaire de société', cat: 'Hebdomadaire', dur: '1h', episodes: 89 },
  { id: 4, emoji: '📚', title: 'Soleil Histoire', desc: 'Les grandes pages de l\'histoire du Sénégal racontées', cat: 'Mensuel', dur: '25 min', episodes: 15 },
];

const EPISODES = [
  { id: 1, podcast: 'Journal Parlé', title: 'Édition du 11 Juillet 2026', dur: '10:24', date: 'Aujourd\'hui' },
  { id: 2, podcast: 'Journal Parlé', title: 'Édition du 10 Juillet 2026', dur: '11:02', date: 'Hier' },
  { id: 3, podcast: 'Ndaje Soleil', title: 'Réforme de l\'éducation : pour ou contre ?', dur: '58:30', date: 'Il y a 2 jours' },
  { id: 4, podcast: 'Soleil Enquêtes', title: 'L\'or noir du Sénégal : qui en profite vraiment ?', dur: '42:15', date: 'Il y a 5 jours' },
  { id: 5, podcast: 'Soleil Histoire', title: 'Léopold Sédar Senghor : le poète-président', dur: '28:40', date: 'Il y a 1 semaine' },
];

export default function AudioPage() {
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState(35);

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Audio</h2>
        <p>Podcasts, journaux parlés et articles en audio — le Sénégal à écouter</p>
      </div>

      {/* TTS Banner */}
      <div className="tts-banner glass" style={{ padding: '1.5rem 2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '2.5rem' }}>🗣️</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Lecture Audio des Articles (Text-to-Speech)</h3>
          <p style={{ fontSize: '0.88rem' }}>Tous les articles du Soleil sont disponibles en audio, en Français et en Wolof. Activez la lecture vocale sur n'importe quel article.</p>
        </div>
        <button className="btn btn-primary"><Headphones size={18} /> Essayer</button>
      </div>

      {/* Player */}
      {playing && (
        <div className="audio-player glass" style={{ marginBottom: '2rem' }}>
          <div className="audio-player-art">{playing.podcast === 'Journal Parlé' ? '🌅' : '🔍'}</div>
          <div className="audio-player-info">
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{playing.title}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{playing.podcast}</div>
          </div>
          <div style={{ flex: 1, padding: '0 1.5rem' }}>
            <div className="audio-progress">
              <div className="audio-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.3rem' }}>
              <span className="audio-time">3:38</span>
              <span className="audio-time">{playing.dur}</span>
            </div>
          </div>
          <div className="audio-controls">
            <button className="btn btn-ghost btn-sm" style={{ padding: '0.4rem' }}><SkipBack size={18} /></button>
            <button className="btn btn-primary" style={{ padding: '0.6rem', borderRadius: '50%' }} onClick={() => setPlaying(null)}><Pause size={20} /></button>
            <button className="btn btn-ghost btn-sm" style={{ padding: '0.4rem' }}><SkipForward size={18} /></button>
          </div>
          <Volume2 size={18} style={{ color: 'var(--text-muted)' }} />
        </div>
      )}

      {/* Podcasts */}
      <div className="section-header"><h3>Nos Podcasts</h3></div>
      <div className="podcast-grid" style={{ marginBottom: '2.5rem' }}>
        {PODCASTS.map(p => (
          <div className="podcast-card glass" key={p.id}>
            <div className="podcast-cover">
              <span style={{ fontSize: '3rem' }}>{p.emoji}</span>
              <div style={{ position: 'absolute', bottom: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.6)', padding: '0.2rem 0.6rem', borderRadius: '8px', fontSize: '0.75rem' }}>
                {p.episodes} épisodes
              </div>
            </div>
            <div style={{ padding: '1.2rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.cat} • {p.dur}</span>
                <Mic size={14} style={{ color: 'var(--primary)' }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Episodes */}
      <div className="section-header"><h3>Derniers Épisodes</h3></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {EPISODES.map(ep => (
          <div key={ep.id} className="news-card" onClick={() => setPlaying(ep)} style={{ cursor: 'pointer' }}>
            <div className="news-thumb" style={{ width: '60px', minWidth: '60px', height: '60px', borderRadius: '12px', fontSize: '1.2rem' }}>
              <Play size={20} style={{ color: 'var(--primary)' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--primary)', marginBottom: '0.3rem' }}>{ep.podcast}</div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>{ep.title}</h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ep.date} • {ep.dur}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
