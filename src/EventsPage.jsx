import React from 'react';
import { Calendar, MapPin, Users, Ticket, ArrowRight, Clock } from 'lucide-react';

const EVENTS = [
  {
    id: 1, date: '15', month: 'OCT', type: 'Forum', typeClass: 'event-type-forum',
    title: 'Le Sénégal Numérique 2026',
    desc: 'Grand forum économique réunissant décideurs, startups et investisseurs pour tracer l\'avenir numérique du pays.',
    location: 'Centre International de Conférences Abdou Diouf (CICAD), Diamniadio',
    time: '08:30 - 18:00',
    featured: true
  },
  {
    id: 2, date: '22', month: 'OCT', type: 'Masterclass', typeClass: 'event-type-masterclass',
    title: 'Masterclass : Journalisme d\'Investigation',
    desc: 'Apprenez les techniques d\'investigation avec les grands reporters de la rédaction du Soleil.',
    location: 'Siège Le Soleil, Hann Bel-Air, Dakar',
    time: '09:00 - 13:00',
    featured: false
  },
  {
    id: 3, date: '05', month: 'NOV', type: 'Débat', typeClass: 'event-type-debat',
    title: 'Table Ronde : L\'Agriculture de Demain',
    desc: 'Les enjeux de l\'autosuffisance alimentaire face aux changements climatiques.',
    location: 'Chambre de Commerce, Dakar',
    time: '15:00 - 17:30',
    featured: false
  },
  {
    id: 4, date: '12', month: 'NOV', type: 'Concours', typeClass: 'event-type-concours',
    title: 'Prix de la Plume du Soleil',
    desc: 'Remise des prix du concours national de nouvelles littéraires pour les jeunes talents.',
    location: 'Théâtre National Daniel Sorano, Dakar',
    time: '19:00 - 22:00',
    featured: false
  }
];

export default function EventsPage() {
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Le Soleil Events</h2>
        <p>Forums, masterclasses et rencontres — participez à la vie de la communauté</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        
        {/* Featured Event */}
        {EVENTS.filter(e => e.featured).map(e => (
          <div key={e.id} className="event-featured glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(30,58,138,0.4), rgba(15,23,42,0.8))', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <span className={`event-type-chip ${e.typeClass}`}>{e.type}</span>
                <div className="event-date-badge">
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{e.date}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600 }}>{e.month}</span>
                </div>
              </div>
              
              <div>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'white' }}>{e.title}</h3>
                <p style={{ fontSize: '1.1rem', maxWidth: '600px', color: 'rgba(255,255,255,0.8)' }}>{e.desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
                <div className="event-location"><MapPin size={18} /> {e.location}</div>
                <div className="event-location"><Clock size={18} /> {e.time}</div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>S'inscrire à l'événement <ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Events */}
        <div className="section-header" style={{ marginTop: '1rem' }}>
          <h3>Agenda à venir</h3>
        </div>
        
        <div className="events-timeline">
          {EVENTS.filter(e => !e.featured).map((e, index) => (
            <div key={e.id} style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
              {/* Timeline Line & Node */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="event-node"></div>
                {index < EVENTS.length - 2 && <div style={{ width: '2px', height: '100%', background: 'var(--border)', position: 'absolute', top: '24px', bottom: '-24px' }}></div>}
              </div>

              {/* Event Card */}
              <div className="event-card-timeline glass" style={{ flex: 1, padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div className="event-date-badge" style={{ minWidth: '80px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>{e.date}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>{e.month}</span>
                </div>
                
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span className={`event-type-chip ${e.typeClass}`}>{e.type}</span>
                    <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{e.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '1rem' }}>{e.desc}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> {e.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> {e.time}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                   <button className="btn btn-ghost"><Ticket size={16} /> Billet</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
