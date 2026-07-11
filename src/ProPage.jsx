import React from 'react';
import { Database, FileText, Bell, TrendingUp, Shield, BarChart3, Building2 } from 'lucide-react';

const REPORTS = [
  { title: 'Secteur Pétrolier & Gazier — T2 2026', tag: 'Nouveau', tagColor: '#10b981', pages: 42 },
  { title: 'Immobilier & BTP au Sénégal — Bilan Semestriel', tag: null, pages: 38 },
  { title: 'Agriculture : Campagne Arachidière 2026', tag: null, pages: 27 },
  { title: 'Télécoms & Numérique — Panorama Annuel', tag: 'Nouveau', tagColor: '#10b981', pages: 55 },
  { title: 'Secteur Bancaire : Classement & Analyses', tag: null, pages: 33 },
];

const MARCHES = [
  { ref: 'MP-2026-4521', org: 'Ministère des Transports', objet: 'Construction de 45km de route Tambacounda-Kédougou', montant: '12,4 Mds FCFA', deadline: '25 Juil 2026', status: 'Ouvert' },
  { ref: 'MP-2026-4519', org: 'SENELEC', objet: 'Fourniture de 200 transformateurs électriques', montant: '3,8 Mds FCFA', deadline: '18 Juil 2026', status: 'Ouvert' },
  { ref: 'MP-2026-4515', org: 'Mairie de Dakar', objet: 'Aménagement paysager du Plateau', montant: '890 M FCFA', deadline: '30 Juil 2026', status: 'Ouvert' },
  { ref: 'MP-2026-4510', org: 'Min. Santé', objet: 'Équipement de 15 postes de santé ruraux', montant: '1,2 Mds FCFA', deadline: '12 Juil 2026', status: 'Clôturé' },
];

export default function ProPage() {
  return (
    <div className="fade-up">
      {/* Pro Hero */}
      <div className="pro-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Building2 size={14} /> Solutions Professionnelles
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Soleil Pro — Données &amp; Intelligence Économique</h1>
          <p style={{ fontSize: '1.05rem', maxWidth: '550px' }}>La référence pour les données économiques sénégalaises. Marchés publics, rapports sectoriels, alertes réglementaires.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="pro-stats-row">
        {[
          { icon: <FileText size={22}/>, num: '1 250+', label: 'Marchés publics indexés' },
          { icon: <BarChart3 size={22}/>, num: '45', label: 'Rapports sectoriels' },
          { icon: <Bell size={22}/>, num: '200+', label: 'Alertes / mois' },
          { icon: <Building2 size={22}/>, num: '380', label: 'Entreprises abonnées' },
        ].map((s, i) => (
          <div key={i} className="pro-stat-card glass">
            <div style={{ color: 'var(--accent)' }}>{s.icon}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--primary)' }}>{s.num}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Marchés Publics */}
      <div className="section-header" style={{ marginTop: '2rem' }}>
        <h3><Database size={20} style={{ verticalAlign: 'middle' }} /> Marchés Publics Récents</h3>
        <button className="btn btn-ghost btn-sm">Voir tout</button>
      </div>
      <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Réf.</th>
              <th>Organisme</th>
              <th>Objet</th>
              <th>Montant</th>
              <th>Date limite</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {MARCHES.map((m, i) => (
              <tr key={i}>
                <td style={{ fontFamily: 'monospace', fontSize: '0.82rem' }}>{m.ref}</td>
                <td style={{ fontWeight: 600 }}>{m.org}</td>
                <td>{m.objet}</td>
                <td style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>{m.montant}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{m.deadline}</td>
                <td><span className={`alert-tag ${m.status === 'Ouvert' ? '' : 'closed'}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rapports */}
      <div className="section-header" style={{ marginTop: '2.5rem' }}>
        <h3><TrendingUp size={20} style={{ verticalAlign: 'middle' }} /> Rapports Sectoriels</h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {REPORTS.map((r, i) => (
          <div key={i} className="report-card glass">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FileText size={28} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>{r.title}</h4>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{r.pages} pages • PDF</div>
              </div>
              {r.tag && <span className="alert-tag" style={{ background: `${r.tagColor}22`, color: r.tagColor, marginLeft: 'auto' }}>{r.tag}</span>}
            </div>
            <button className="btn btn-ghost btn-sm btn-full" style={{ marginTop: '1rem' }}>Télécharger</button>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="section-header" style={{ marginTop: '2.5rem' }}>
        <h3><Shield size={20} style={{ verticalAlign: 'middle' }} /> Offres B2B</h3>
      </div>
      <div className="pro-tier-grid">
        {[
          { name: 'Starter', price: '50 000', period: 'FCFA/mois', features: ['Accès marchés publics', '5 rapports/mois', 'Alertes email', 'Support standard'] },
          { name: 'Business', price: '200 000', period: 'FCFA/mois', featured: true, features: ['Tout Starter +', 'Rapports illimités', 'API d\'accès données', 'Alertes personnalisées', '5 utilisateurs inclus', 'Support prioritaire'] },
          { name: 'Enterprise', price: 'Sur devis', period: '', features: ['Tout Business +', 'Utilisateurs illimités', 'Données sur mesure', 'Account manager dédié', 'Formation incluse'] },
        ].map((t, i) => (
          <div key={i} className={`pro-tier-card glass ${t.featured ? 'featured' : ''}`}>
            {t.featured && <div className="badge-featured">⭐ Populaire</div>}
            <h3>{t.name}</h3>
            <div style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: '1rem 0' }}>
              {t.price} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-muted)' }}>{t.period}</span>
            </div>
            <ul className="pricing-features">
              {t.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'} btn-full`} style={{ marginTop: '1.5rem' }}>
              {t.price === 'Sur devis' ? 'Nous contacter' : 'Commencer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
