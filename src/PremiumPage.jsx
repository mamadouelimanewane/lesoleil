import React, { useState } from 'react';
import { Check, Smartphone, CreditCard, ChevronLeft } from 'lucide-react';

const PLANS = [
  { id: 'basic', icon: '📰', name: 'E-paper', price: '2 000', period: '/mois', features: ['Édition PDF quotidienne', 'Accès sur 1 appareil', 'Archives des 7 derniers jours'] },
  { id: 'premium', icon: '💎', name: 'Premium', price: '5 000', period: '/mois', featured: true, features: ['E-paper + articles web illimités', 'Accès sur 3 appareils', 'Archives complètes (54 ans)', 'Sans publicité', 'Newsletter Soleil Briefing incluse'] },
  { id: 'famille', icon: '👨‍👩‍👧‍👦', name: 'Famille', price: '9 000', period: '/mois', features: ['Tout Premium', 'Jusqu\'à 5 comptes', 'Soleil Audio inclus', 'Support prioritaire'] },
];

export default function PremiumPage() {
  const [payment, setPayment] = useState(null); // plan being paid

  if (payment) {
    return (
      <div className="fade-up" style={{ maxWidth: '480px', margin: '0 auto' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => setPayment(null)} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour aux offres
        </button>
        <div className="success-panel">
          <Check size={40} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
          <h3>Abonnement {payment.name} activé</h3>
          <p style={{ color: 'var(--text-sub)' }}>Paiement de {payment.price} CFA confirmé. Votre e-paper du jour est disponible immédiatement.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Premium</h2>
        <p style={{ color: 'var(--text-muted)' }}>E-paper et abonnements — paiement Orange Money & Wave</p>
      </div>

      <div className="premium-grid">
        {PLANS.map(p => (
          <div key={p.id} className={`pricing-card ${p.featured ? 'featured' : ''}`}>
            {p.featured && <span className="badge-featured">Le plus populaire</span>}
            <span className="pricing-icon">{p.icon}</span>
            <h3 style={{ color: 'var(--text-main)' }}>{p.name}</h3>
            <div>
              <span className="pricing-price">{p.price}</span>
              <sub> CFA{p.period}</sub>
            </div>
            <ul className="pricing-features">
              {p.features.map((f, i) => <li key={i} style={{ color: 'var(--text-sub)' }}>{f}</li>)}
            </ul>
            <div className="payment-methods">
              <button className="btn btn-orange btn-full" onClick={() => setPayment(p)} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <Smartphone size={16} /> Payer avec Orange Money
              </button>
              <button className="btn btn-wave btn-full" onClick={() => setPayment(p)} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <Smartphone size={16} /> Payer avec Wave
              </button>
              <button className="btn btn-ghost btn-full" onClick={() => setPayment(p)} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <CreditCard size={16} /> Carte bancaire
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
