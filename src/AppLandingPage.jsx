import React from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, Rocket, Star, Users, Zap } from 'lucide-react';

export default function AppLandingPage({ data, onLaunch, onBack }) {
  if (!data) return null;
  const { icon, color, gradient, category, title, tagline, description, stats, howItWorks, innovation, valueFor } = data;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-main)' }}>

      {/* Back button */}
      <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.95rem' }}>
          <ChevronLeft size={18} /> Retour à l'écosystème
        </button>
      </div>

      {/* Hero */}
      <section style={{ background: gradient, padding: '5rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        {/* Background dots */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`, pointerEvents: 'none' }}></div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.4rem 1.2rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <span>{icon}</span> {category}
          </div>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem', lineHeight: 1 }}>{icon}</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', margin: '0 0 1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{title}</h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 500 }}>{tagline}</p>
          <button
            onClick={onLaunch}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', color: '#111', padding: '1rem 2.5rem', borderRadius: '14px', fontWeight: 800, fontSize: '1.1rem', border: 'none', cursor: 'pointer', boxShadow: `0 20px 40px rgba(0,0,0,0.3)`, transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Rocket size={22} /> Lancer l'application <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Description */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.9, color: 'var(--text-sub)' }}>{description}</p>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass" style={{ padding: '2.5rem', textAlign: 'center', border: `1px solid ${color}30`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${color}, transparent)` }}></div>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color, fontFamily: 'Outfit', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'rgba(128,128,128,0.04)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.75rem', color, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Fonctionnement</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.5rem' }}>Comment ça marche ?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {howItWorks.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '14px', background: `${color}18`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 900, color, fontFamily: 'Outfit' }}>
                  {step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', color, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Innovation</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.5rem', maxWidth: '700px', margin: '0.5rem auto 0', lineHeight: 1.3 }}>{innovation.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass" style={{ padding: '2.5rem', borderLeft: '4px solid #ef4444', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ✗ Avant
            </div>
            <p style={{ color: 'var(--text-sub)', lineHeight: 1.8, fontSize: '1.05rem' }}>{innovation.before}</p>
          </div>
          <div className="glass" style={{ padding: '2.5rem', borderLeft: `4px solid ${color}`, position: 'relative', background: `${color}08` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color, fontWeight: 700, marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ✓ Avec {title}
            </div>
            <p style={{ color: 'var(--text-sub)', lineHeight: 1.8, fontSize: '1.05rem' }}>{innovation.after}</p>
          </div>
        </div>
      </section>

      {/* Value for who */}
      <section style={{ background: 'rgba(128,128,128,0.04)', borderTop: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.75rem', color, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Valeur Ajoutée</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.5rem' }}>Qui en bénéficie et comment ?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {valueFor.map((item, i) => (
              <div key={i} className="glass" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} color={color} />
                  </div>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>{item.who}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} color={color} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <p style={{ color: 'var(--text-sub)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', background: gradient, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Star size={48} color="rgba(255,255,255,0.6)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>Prêt à explorer {title} ?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', marginBottom: '3rem' }}>Découvrez le prototype complet et interactif dès maintenant.</p>
          <button
            onClick={onLaunch}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', color: '#111', padding: '1.2rem 3rem', borderRadius: '14px', fontWeight: 800, fontSize: '1.2rem', border: 'none', cursor: 'pointer', boxShadow: `0 20px 40px rgba(0,0,0,0.3)` }}
          >
            <Zap size={24} /> Lancer l'application <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
