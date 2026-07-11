import React, { useState } from 'react';
import { Mail, Check, Users, TrendingUp, Globe, DollarSign } from 'lucide-react';

const NEWSLETTERS = [
  {
    id: 'morning', emoji: '☀️', title: 'Le Briefing du Matin',
    desc: 'L\'essentiel de l\'actualité sénégalaise en 5 points, chaque matin à 7h.',
    freq: 'Quotidien', free: true, subscribers: '24 300',
    preview: ['Conseil des ministres : les 5 décisions clés', 'Économie : le FCFA face aux pressions', 'Sport : Lions — le match de ce soir', 'Météo : fortes pluies attendues sur Dakar', 'Culture : Festival de Jazz à Saint-Louis'],
  },
  {
    id: 'eco', emoji: '📈', title: 'Soleil Éco',
    desc: 'Analyse approfondie de l\'économie sénégalaise. Marchés, entreprises, tendances.',
    freq: 'Hebdomadaire', free: false, price: '2 000 FCFA/mois', subscribers: '8 700',
    preview: ['Pétrole : les chiffres du trimestre', 'Banques : qui domine le marché ?', 'Start-up : 5 pépites à suivre', 'Immobilier : analyse du boom de Diamniadio'],
  },
  {
    id: 'diaspora', emoji: '🌍', title: 'Soleil Diaspora',
    desc: 'L\'actu du pays pour ceux qui vivent loin. Taux de change, investissements, retour.',
    freq: 'Hebdomadaire', free: false, price: '3 000 FCFA/mois', subscribers: '15 200',
    preview: ['Taux EUR/XOF : 655,96 (stable)', 'Investir au Sénégal : guide immobilier 2026', 'Diaspora : nouvelles mesures fiscales', 'Événements : la communauté à Paris ce week-end'],
  },
  {
    id: 'sport', emoji: '⚽', title: 'Soleil Sport',
    desc: 'Résultats, analyses et mercato de la Ligue 1 sénégalaise et des Lions.',
    freq: 'Quotidien', free: true, subscribers: '31 500',
    preview: ['Ligue 1 : résultats de la 12e journée', 'Mercato : un Lion vers la Premier League ?', 'CAN 2027 : le calendrier dévoilé', 'Lutte : Modou Lô prépare son retour'],
  },
];

export default function BriefingPage() {
  const [subscribed, setSubscribed] = useState({});
  const [email, setEmail] = useState('');

  const handleSubscribe = (id) => {
    if (!email) return;
    setSubscribed(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Briefing</h2>
        <p>Newsletters premium — l'info directement dans votre boîte mail ou WhatsApp</p>
      </div>

      {/* Email input global */}
      <div className="glass" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Mail size={20} style={{ color: 'var(--primary)' }} />
        <input
          className="form-input"
          type="email"
          placeholder="Votre adresse email ou numéro WhatsApp"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ flex: 1, minWidth: '200px' }}
        />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Entrez votre email pour vous abonner aux newsletters ci-dessous</span>
      </div>

      <div className="newsletter-grid">
        {NEWSLETTERS.map(nl => (
          <div className="newsletter-card glass" key={nl.id}>
            <div className="newsletter-preview">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{nl.emoji}</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {nl.preview.map((line, i) => <div key={i} style={{ marginBottom: '0.2rem' }}>• {line}</div>)}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{nl.title}</h3>
                <span className="newsletter-frequency">{nl.freq}</span>
              </div>
              <p style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>{nl.desc}</p>
              <div className="subscriber-count">
                <Users size={14} /> {nl.subscribers} abonnés
              </div>
              {subscribed[nl.id] ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 600, marginTop: '1rem' }}>
                  <Check size={18} /> Inscrit !
                </div>
              ) : (
                <button
                  className={`btn ${nl.free ? 'btn-primary' : 'btn-ghost'} btn-full`}
                  style={{ marginTop: '1rem' }}
                  onClick={() => handleSubscribe(nl.id)}
                >
                  {nl.free ? 'S\'inscrire gratuitement' : `S'abonner — ${nl.price}`}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
