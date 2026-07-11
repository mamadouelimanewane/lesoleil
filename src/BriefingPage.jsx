import React, { useState } from 'react';
import { Mail, CheckCircle, Clock, ChevronRight, FileText, ChevronLeft } from 'lucide-react';

export default function BriefingPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [view, setView] = useState('home'); // home, edition

  if (view === 'edition') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour aux Newsletters
        </button>

        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff', color: '#111827', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', borderBottom: '2px solid #111827', paddingBottom: '1rem', marginBottom: '2rem' }}>
            <h1 style={{ fontFamily: 'serif', fontSize: '2.5rem', margin: 0, letterSpacing: '-1px' }}>LE SOLEIL BRIEFING</h1>
            <p style={{ fontSize: '0.9rem', color: '#4b5563', margin: '0.5rem 0 0' }}>L'Édition Économique — Jeudi 12 Juillet 2026</p>
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111827' }}>Bonjour Amadou,</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#374151' }}>
            Voici ce qu'il faut retenir ce matin pour comprendre l'actualité économique du Sénégal et de la sous-région avant de commencer votre journée.
          </p>

          <div style={{ background: '#f3f4f6', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #f59e0b', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#111827' }}>1. La BRVM en forte hausse</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#374151' }}>
              Le marché boursier régional a enregistré sa plus forte progression de l'année (+3.2%), tirée par les valeurs bancaires sénégalaises et ivoiriennes suite à l'annonce de la BCEAO sur les taux directeurs.
            </p>
          </div>

          <div style={{ background: '#f3f4f6', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #10b981', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#111827' }}>2. Pétrole & Gaz : Premier baril</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#374151' }}>
              Le consortium d'exploitation du champ Sangomar confirme l'atteinte du plateau de production de 100 000 barils par jour. L'impact sur les recettes fiscales est estimé à 50 milliards CFA pour le trimestre.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb', fontSize: '0.85rem', color: '#6b7280' }}>
            Vous recevez cet email car vous êtes abonné à Soleil Premium.<br/>
            <a href="#" style={{ color: '#3b82f6' }}>Gérer mes préférences</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Briefing</h2>
        <p style={{ color: 'var(--text-muted)' }}>Des newsletters expertes directement dans votre boîte mail.</p>
      </div>

      <div className="newsletter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Newsletter 1 */}
        <div className="newsletter-card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(245,158,11,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={24} color="#f59e0b" />
            </div>
            <span style={{ fontSize: '0.75rem', background: 'rgba(128,128,128,0.2)', padding: '0.2rem 0.6rem', borderRadius: '12px', color: 'var(--text-main)' }}>Quotidien (6h00)</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>L'Édition Éco</h3>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', flex: 1, marginBottom: '1.5rem' }}>L'essentiel de l'économie, de la finance et des marchés pour les décideurs sénégalais.</p>
          
          <button className="btn btn-ghost" onClick={() => setView('edition')} style={{ marginBottom: '1rem', border: '1px solid var(--border)', justifyContent: 'center' }}>
            <FileText size={16} /> Lire la dernière édition
          </button>

          {!subscribed ? (
            <div className="subscribe-input-group" style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="votre@email.com" style={{ flex: 1, padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }} />
              <button className="btn btn-primary" onClick={() => setSubscribed(true)} style={{ background: '#f59e0b', color: '#000', border: 'none' }}>S'abonner</button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <CheckCircle size={20} /> <span>Vous êtes abonné !</span>
            </div>
          )}
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={14} /> 12 450 abonnés
          </div>
        </div>

        {/* Newsletter 2 */}
        <div className="newsletter-card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={24} color="#3b82f6" />
            </div>
            <span style={{ fontSize: '0.75rem', background: 'rgba(128,128,128,0.2)', padding: '0.2rem 0.6rem', borderRadius: '12px', color: 'var(--text-main)' }}>Hebdo (Vendredi)</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Soleil Diaspora</h3>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', flex: 1, marginBottom: '1.5rem' }}>Le résumé de la semaine au pays, conçu spécialement pour les Sénégalais de l'extérieur.</p>
          <div className="subscribe-input-group" style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="votre@email.com" style={{ flex: 1, padding: '0.8rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff' }} />
            <button className="btn btn-primary" style={{ background: '#3b82f6', color: '#fff', border: 'none' }}>S'abonner</button>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={14} /> 45 200 abonnés
          </div>
        </div>

      </div>
    </div>
  );
}
