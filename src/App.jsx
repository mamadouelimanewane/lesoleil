import React, { useState, useEffect } from 'react';
import {
  Newspaper, Archive, MonitorPlay, Users, BookOpen,
  Sun, Search, Play, Send, ChevronLeft, TrendingUp,
  Globe, Bell, Menu, X, ArrowRight, Zap, Star,
  Gamepad2, Mail, Headphones, Briefcase, Calendar, Sparkles,
  Database, Shield, GraduationCap, Wifi, Check, Moon,
  Home
} from 'lucide-react';
import './App.css';

import JeuxPage from './JeuxPage';
import BriefingPage from './BriefingPage';
import AudioPage from './AudioPage';
import ProPage from './ProPage';
import EventsPage from './EventsPage';
import IAPage from './IAPage';
import MemoirePage from './MemoirePage';
import ExecutifPage from './ExecutifPage';
import EducationPage from './EducationPage';
import ZeroDataPage from './ZeroDataPage';
import AppLandingPage from './AppLandingPage';
import { APPS_DATA } from './appsData';

/* =======================================
   DATA
   ======================================= */
const TABS = [
  { id: 'memoire',   label: 'Mémoire de la Nation', icon: Database,   badge: 'État' },
  { id: 'executif',  label: 'Soleil Exécutif',    icon: Shield,       badge: 'VIP' },
  { id: 'education', label: 'Soleil Éducation',   icon: GraduationCap,badge: 'B2G' },
  { id: 'zerodata',  label: 'Zéro Data Telco',    icon: Wifi,         badge: 'Tech' },
  { id: 'jeux',      label: 'Soleil Jeux',        icon: Gamepad2,     badge: 'Nouveau' },
  { id: 'briefing',  label: 'Soleil Briefing',    icon: Mail,         badge: null },
  { id: 'audio',     label: 'Soleil Audio',       icon: Headphones,   badge: null },
  { id: 'pro',       label: 'Soleil Pro / B2B',   icon: Briefcase,    badge: null },
  { id: 'events',    label: 'Le Soleil Events',   icon: Calendar,     badge: null },
  { id: 'ia',        label: 'Soleil IA',          icon: Sparkles,     badge: 'Beta' },
  { id: 'news',      label: 'Le Soleil News',     icon: Newspaper,    badge: null },
  { id: 'archives',  label: 'Soleil Archives',    icon: Archive,      badge: null },
  { id: 'premium',   label: 'Soleil Premium',     icon: BookOpen,     badge: null },
  { id: 'connect',   label: 'Soleil Connect',     icon: Users,        badge: null },
  { id: 'tv',        label: 'Soleil TV+',         icon: MonitorPlay,  badge: 'LIVE' },
];

const TITLES = {
  memoire: 'Mémoire de la Nation', executif: 'Soleil Exécutif (B2G)', education: 'Soleil Éducation', zerodata: 'Inclusion & Zéro Data',
  jeux: 'Soleil Jeux', briefing: 'Soleil Briefing', audio: 'Soleil Audio', pro: 'Soleil Pro / B2B', events: 'Le Soleil Events', ia: 'Soleil IA',
  news: 'Le Soleil News', archives: 'Soleil Archives', premium: 'Soleil Premium', connect: 'Soleil Connect', tv: 'Soleil TV+'
};

/* =======================================
   STANDALONE LANDING PAGE
   ======================================= */
function LandingPage({ setTab }) {
  const categories = [
    {
      step: "1 / 3",
      count: 4,
      title: "Projets d'État & Souveraineté",
      desc: "Arguments majeurs pour le Gouvernement et les Bailleurs de Fonds",
      apps: [
        { id: 'memoire', icon: '🏛️', color: '#f59e0b', label: 'Mémoire de la Nation', desc: 'Numérisation IA de 54 ans d\'archives (UNESCO)' },
        { id: 'executif', icon: '💼', color: '#ef4444', label: 'Soleil Exécutif', desc: 'Portail B2G ultra-sécurisé pour la Présidence' },
        { id: 'education', icon: '🎓', color: '#8b5cf6', label: 'Soleil Éducation', desc: 'EdTech : Le Soleil dans les collèges et lycées' },
        { id: 'zerodata', icon: '📶', color: '#10b981', label: 'Zéro Data Telco', desc: 'Partenariat d\'accès gratuit sans forfait internet' },
      ]
    },
    {
      step: "2 / 3",
      count: 6,
      title: "Nouveaux Moteurs de Croissance",
      desc: "Monétisation, engagement et fidélisation des audiences (Business Plan 2026)",
      apps: [
        { id: 'jeux', icon: '🎮', color: '#10b981', label: 'Soleil Jeux', desc: 'Wordle Wolof et quiz. Crée une habitude.' },
        { id: 'briefing', icon: '📧', color: '#f59e0b', label: 'Soleil Briefing', desc: 'Newsletters payantes (Éco, Diaspora, Sport)' },
        { id: 'audio', icon: '🎧', color: '#8b5cf6', label: 'Soleil Audio', desc: 'Podcasts et Lecture Vocale (Text-to-Speech)' },
        { id: 'pro', icon: '📈', color: '#3b82f6', label: 'Soleil Pro / B2B', desc: 'Data marchés publics et rapports sectoriels' },
        { id: 'events', icon: '🎟️', color: '#ec4899', label: 'Le Soleil Events', desc: 'Organisation de Forums et Masterclasses' },
        { id: 'ia', icon: '🤖', color: '#06b6d4', label: 'Soleil IA', desc: 'Assistant IA interactif branché sur les archives' },
      ]
    },
    {
      step: "3 / 3",
      count: 5,
      title: "Plateformes Médias Historiques",
      desc: "Modernisation des canaux de distribution classiques",
      apps: [
        { id: 'news', icon: '📰', color: '#3b82f6', label: 'Le Soleil News', desc: 'Fil d\'actualité temps réel et alertes' },
        { id: 'archives', icon: '📚', color: '#f59e0b', label: 'Soleil Archives', desc: 'Recherche plein texte dans le patrimoine' },
        { id: 'premium', icon: '💎', color: '#10b981', label: 'Soleil Premium', desc: 'E-paper et abonnements (Orange Money/Wave)' },
        { id: 'connect', icon: '🎙️', color: '#ef4444', label: 'Soleil Connect', desc: 'Réseau de correspondants citoyens' },
        { id: 'tv', icon: '📺', color: '#1e88e5', label: 'Soleil TV+', desc: 'Web TV, documentaires et replays' },
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-main)', position: 'relative' }}>
      {/* Background Decor */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,158,11,0.15), transparent)' }}></div>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 50% 40% at 90% 90%, rgba(139,92,246,0.08), transparent)' }}></div>
      
      {/* Topbar of Landing Page */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sun size={28} color="#f59e0b" />
            <div>
              <p style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '0.03em', margin: 0 }}>Le Soleil <span style={{ color: '#f59e0b' }}>Digital</span></p>
              <p style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Quotidien National · Sénégal</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse-dot 2s infinite' }}></span>
            <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.1em' }}>SYSTÈME EN LIGNE</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '5rem 1.5rem 4rem', textAlign: 'center', position: 'relative' }}>
        <div className="au1" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '6px 18px' }}>
            <span style={{ fontSize: '13px' }}>🇸🇳</span>
            <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>République du Sénégal · Souveraineté Numérique</span>
          </div>
        </div>
        <div className="au2" style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            <span style={{ display: 'block', fontSize: '0.42em', fontWeight: 500, color: 'var(--text-sub)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.7rem' }}>L'Écosystème Digital</span>
            <span style={{ background: 'linear-gradient(135deg, var(--text-main) 0%, #fef3c7 50%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Quotidien Le Soleil</span>
          </h1>
        </div>
        <p className="au3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 600, color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Informer. <span style={{ color: '#f59e0b' }}>Innover.</span> Préserver la mémoire de la Nation.
        </p>
        
        <div className="au4" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#applications" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 0 30px rgba(245,158,11,0.3)', transition: 'all 0.2s' }}>
            Explorer les 15 applications →
          </a>
        </div>

        <div className="au5 glass" style={{ maxWidth: '780px', margin: '3.5rem auto 0', padding: '2rem 2.5rem', textAlign: 'left', border: '1px solid var(--border)', borderRadius: '16px' }}>
          <p style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px', margin: 0 }}>Notre Mission</p>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-sub)', lineHeight: 1.8, margin: 0, marginTop: '12px' }}>
            Le Soleil Digital n'est pas qu'un site web, c'est une <strong>infrastructure numérique d'État</strong>. Ce prototype démontre notre capacité à moderniser l'information, servir l'éducation, et atteindre 5 millions de citoyens ruraux grâce à l'innovation technologique.
          </p>
        </div>
      </section>

      {/* Applications Directory */}
      <section id="applications" style={{ maxWidth: '1300px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px', margin: 0 }}>— Portail d'accès —</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-main)', margin: 0, marginTop: '8px' }}>15 Applications Stratégiques</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-sub)', marginTop: '8px' }}>Naviguez dans les différents modules métiers développés pour l'écosystème</p>
        </div>

        {categories.map((cat, idx) => (
          <div key={idx} style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem', paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                {idx === 0 ? '🏛️' : idx === 1 ? '🚀' : '📰'}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>Étape {cat.step}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>{cat.count} applications</span>
                </div>
                <h3 style={{ margin: '2px 0 0', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 800, color: 'var(--text-main)' }}>{cat.title}</h3>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>{cat.desc}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
              {cat.apps.map(app => (
                <div 
                  key={app.id} 
                  className="card-hover glass"
                  onClick={() => { setTab(app.id); window.scrollTo(0, 0); }}
                  style={{ cursor: 'pointer', padding: '1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: 'none' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${app.color}, transparent)`, opacity: 0.8 }}></div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0, fontSize: '22px', background: `${app.color}15`, border: `1px solid ${app.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {app.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>{app.label}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{app.desc}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: app.color, animation: 'pulse-dot 2s infinite' }}></div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>lesoleil/{app.id}</span>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-sub)' }}>Ouvrir →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

/* =======================================
   APP SHELL
   ======================================= */
function AppShell({ tab, setTab, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = (id) => { setTab(id); setOpen(false); window.scrollTo(0, 0); };

  return (
    <div className={`app-layout ${collapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(o => !o)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      <div className={`overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        {/* Toggle Collapse Button (Desktop only) */}
        <button 
          className="collapse-btn" 
          onClick={() => setCollapsed(!collapsed)}
          style={{ position: 'absolute', right: '-12px', top: '24px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '50%', padding: '4px', zIndex: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ChevronLeft size={14} style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: '0.3s', color: 'var(--text-main)' }} />
        </button>

        <div className="sidebar-logo">
          <Sun size={36} color="#f59e0b" style={{ flexShrink: 0 }} />
          <div className="sidebar-logo-text">
            Le Soleil
            <small>Prototypes Digitaux</small>
          </div>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, paddingRight: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', overflowX: 'hidden' }}>
          
          <span className="nav-section-label" style={{ marginTop: '0.5rem' }}>Projets d'État & Souveraineté</span>
          {TABS.slice(0, 4).map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)} title={t.label}>
                <Icon size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">{t.label}</span>
                {t.badge && <span className="nav-badge" style={{ background: '#ef4444' }}>{t.badge}</span>}
              </button>
            );
          })}

          <span className="nav-section-label" style={{ marginTop: '1rem' }}>Nouveaux Moteurs (2026)</span>
          {TABS.slice(4, 10).map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)} title={t.label}>
                <Icon size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">{t.label}</span>
                {t.badge && <span className="nav-badge" style={{ background: t.id === 'jeux' ? 'var(--success)' : (t.id === 'ia' ? 'var(--accent)' : 'var(--danger)') }}>{t.badge}</span>}
              </button>
            );
          })}

          <span className="nav-section-label" style={{ marginTop: '1rem' }}>Plateformes Historiques</span>
          {TABS.slice(10).map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)} title={t.label}>
                <Icon size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">{t.label}</span>
                {t.badge && <span className="nav-badge">{t.badge}</span>}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button className="btn btn-ghost btn-sm" onClick={() => setTab('home')} title="Retour à la Landing Page" style={{ padding: '0.5rem 0.8rem', borderRadius: '8px', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none' }}>
              <Home size={16} /> <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Accueil</span>
            </button>
            <span className="topbar-title" style={{ marginLeft: '1rem' }}>{TITLES[tab]}</span>
          </div>
          <div className="topbar-meta">
            <select 
              value={theme} 
              onChange={(e) => setTheme(e.target.value)}
              style={{ background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.3rem 0.5rem', fontSize: '0.8rem', outline: 'none', cursor: 'pointer' }}
            >
              <option value="smart">🤖 Mode Smart</option>
              <option value="dark">🌙 Mode Sombre</option>
              <option value="light">☀️ Mode Clair</option>
            </select>
            <div className="live-chip" style={{ marginLeft: '0.5rem' }}><div className="live-dot" />LIVE</div>
            <Bell size={20} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
          </div>
        </header>

        <div className="page-content">
          {tab === 'memoire'   && <MemoirePage />}
          {tab === 'executif'  && <ExecutifPage />}
          {tab === 'education' && <EducationPage />}
          {tab === 'zerodata'  && <ZeroDataPage />}
          
          {tab === 'jeux'      && <JeuxPage />}
          {tab === 'briefing'  && <BriefingPage />}
          {tab === 'audio'     && <AudioPage />}
          {tab === 'pro'       && <ProPage />}
          {tab === 'events'    && <EventsPage />}
          {tab === 'ia'        && <IAPage />}
          
          {/* Placeholder for standard apps */}
          {tab === 'news'      && <div className="fade-up page-header"><h2>Le Soleil News</h2><p>Fil d'actualité temps réel</p></div>}
          {tab === 'archives'  && <div className="fade-up page-header"><h2>Soleil Archives</h2><p>Moteur de recherche patrimonial</p></div>}
          {tab === 'premium'   && <div className="fade-up page-header"><h2>Soleil Premium</h2><p>Abonnements et e-paper</p></div>}
          {tab === 'connect'   && <div className="fade-up page-header"><h2>Soleil Connect</h2><p>Réseau de correspondants</p></div>}
          {tab === 'tv'        && <div className="fade-up page-header"><h2>Soleil TV+</h2><p>Web TV en direct</p></div>}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');      // 'home' | appId
  const [preview, setPreview] = useState(null); // appId being previewed
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    let activeTheme = theme;
    if (theme === 'smart') {
      activeTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [theme]);

  // Listen to system theme changes if in smart mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = () => {
      if (theme === 'smart') {
        document.documentElement.setAttribute('data-theme', mediaQuery.matches ? 'light' : 'dark');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Navigate to an app: show its landing page first (only if data exists)
  const handleAppSelect = (id) => {
    window.scrollTo(0, 0);
    if (APPS_DATA[id]) {
      setPreview(id);
    } else {
      setTab(id);
    }
  };

  // Launch from app landing page into the actual app
  const handleLaunch = (id) => {
    window.scrollTo(0, 0);
    setPreview(null);
    setTab(id);
  };

  // Back to main landing page
  const handleBackHome = () => {
    window.scrollTo(0, 0);
    setPreview(null);
    setTab('home');
  };

  // 1. Main landing page
  if (tab === 'home' && !preview) {
    return <LandingPage setTab={handleAppSelect} />;
  }

  // 2. Per-app landing page
  if (preview) {
    return (
      <AppLandingPage
        data={APPS_DATA[preview]}
        onLaunch={() => handleLaunch(preview)}
        onBack={handleBackHome}
      />
    );
  }

  // 3. App shell (actual interface)
  return (
    <AppShell
      tab={tab}
      setTab={(id) => {
        if (id === 'home') { handleBackHome(); }
        else { handleAppSelect(id); }
      }}
      theme={theme}
      setTheme={setTheme}
    />
  );
}
