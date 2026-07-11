import React, { useState } from 'react';
import { Shield, Fingerprint, Lock, FileText, ChevronRight, ChevronLeft, Map, AlertTriangle } from 'lucide-react';

export default function ExecutifPage() {
  const [auth, setAuth] = useState(false);
  const [view, setView] = useState('home'); // home, report

  if (!auth) {
    return (
      <div className="fade-up" style={{ height: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ padding: '3rem', maxWidth: '400px', width: '100%', textAlign: 'center', borderRadius: '24px', border: '1px solid rgba(239,68,68,0.3)' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(239,68,68,0.1)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lock size={32} color="#ef4444" />
          </div>
          <h2 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Accès Restreint</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Portail B2G exclusif de la Présidence et des Ministères. Authentification biométrique requise.</p>
          <button className="btn btn-primary btn-full" onClick={() => setAuth(true)} style={{ background: '#ef4444', border: 'none', display: 'flex', gap: '0.5rem', justifyContent: 'center', color: '#fff' }}>
            <Fingerprint size={18} /> Simuler Connexion VIP
          </button>
        </div>
      </div>
    );
  }

  if (view === 'report') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour au Briefing
        </button>

        <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: '#ef4444' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>RAPPORT DE RENSEIGNEMENT #R-842</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Analyse Sécuritaire - Frontière Est</h2>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Coat_of_arms_of_Senegal.svg/200px-Coat_of_arms_of_Senegal.svg.png" alt="Sénégal" style={{ width: '60px', opacity: 0.8, filter: 'grayscale(1) invert(1)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ background: 'rgba(239,68,68,0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '2px solid #ef4444' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Niveau de Menace</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ef4444' }}>ÉLEVÉ (4/5)</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '2px solid var(--border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Source des Données</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>Satellite / OSINT</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '2px solid var(--border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Probabilité d'Incident</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>82% d'ici 72h</div>
            </div>
          </div>

          <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Synthèse des Événements</h3>
          <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-sub)' }}>
            Les algorithmes de surveillance du Soleil ont intercepté une hausse anormale de communications sur les réseaux sociaux frontaliers, corroborée par les images satellitaires. Un déploiement non autorisé de véhicules logistiques a été détecté dans le secteur K. 
            <br/><br/>
            <strong>Recommandation Stratégique :</strong> Renforcement immédiat des patrouilles et communication préventive de la présidence pour rassurer les investisseurs du secteur minier local.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(239,68,68,0.05)', borderRadius: '12px', border: '1px solid rgba(239,68,68,0.2)' }}>
            <AlertTriangle color="#ef4444" size={24} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: '#ef4444' }}>Action Requise</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>La validation présidentielle est requise pour le déploiement du communiqué de presse.</div>
            </div>
            <button className="btn btn-primary" style={{ background: '#ef4444', color: '#fff', border: 'none' }}>Valider le Brouillon</button>
          </div>
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
          <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Le Briefing Exécutif</h2>
          <p style={{ color: 'var(--text-muted)' }}>Synthèse IA de 6h00 pour la Présidence de la République</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit', lineHeight: 1, color: 'var(--text-main)' }}>12</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Juillet 2026</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #ef4444', cursor: 'pointer' }} onClick={() => setView('report')}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#ef4444' }}>🔴 Alerte Sécurité & Sous-région</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-sub)' }}>Tensions signalées aux frontières est. Le rapport des renseignements militaires de 4h00 confirme un déploiement inhabituel. Le Soleil recommande une communication de retenue. <span style={{ color: 'var(--primary)', fontWeight: 600 }}>[Lire l'analyse complète]</span></p>
        </div>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #10b981' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#10b981' }}>🟢 Économie & Investissements</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-sub)' }}>La Banque Mondiale approuve le décaissement de la tranche 2 du plan de résilience (150 Mds FCFA). Impact immédiat attendu sur les obligations du trésor ce matin.</p>
        </div>
        <div className="glass" style={{ padding: '2rem', borderTop: '4px solid #f59e0b' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#f59e0b' }}>🟡 Climat Social</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-sub)' }}>Les syndicats du transport prévoient un préavis de grève d'ici 48h. Les algorithmes d'analyse du Soleil détectent une hausse de 300% des mentions sur les réseaux sociaux.</p>
        </div>
      </div>

      <div className="glass" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>Dossiers Stratégiques Suivis</h3>
          <button className="btn btn-ghost btn-sm">Gérer les accès Ministres</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Exploitation Gazière GTA', 'Réforme Foncière 2026', 'Sommet UA - Préparation'].map((d, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(128,128,128,0.1)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FileText size={20} color="var(--primary)" />
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{d}</span>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
