import React, { useState } from 'react';
import { Briefcase, BarChart, Download, FileText, Lock, ChevronLeft, TrendingUp } from 'lucide-react';

export default function ProPage() {
  const [view, setView] = useState('home'); // home, dashboard

  if (view === 'dashboard') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour à l'espace B2B
        </button>

        <div className="glass" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Secteur BTP & Infrastructures</h2>
              <p style={{ color: 'var(--text-muted)' }}>Analyse de marché T3 2026 - Marchés Publics Sénégal</p>
            </div>
            <button className="btn btn-primary" style={{ background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Download size={16} /> Exporter Rapport PDF
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Volume Global</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>450 Mds <span style={{ fontSize: '1rem' }}>CFA</span></div>
            </div>
            <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Croissance Annuelle</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={24} /> +12.4%</div>
            </div>
            <div style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', padding: '1.5rem', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Appels d'Offres Actifs</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>84</div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Évolution des investissements par région (Top 5)</h3>
            {/* Fake Chart representation */}
            <div style={{ display: 'flex', alignItems: 'flex-end', height: '250px', gap: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)', position: 'relative' }}>
              <div style={{ width: '100%', position: 'absolute', bottom: '25%', borderTop: '1px dashed rgba(128,128,128,0.3)' }}></div>
              <div style={{ width: '100%', position: 'absolute', bottom: '50%', borderTop: '1px dashed rgba(128,128,128,0.3)' }}></div>
              <div style={{ width: '100%', position: 'absolute', bottom: '75%', borderTop: '1px dashed rgba(128,128,128,0.3)' }}></div>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
                <div style={{ width: '60px', height: '80%', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '4px 4px 0 0' }}></div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Dakar</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
                <div style={{ width: '60px', height: '60%', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '4px 4px 0 0', opacity: 0.8 }}></div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Thiès</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
                <div style={{ width: '60px', height: '45%', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '4px 4px 0 0', opacity: 0.6 }}></div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Saint-Louis</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
                <div style={{ width: '60px', height: '30%', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '4px 4px 0 0', opacity: 0.4 }}></div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Kaolack</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 1 }}>
                <div style={{ width: '60px', height: '20%', background: 'linear-gradient(to top, #3b82f6, #60a5fa)', borderRadius: '4px 4px 0 0', opacity: 0.2 }}></div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>Ziguinchor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="pro-hero glass" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(59,130,246,0.2)', marginBottom: '3rem', textAlign: 'center' }}>
        <Briefcase size={48} color="#3b82f6" style={{ margin: '0 auto 1rem' }} />
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Le Soleil Pro</h2>
        <p style={{ color: 'var(--text-sub)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          La plateforme d'intelligence économique pour les entreprises. Accédez aux données des marchés publics, analyses sectorielles et annonces légales.
        </p>
        <button className="btn btn-primary" style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>S'abonner à partir de 50 000 CFA/mois</button>
      </div>

      <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Rapports Sectoriels (Exclusivité Pro)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="report-card glass" style={{ padding: '1.5rem', cursor: 'pointer', transition: '0.2s' }} onClick={() => setView('dashboard')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(59,130,246,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart color="#3b82f6" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>BTP & Infrastructures</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mise à jour: Aujourd'hui</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--primary)' }}>
            <span>Voir le tableau de bord</span>
            <ChevronRight size={16} />
          </div>
        </div>

        <div className="report-card glass" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart color="#10b981" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>Énergie & Hydrocarbures</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mise à jour: Hier</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#10b981' }}>
            <span>Accès Premium</span>
            <Lock size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
