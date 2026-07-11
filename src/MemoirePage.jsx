import React, { useState } from 'react';
import { Search, History, BookOpen, Download, HardDrive, Cpu, Scan } from 'lucide-react';

export default function MemoirePage() {
  const [scanning, setScanning] = useState(false);

  return (
    <div className="fade-up">
      <div style={{ background: 'linear-gradient(135deg, #78350f, #451a03)', padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden', marginBottom: '2rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, color: '#fcd34d', marginBottom: '1rem', border: '1px solid rgba(252,211,77,0.3)' }}>
            <History size={14} /> Projet d'État : 1970 - 2026
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Mémoire de la Nation</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '2rem' }}>
            Numérisation intégrale de 54 ans d'archives physiques du Soleil par Intelligence Artificielle (OCR). Préservez l'histoire du Sénégal pour les générations futures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ background: '#f59e0b', color: '#000', border: 'none' }}><Download size={18} /> Télécharger le dossier UNESCO</button>
            <button className="btn btn-ghost" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }} onClick={() => setScanning(!scanning)}><Scan size={18} /> {scanning ? 'Arrêter Scan IA' : 'Démarrer Scan IA'}</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '50px', height: '50px', background: 'rgba(245,158,11,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>2 450 000</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pages à numériser</div>
          </div>
        </div>
        <div className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '50px', height: '50px', background: 'rgba(16,185,129,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
            <Cpu size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>99.8%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Précision IA (OCR Wolof/FR)</div>
          </div>
        </div>
        <div className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '50px', height: '50px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
            <HardDrive size={24} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>12.5 To</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Volume Data Sécurisé</div>
          </div>
        </div>
      </div>

      {scanning && (
        <div className="glass" style={{ padding: '2rem', textAlign: 'center', animation: 'fadeUp 0.3s ease' }}>
          <Scan size={48} color="var(--primary)" style={{ margin: '0 auto 1rem', animation: 'pulse-dot 2s infinite' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Analyse OCR en cours...</h3>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.85rem' }}>Traitement du volume: 1981_avril_edition_speciale.pdf (Page 4/12)</p>
          <div style={{ width: '100%', maxWidth: '400px', height: '4px', background: 'rgba(255,255,255,0.1)', margin: '1.5rem auto 0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '35%', height: '100%', background: 'var(--primary)', animation: 'scan-line 2s infinite linear' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
