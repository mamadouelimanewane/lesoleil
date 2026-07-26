import React, { useState } from 'react';
import { Play, Radio } from 'lucide-react';

const VIDEOS = [
  { id: 1, icon: '🎙️', title: 'Débat : quel avenir pour l\'agriculture sénégalaise ?', duration: '42:18', meta: 'Débat · 128K vues' },
  { id: 2, icon: '📽️', title: 'Documentaire : Saint-Louis, 130 ans d\'histoire', duration: '28:05', meta: 'Documentaire · 64K vues' },
  { id: 3, icon: '🗳️', title: 'Replay : Conférence de presse du Premier Ministre', duration: '55:32', meta: 'Replay · 210K vues' },
  { id: 4, icon: '🎓', title: 'Masterclass : l\'IA au service du journalisme africain', duration: '1:12:40', meta: 'Masterclass · 41K vues' },
  { id: 5, icon: '⚽', title: 'Résumé : Sénégal - Rwanda, éliminatoires', duration: '9:47', meta: 'Sport · 302K vues' },
  { id: 6, icon: '🌍', title: 'Grand Format : la diaspora sénégalaise en Europe', duration: '33:21', meta: 'Grand Format · 88K vues' },
];

export default function TVPage() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="fade-up">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ color: 'var(--text-main)' }}>Soleil TV+</h2>
          <p style={{ color: 'var(--text-muted)' }}>Web TV, documentaires et replays</p>
        </div>
        <div className="live-chip"><div className="live-dot" />LIVE</div>
      </div>

      <div className="tv-player">
        <div className="tv-player-overlay">
          <div className="play-circle" onClick={() => setCurrent(current ? null : VIDEOS[0])}>
            <Play size={28} fill="#000" style={{ marginLeft: '3px' }} />
          </div>
        </div>
        <div className="tv-bar">
          <Radio size={18} color="#ef4444" />
          <div>
            <div className="tv-player-title">{current ? current.title : 'Journal Télévisé du Soleil — Édition de 20h'}</div>
            <div className="tv-player-subtitle">{current ? current.meta : 'En direct depuis Dakar'}</div>
          </div>
        </div>
      </div>

      <h3 style={{ color: 'var(--text-main)', marginBottom: '1.2rem' }}>Documentaires & Replays</h3>
      <div className="video-grid">
        {VIDEOS.map(v => (
          <div key={v.id} className="video-card" onClick={() => setCurrent(v)}>
            <div className="video-thumb">
              {v.icon}
              <div className="video-play"><div className="video-play-btn"><Play size={18} fill="#000" style={{ marginLeft: '2px' }} /></div></div>
              <span className="video-duration">{v.duration}</span>
            </div>
            <div className="video-info">
              <h3 style={{ color: 'var(--text-main)' }}>{v.title}</h3>
              <div className="video-meta">{v.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
