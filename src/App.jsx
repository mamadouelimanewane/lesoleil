import React, { useState, useEffect } from 'react';
import {
  Newspaper, Archive, MonitorPlay, Users, BookOpen,
  Sun, Search, Play, Send, ChevronLeft, TrendingUp,
  Globe, Bell, Menu, X, ArrowRight, Zap, Star,
  Gamepad2, Mail, Headphones, Briefcase, Calendar, Sparkles,
  Database, Shield, GraduationCap, Wifi, Check, Moon
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

/* =======================================
   DATA
   ======================================= */
const NEWS = [
  { id: 1, time: 'Il y a 30 min', category: 'Politique', emoji: '🏛️', title: 'Le gouvernement annonce un ambitieux plan de relance économique pour 2028', excerpt: 'Un programme de 500 milliards de FCFA...', body: '...' },
  { id: 2, time: 'Il y a 2h', category: 'Sport', emoji: '⚽', title: 'Les Lions de la Téranga en camp d\'entraînement intensif à Saly', excerpt: 'L\'équipe nationale de football est en pleine préparation...', body: '...' },
];
const ARCHIVES = [ { year: 1970, title: 'Naissance du Soleil', desc: 'Le premier numéro paraît sous l\'impulsion du Président Léopold Sédar Senghor.' } ];
const VIDEOS = [ { id: 1, emoji: '🎬', title: 'Le Sénégal de Demain : Enquête sur le pétrole', cat: 'Enquête', dur: '48 min' } ];

function CategoryChip({ cat }) {
  const map = { Politique: 'chip-politique', Sport: 'chip-sport', Société: 'chip-societe', Économie: 'chip-economie', Culture: 'chip-culture' };
  return <span className={`category-chip ${map[cat] || 'chip-societe'}`}>{cat}</span>;
}

/* =======================================
   PITCH LANDING PAGE (Format Hospice-Seven)
   ======================================= */
function HomePage({ setTab }) {
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
    <div style={{ paddingBottom: '4rem' }}>
      {/* Hero Section (Pitch) */}
      <section style={{ textAlign: 'center', padding: '3rem 1rem 4rem', position: 'relative' }}>
        <div className="au1" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '100px', padding: '6px 18px' }}>
            <span style={{ fontSize: '13px' }}>🇸🇳</span>
            <span style={{ fontSize: '11px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>République du Sénégal · Souveraineté Numérique</span>
          </div>
        </div>
        <div className="au2" style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', fontSize: '0.42em', fontWeight: 500, color: 'var(--text-sub)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.7rem' }}>L'Écosystème Digital</span>
            <span style={{ background: 'linear-gradient(135deg, var(--text-main) 0%, #fef3c7 50%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Quotidien Le Soleil</span>
          </h1>
        </div>
        <p className="au3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', fontWeight: 600, color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Informer. <span style={{ color: '#f59e0b' }}>Innover.</span> Préserver la mémoire de la Nation.
        </p>
        
        <div className="au5 glass" style={{ maxWidth: '800px', margin: '3.5rem auto 0', padding: '2rem 2.5rem', textAlign: 'left', borderLeft: '4px solid #f59e0b' }}>
          <p style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '12px' }}>Notre Proposition de Valeur</p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)', lineHeight: 1.8 }}>
            Bien plus qu'un site web, ceci est une infrastructure numérique d'État. Ce prototype démontre comment <strong>Le Soleil</strong> peut devenir un hub éducatif, un outil pour le Gouvernement (B2G), et atteindre 5 millions de citoyens ruraux grâce au Zéro Data.
          </p>
        </div>
      </section>

      {/* Applications Directory (Hospice-Seven format) */}
      <section id="applications" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>— Portail des Prototypes —</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-main)' }}>15 Applications Stratégiques</h2>
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
                  onClick={() => setTab(app.id)}
                  style={{ cursor: 'pointer', padding: '1.5rem', position: 'relative', overflow: 'hidden', border: '1px solid var(--border)' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${app.color}, transparent)`, opacity: 0.8 }}></div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0, fontSize: '22px', background: `${app.color}15`, border: `1px solid ${app.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {app.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>{app.label}</h3>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{app.desc}</p>
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
   OTHER PLACEHOLDER PAGES
   ======================================= */
function NewsPage() { return <div className="fade-up page-header"><h2>Le Soleil News</h2><p>Fil d'actualité temps réel</p></div>; }
function ArchivesPage() { return <div className="fade-up page-header"><h2>Soleil Archives</h2><p>Moteur de recherche patrimonial</p></div>; }
function PremiumPage() { return <div className="fade-up page-header"><h2>Soleil Premium</h2><p>Abonnements et e-paper</p></div>; }
function ConnectPage() { return <div className="fade-up page-header"><h2>Soleil Connect</h2><p>Réseau de correspondants</p></div>; }
function TVPage() { return <div className="fade-up page-header"><h2>Soleil TV+</h2><p>Web TV en direct</p></div>; }

/* =======================================
   APP SHELL
   ======================================= */
const TABS = [
  { id: 'home',      label: 'Pitch & Hub',        icon: Sun,          badge: null },
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
  home: 'Accueil', 
  memoire: 'Mémoire de la Nation', executif: 'Soleil Exécutif (B2G)', education: 'Soleil Éducation', zerodata: 'Inclusion & Zéro Data',
  jeux: 'Soleil Jeux', briefing: 'Soleil Briefing', audio: 'Soleil Audio', pro: 'Soleil Pro / B2B', events: 'Le Soleil Events', ia: 'Soleil IA',
  news: 'Le Soleil News', archives: 'Soleil Archives', premium: 'Soleil Premium', connect: 'Soleil Connect', tv: 'Soleil TV+'
};

export default function App() {
  const [tab, setTab] = useState('home');
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('smart');

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
          <span className="nav-section-label">Général</span>
          <button className={`nav-item ${tab === 'home' ? 'active' : ''}`} onClick={() => navigate('home')} title="Pitch & Hub">
            <Sun size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">Pitch & Hub</span>
          </button>
          
          <span className="nav-section-label" style={{ marginTop: '1rem' }}>Projets d'État & Souveraineté</span>
          {TABS.slice(1, 5).map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)} title={t.label}>
                <Icon size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">{t.label}</span>
                {t.badge && <span className="nav-badge" style={{ background: '#ef4444' }}>{t.badge}</span>}
              </button>
            );
          });
          }

          <span className="nav-section-label" style={{ marginTop: '1rem' }}>Nouveaux Moteurs (2026)</span>
          {TABS.slice(5, 11).map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)} title={t.label}>
                <Icon size={19} style={{ flexShrink: 0 }} /> <span className="nav-item-label">{t.label}</span>
                {t.badge && <span className="nav-badge" style={{ background: t.id === 'jeux' ? 'var(--success)' : (t.id === 'ia' ? 'var(--accent)' : 'var(--danger)') }}>{t.badge}</span>}
              </button>
            );
          })}

          <span className="nav-section-label" style={{ marginTop: '1rem' }}>Plateformes Historiques</span>
          {TABS.slice(11).map(t => {
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
            {tab !== 'home' && (
              <button className="btn btn-ghost btn-sm" onClick={() => navigate('home')} style={{ padding: '0.4rem', borderRadius: '50%', background: 'rgba(128,128,128,0.1)' }}>
                <ChevronLeft size={20} />
              </button>
            )}
            <span className="topbar-title">{TITLES[tab]}</span>
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
          {tab === 'home'      && <HomePage setTab={setTab} />}
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
          
          {tab === 'news'      && <NewsPage />}
          {tab === 'archives'  && <ArchivesPage />}
          {tab === 'premium'   && <PremiumPage />}
          {tab === 'connect'   && <ConnectPage />}
          {tab === 'tv'        && <TVPage />}
        </div>
      </div>
    </div>
  );
}
