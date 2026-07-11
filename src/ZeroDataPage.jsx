import React from 'react';
import { Wifi, Smartphone, Battery, TrendingUp, Globe, Check } from 'lucide-react';

export default function ZeroDataPage() {
  return (
    <div className="fade-up">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>Partenariat Zéro Data</h2>
        <p>L'information gratuite pour tous les Sénégalais, même sans crédit internet.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div className="glass" style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(234,179,8,0.1), rgba(249,115,22,0.1))', border: '1px solid rgba(234,179,8,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f59e0b' }}>Le Soleil x Opérateurs Telecom</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>
                Grâce au partenariat <strong>Zéro Rating</strong>, la navigation sur l'application Le Soleil ne décompte aucun mégaoctets du forfait internet de l'utilisateur (Orange, Free, Expresso). L'accès à l'information nationale devient véritablement universel.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Objectif : 5 millions de téléchargements en 2026.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Avantage Concurrentiel : Aucun autre média ne propose cela.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Financement : Les annonceurs paient pour l'audience massive.</span></li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '200px', height: '200px' }}>
              <div style={{ position: 'absolute', inset: 0, border: '2px dashed rgba(245,158,11,0.3)', borderRadius: '50%', animation: 'spin 10s linear infinite' }}></div>
              <div style={{ position: 'absolute', inset: '20px', border: '2px solid rgba(245,158,11,0.2)', borderRadius: '50%' }}></div>
              <Wifi size={64} color="#f59e0b" style={{ animation: 'pulse-dot 2s infinite' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem' }}>
            <Smartphone size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Architecture PWA Légère</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>L'application pèse moins de 2 Mo et fonctionne même sur des réseaux 2G ou instables en zone rurale.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <Battery size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mode Hors-Ligne</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>Les articles sont mis en cache. Vous pouvez lire le journal dans les transports sans aucune connexion active.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <TrendingUp size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Monétisation Massive</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>L'accès gratuit attire tout le pays. Les espaces publicitaires premium (Orange, Sonatel, Banques) explosent en valeur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
