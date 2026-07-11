import React, { useState } from 'react';
import { Calendar, MapPin, Users, Ticket, ArrowRight, QrCode, ChevronLeft, Download } from 'lucide-react';

export default function EventsPage() {
  const [view, setView] = useState('home'); // home, ticket

  if (view === 'ticket') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour aux événements
        </button>

        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', padding: '2rem', textAlign: 'center', color: '#fff' }}>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>Billet Confirmé</div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>Forum Économique du Soleil</h2>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Billet d'entrée valide pour 1 personne</p>
            </div>
            
            <div style={{ padding: '2rem', background: '#fff', color: '#000', position: 'relative' }}>
              {/* Ticket cutouts */}
              <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '30px', height: '30px', background: 'var(--bg)', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '30px', height: '30px', background: 'var(--bg)', borderRadius: '50%' }}></div>
              
              <div style={{ borderBottom: '2px dashed #e5e7eb', paddingBottom: '1.5rem', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Date</div>
                  <div style={{ fontWeight: 600, fontSize: '1rem' }}>14 Sep 2026</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Heure</div>
                  <div style={{ fontWeight: 600, fontSize: '1rem' }}>09:00 - 18:00</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Lieu</div>
                  <div style={{ fontWeight: 600, fontSize: '1rem' }}>CICAD, Diamniadio</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Participant</div>
                  <div style={{ fontWeight: 600, fontSize: '1rem' }}>M. Amadou Fall</div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <QrCode size={150} color="#000" style={{ margin: '0 auto 1rem' }} />
                <p style={{ fontSize: '0.8rem', color: '#6b7280', fontFamily: 'monospace' }}>TKT-849204-XYZ</p>
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', background: '#ec4899', color: '#fff', border: 'none' }}>
            <Download size={18} /> Télécharger le PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header" style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Le Soleil Events</h2>
        <p style={{ color: 'var(--text-muted)' }}>La régie événementielle intégrée. Forums, Masterclasses et Débats.</p>
      </div>

      <div className="event-featured glass" style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(190,24,93,0.1))', border: '1px solid rgba(236,72,153,0.2)', marginBottom: '3rem' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <span className="event-type-chip event-type-forum" style={{ background: '#ec4899', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>Grand Forum</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Forum Économique du Soleil 2026</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)', marginBottom: '2rem' }}>
            Rencontre au sommet entre le gouvernement, le secteur privé et les investisseurs internationaux. Bilan et perspectives de l'économie sénégalaise.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}><Calendar size={18} color="#ec4899" /> 14 Septembre 2026</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}><MapPin size={18} color="#ec4899" /> CICAD, Diamniadio</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}><Users size={18} color="#ec4899" /> 1500+ participants</div>
          </div>
          <button className="btn btn-primary" onClick={() => setView('ticket')} style={{ background: '#ec4899', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Ticket size={18} /> Obtenir un Billet <ArrowRight size={16} />
          </button>
        </div>
        <div style={{ width: '300px', height: '300px', background: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80) center/cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}></div>
      </div>
    </div>
  );
}
