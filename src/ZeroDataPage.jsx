import React, { useState } from 'react';
import { Wifi, Smartphone, Battery, TrendingUp, Globe, Check, ChevronLeft, Activity } from 'lucide-react';

export default function ZeroDataPage() {
  const [view, setView] = useState('home'); // home, dashboard

  if (view === 'dashboard') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour à l'explication
        </button>

        <div className="glass" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Tableau de bord Opérateurs</h2>
              <p style={{ color: 'var(--text-muted)' }}>Trafic Zéro Rating (Sonatel & Free) - Temps réel</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.1)', padding: '0.5rem 1rem', borderRadius: '100px', color: '#10b981', fontWeight: 600 }}>
              <Activity size={18} /> API Sync Active
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ background: 'rgba(128,128,128,0.05)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Volume Données Offertes</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'Outfit' }}>4.2 TB</div>
              <div style={{ fontSize: '0.85rem', color: '#10b981', marginTop: '0.5rem' }}>+12% depuis hier</div>
            </div>
            <div style={{ background: 'rgba(128,128,128,0.05)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Utilisateurs Actifs (Sans Forfait)</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'Outfit' }}>142k</div>
              <div style={{ fontSize: '0.85rem', color: '#10b981', marginTop: '0.5rem' }}>+5% depuis hier</div>
            </div>
            <div style={{ background: 'rgba(128,128,128,0.05)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Valeur Publicitaire Générée</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'Outfit' }}>12.5M <span style={{ fontSize: '1.2rem' }}>CFA</span></div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Aujourd'hui</div>
            </div>
          </div>

          <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Flux réseau en direct</h3>
          <div style={{ height: '200px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', padding: '1rem', gap: '8px', overflow: 'hidden' }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #f59e0b, #fbbf24)`, height: `${Math.max(10, Math.random() * 100)}%`, opacity: 0.8, borderRadius: '4px 4px 0 0', animation: 'fadeUp 0.3s ease' }}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Partenariat Zéro Data</h2>
        <p style={{ color: 'var(--text-muted)' }}>L'information gratuite pour tous les Sénégalais, même sans crédit internet.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <div className="glass" style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(234,179,8,0.1), rgba(249,115,22,0.1))', border: '1px solid rgba(234,179,8,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f59e0b' }}>Le Soleil x Opérateurs Telecom</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                Grâce au partenariat <strong>Zéro Rating</strong>, la navigation sur l'application Le Soleil ne décompte aucun mégaoctets du forfait internet de l'utilisateur (Orange, Free, Expresso). L'accès à l'information nationale devient véritablement universel.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-sub)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Objectif : 5 millions de téléchargements en 2026.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Avantage Concurrentiel : Aucun autre média ne propose cela.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><Check size={20} color="#10b981" /> <span>Financement : Les annonceurs paient pour l'audience massive.</span></li>
              </ul>
              <button className="btn btn-primary" onClick={() => setView('dashboard')} style={{ marginTop: '2rem', background: '#f59e0b', border: 'none', color: '#000', fontWeight: 600 }}>Voir le Dashboard Temps Réel</button>
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
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Architecture PWA Légère</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>L'application pèse moins de 2 Mo et fonctionne même sur des réseaux 2G ou instables en zone rurale.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <Battery size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Mode Hors-Ligne</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>Les articles sont mis en cache. Vous pouvez lire le journal dans les transports sans aucune connexion active.</p>
          </div>
          <div className="glass" style={{ padding: '2rem' }}>
            <TrendingUp size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Monétisation Massive</h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>L'accès gratuit attire tout le pays. Les espaces publicitaires premium (Orange, Sonatel, Banques) explosent en valeur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
