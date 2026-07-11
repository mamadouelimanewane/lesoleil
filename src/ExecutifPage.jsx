import React, { useState } from 'react';
import { Search, Database, Fingerprint, Lock, Shield, FileText, ChevronRight } from 'lucide-react';

export default function ExecutifPage() {
  const [auth, setAuth] = useState(false);

  if (!auth) {
    return (
      <div className="fade-up" style={{ height: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center', borderRadius: '24px' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(239,68,68,0.1)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lock size={32} color="#ef4444" />
          </div>
          <h2 style={{ marginBottom: '0.5rem' }}>Accès Restreint</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Portail B2G exclusif de la Présidence et des Ministères. Authentification biométrique requise.</p>
          <button className="btn btn-primary btn-full" onClick={() => setAuth(true)} style={{ background: '#ef4444', border: 'none', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <Fingerprint size={18} /> Simuler Connexion VIP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up" style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <Shield size={14} /> CONFIDENTIEL DÉFENSE — NIVEAU 1
          </div>
          <h2 style={{ fontSize: '2rem' }}>Le Briefing Exécutif</h2>
          <p style={{ color: 'var(--text-muted)' }}>Synthèse IA de 6h00 pour la Présidence de la République</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit', lineHeight: 1 }}>12</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Juillet 2026</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #ef4444' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#ef4444' }}>🔴 Alerte Sécurité & Sous-région</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>Tensions signalées aux frontières est. Le rapport des renseignements militaires de 4h00 confirme un déploiement inhabituel. Le Soleil recommande une communication de retenue. <a href="#" style={{ color: 'var(--primary)' }}>[Lire l'analyse complète]</a></p>
        </div>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #10b981' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#10b981' }}>🟢 Économie & Investissements</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>La Banque Mondiale approuve le décaissement de la tranche 2 du plan de résilience (150 Mds FCFA). Impact immédiat attendu sur les obligations du trésor ce matin. <a href="#" style={{ color: 'var(--primary)' }}>[Données marché]</a></p>
        </div>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #f59e0b' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#f59e0b' }}>🟡 Climat Social</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>Les syndicats du transport prévoient un préavis de grève d'ici 48h. Les algorithmes d'analyse du Soleil détectent une hausse de 300% des mentions sur les réseaux sociaux. <a href="#" style={{ color: 'var(--primary)' }}>[Rapport social]</a></p>
        </div>
      </div>

      <div className="glass" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.3rem' }}>Dossiers Stratégiques Suivis</h3>
          <button className="btn btn-ghost btn-sm">Gérer les accès Ministres</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Exploitation Gazière GTA', 'Réforme Foncière 2026', 'Sommet UA - Préparation'].map((d, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FileText size={20} color="var(--primary)" />
                <span style={{ fontWeight: 600 }}>{d}</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
