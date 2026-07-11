import React, { useState } from 'react';
import {
  Newspaper, Archive, MonitorPlay, Users, BookOpen,
  Sun, Search, Play, Send, ChevronLeft, TrendingUp,
  Globe, Bell, Menu, X, ArrowRight, Zap, Star
} from 'lucide-react';
import './App.css';

/* =======================================
   DATA
   ======================================= */
const NEWS = [
  {
    id: 1, time: 'Il y a 30 min', category: 'Politique', emoji: '🏛️',
    title: 'Le gouvernement annonce un ambitieux plan de relance économique pour 2028',
    excerpt: 'Un programme de 500 milliards de FCFA visant à booster les secteurs de l\'agriculture, du numérique et des infrastructures a été dévoilé ce matin.',
    body: 'Le Premier Ministre a présenté ce matin en Conseil des Ministres un plan de relance économique sans précédent. Ce programme ambitieux mobilisera 500 milliards de FCFA sur trois ans, principalement orientés vers l\'agriculture (40%), les technologies numériques (30%) et les infrastructures routières et portuaires (30%). "Notre ambition est de positionner le Sénégal comme le hub économique de l\'Afrique de l\'Ouest", a déclaré le Premier Ministre...',
  },
  {
    id: 2, time: 'Il y a 2h', category: 'Sport', emoji: '⚽',
    title: 'Les Lions de la Téranga en camp d\'entraînement intensif à Saly avant le tournoi continental',
    excerpt: 'L\'équipe nationale de football est en pleine préparation à Saly Portudal. 26 joueurs convoqués pour cet important rassemblement.',
    body: 'Le sélectionneur national a réuni 26 joueurs dans le complexe sportif de Saly pour une préparation intensive avant la prochaine CAN. La liste comprend plusieurs nouvelles têtes issues du championnat local, ainsi que les habituels cadres évoluant en Europe. Les séances s\'enchaînent matin et soir, et l\'ambiance au sein du groupe est décrite comme excellente par le staff technique...',
  },
  {
    id: 3, time: 'Il y a 4h', category: 'Société', emoji: '🌿',
    title: 'Dakar Propre : Des centaines de jeunes mobilisés pour le grand nettoyage de la capitale',
    excerpt: 'À l\'initiative d\'une coalition d\'associations, plus de 500 bénévoles ont ratissé plusieurs quartiers de Dakar ce week-end.',
    body: 'L\'opération "Dakar Propre" a rassemblé ce samedi plus de 500 jeunes bénévoles venus de tous les quartiers de la capitale. Organisée conjointement par plusieurs associations citoyennes et soutenue par la mairie de Dakar, cette initiative vise à sensibiliser les populations sur la gestion des déchets et à redonner un visage propre à la ville. Des camions de ramassage ont été mis à disposition par la municipalité...',
  },
  {
    id: 4, time: 'Il y a 6h', category: 'Économie', emoji: '📈',
    title: 'La production pétrolière du Sénégal atteint un nouveau record au premier semestre',
    excerpt: 'Les chiffres publiés par le ministère de l\'Énergie confirment une progression de 18% par rapport à l\'année précédente.',
    body: 'Le secteur pétrolier sénégalais affiche de nouvelles performances au premier semestre 2026. Selon les données publiées par le ministère de l\'Énergie et des Hydrocarbures, la production a bondi de 18% sur un an, portée principalement par les champs offshore de Sangomar et Yaakar-Teranga...',
  },
];

const ARCHIVES = [
  { year: 1970, title: 'Naissance du Soleil', desc: 'Le premier numéro paraît sous l\'impulsion du Président Léopold Sédar Senghor.' },
  { year: 1981, title: 'L\'Alternance Historique', desc: 'Couverture de la première transition pacifique du pouvoir au Sénégal.' },
  { year: 1994, title: 'La Dévaluation du FCFA', desc: 'Les pages économiques qui ont marqué toute une génération.' },
  { year: 2000, title: 'L\'Alternance de 2000', desc: 'La victoire historique d\'Abdoulaye Wade et le début d\'une nouvelle ère.' },
  { year: 2002, title: 'La Tragédie du Joola', desc: 'Couverture du naufrage qui a endeuillé tout le pays.' },
  { year: 2012, title: 'Les Élections de 2012', desc: 'Macky Sall remporte la présidentielle : retour sur une campagne historique.' },
];

const VIDEOS = [
  { id: 1, emoji: '🎬', title: 'Le Sénégal de Demain : Enquête sur le pétrole', cat: 'Enquête', dur: '48 min' },
  { id: 2, emoji: '🌍', title: 'Diaspora Sénégalaise : Quel avenir pour nos talents à l\'étranger ?', cat: 'Documentaire', dur: '32 min' },
  { id: 3, emoji: '🏆', title: 'L\'épopée de l\'équipe nationale : retour sur 20 ans de football', cat: 'Sport', dur: '55 min' },
  { id: 4, emoji: '🎭', title: 'Culture & Tradition : Le Sabar, danse de l\'âme sénégalaise', cat: 'Culture', dur: '24 min' },
  { id: 5, emoji: '📊', title: 'Grand débat économique : Réforme fiscale au Sénégal', cat: 'Débat', dur: '1h 10 min' },
  { id: 6, emoji: '🌊', title: 'Environnement : La montée des eaux menace le littoral dakarois', cat: 'Enquête', dur: '39 min' },
];

/* =======================================
   CATEGORY CHIP
   ======================================= */
function CategoryChip({ cat }) {
  const map = {
    Politique: 'chip-politique', Sport: 'chip-sport',
    Société: 'chip-societe', Économie: 'chip-economie', Culture: 'chip-culture',
  };
  return <span className={`category-chip ${map[cat] || 'chip-societe'}`}>{cat}</span>;
}

/* =======================================
   HOME PAGE
   ======================================= */
function HomePage({ setTab }) {
  return (
    <div className="fade-up">
      {/* Hero */}
      <div className="hero">
        <div className="hero-tag"><Zap size={14} /> Transformation Numérique</div>
        <h1>Le Soleil entre dans <span>l'ère digitale</span></h1>
        <p>Découvrez les 5 prototypes d'applications innovantes conçues pour moderniser le premier quotidien du Sénégal.</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => setTab('news')}><Newspaper size={18} /> Explorer les Apps</button>
          <button className="btn btn-ghost"><Globe size={18} /> lesoleil.sn</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><div className="stat-number">54</div><div className="stat-label">Années d'histoire</div></div>
          <div className="stat-item"><div className="stat-number">5</div><div className="stat-label">Applications prévues</div></div>
          <div className="stat-item"><div className="stat-number">2M+</div><div className="stat-label">Lecteurs potentiels</div></div>
          <div className="stat-item"><div className="stat-number">1970</div><div className="stat-label">Fondation</div></div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="section-header">
        <h2>Applications Proposées</h2>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>5 concepts, 1 vision</span>
      </div>
      <div className="apps-grid">
        {[
          { id: 'news', icon: '📰', color: '#8b5cf6', label: 'Le Soleil News', desc: 'Fil d\'actualité temps réel, alertes push, mode hors-ligne.' },
          { id: 'archives', icon: '📚', color: '#f59e0b', label: 'Soleil Archives', desc: 'Recherche IA dans 54 ans d\'histoire du Sénégal.' },
          { id: 'premium', icon: '💎', color: '#10b981', label: 'Soleil Premium', desc: 'E-paper quotidien, abonnement, paiement Orange Money & Wave.' },
          { id: 'connect', icon: '🎙️', color: '#ef4444', label: 'Soleil Connect', desc: 'Journalisme citoyen, signalements, vérification par la rédaction.' },
          { id: 'tv', icon: '📺', color: '#1e88e5', label: 'Soleil TV+', desc: 'Streaming live, VOD, documentaires et grands débats.' },
        ].map(app => (
          <div className="app-card" key={app.id} onClick={() => setTab(app.id)}>
            <div className="app-icon" style={{ background: `${app.color}22`, color: app.color }}>{app.icon}</div>
            <div>
              <div className="app-card-title">{app.label}</div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.4rem' }}>{app.desc}</p>
            </div>
            <div className="app-card-arrow">Voir le prototype <ArrowRight size={14} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =======================================
   NEWS PAGE
   ======================================= */
function NewsPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="fade-up">
      {selected ? (
        <>
          <button className="btn btn-ghost btn-sm" onClick={() => setSelected(null)} style={{ marginBottom: '1.5rem' }}>
            <ChevronLeft size={16} /> Retour au fil
          </button>
          <div className="article-view glass" style={{ padding: '2rem' }}>
            <CategoryChip cat={selected.category} />
            <div className="article-hero-img" style={{ marginTop: '1rem' }}>{selected.emoji}</div>
            <h1>{selected.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '1rem 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span>Par la rédaction du Soleil</span>
              <span>•</span>
              <span>{selected.time}</span>
            </div>
            <div className="article-body">
              <p>{selected.body}</p>
              <p>Des experts contactés par notre rédaction saluent cette initiative tout en appelant à plus de transparence dans sa mise en oeuvre. Le suivi de ce dossier sera assuré par notre équipe d'investigation dans les prochains jours.</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="page-header">
            <h2>Le Soleil News</h2>
            <p>Actualités en direct — mise à jour en temps réel depuis la rédaction</p>
          </div>
          <div className="news-list">
            {NEWS.map(n => (
              <div className="news-card" key={n.id} onClick={() => setSelected(n)}>
                <div className="news-thumb">{n.emoji}</div>
                <div className="news-card-body">
                  <CategoryChip cat={n.category} />
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                  <div className="news-time">{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* =======================================
   ARCHIVES PAGE
   ======================================= */
function ArchivesPage() {
  const [q, setQ] = useState('');
  const filtered = ARCHIVES.filter(a =>
    a.year.toString().includes(q) || a.title.toLowerCase().includes(q.toLowerCase()) || a.desc.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Archives</h2>
        <p>54 ans d'histoire sénégalaise numérisée et consultable en un clic</p>
      </div>
      <div className="search-wrap">
        <div className="search-input-wrap">
          <Search size={18} />
          <input className="search-input" type="text" placeholder="Recherchez une année, un événement, un nom..." value={q} onChange={e => setQ(e.target.value)} />
        </div>
        <button className="btn btn-primary"><Search size={16} /> Chercher</button>
      </div>
      {filtered.length === 0 ? (
        <p>Aucune archive pour "{q}".</p>
      ) : (
        <div className="archives-grid">
          {filtered.map(a => (
            <div className="archive-card" key={a.year}>
              <div className="archive-cover">
                <div className="archive-cover-lines" />
                <div className="archive-cover-year">{a.year}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', position: 'relative', zIndex: 1 }}>Le Soleil</div>
              </div>
              <div className="archive-info">
                <h3>{a.title}</h3>
                <p style={{ marginTop: '0.4rem' }}>{a.desc}</p>
                <button className="btn btn-ghost btn-sm btn-full" style={{ marginTop: '1rem' }}>Consulter le PDF</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =======================================
   PREMIUM PAGE
   ======================================= */
function PremiumPage() {
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Premium</h2>
        <p>Kiosque digital — lisez le journal chaque matin sur tous vos appareils</p>
      </div>
      <div className="premium-grid">
        <div className="pricing-card">
          <span className="pricing-icon">📄</span>
          <h3>Édition du Jour</h3>
          <div className="pricing-price">500 <sub>FCFA</sub></div>
          <ul className="pricing-features">
            <li>Journal complet en PDF</li>
            <li>Suppléments du jour</li>
            <li>Téléchargement inclus</li>
          </ul>
          <div className="payment-methods">
            <button className="btn btn-orange btn-full">📱 Orange Money</button>
            <button className="btn btn-wave btn-full">💧 Wave</button>
            <button className="btn btn-blue btn-full">💳 Carte bancaire</button>
          </div>
        </div>

        <div className="pricing-card featured">
          <div className="badge-featured">⭐ Recommandé</div>
          <span className="pricing-icon">💎</span>
          <h3>Abonnement Mensuel</h3>
          <div className="pricing-price">5 000 <sub>FCFA / mois</sub></div>
          <ul className="pricing-features">
            <li>Toutes les éditions du mois</li>
            <li>Archives des 6 derniers mois</li>
            <li>Suppléments & hors-séries</li>
            <li>Sans publicité</li>
            <li>Lecture hors-ligne</li>
          </ul>
          <div className="payment-methods">
            <button className="btn btn-primary btn-full">S'abonner maintenant</button>
          </div>
        </div>

        <div className="pricing-card">
          <span className="pricing-icon">🏢</span>
          <h3>Entreprise</h3>
          <div className="pricing-price" style={{ fontSize: '1.5rem' }}>Sur devis</div>
          <ul className="pricing-features">
            <li>Nombre de licences illimité</li>
            <li>Tableau de bord RH</li>
            <li>Facturation mensuelle</li>
            <li>Support dédié</li>
          </ul>
          <div className="payment-methods">
            <button className="btn btn-ghost btn-full">Nous contacter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================
   CONNECT PAGE
   ======================================= */
function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); };
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil Connect</h2>
        <p>Devenez correspondant citoyen — soumettez vos alertes à notre rédaction</p>
      </div>
      <div className="connect-grid">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="success-panel">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3>Merci pour votre contribution !</h3>
              <p>Notre équipe de vérification a reçu votre alerte et l'examinera sous 2 heures.</p>
            </div>
          ) : (
            <form className="glass" style={{ padding: '2rem' }} onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Titre de l'information *</label>
                <input className="form-input" type="text" placeholder="Que se passe-t-il ?" required />
              </div>
              <div className="form-group">
                <label className="form-label">Description détaillée *</label>
                <textarea className="form-textarea" rows="5" placeholder="Décrivez précisément la situation..." required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Ville / Quartier *</label>
                  <input className="form-input" type="text" placeholder="Ex: Dakar, Plateau" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Catégorie</label>
                  <select className="form-input">
                    <option>Politique</option>
                    <option>Société</option>
                    <option>Économie</option>
                    <option>Sport</option>
                    <option>Environnement</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Photos / Vidéos (optionnel)</label>
                <div className="file-drop">
                  <span className="file-drop-icon">📎</span>
                  <p>Cliquez ou glissez vos fichiers ici</p>
                  <p style={{ fontSize: '0.8rem', marginTop: '0.3rem' }}>JPG, PNG, MP4 — max 50 Mo</p>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full"><Send size={18} /> Envoyer à la rédaction</button>
            </form>
          )}
        </div>

        {/* Tips */}
        <div>
          <h3 style={{ marginBottom: '1.2rem' }}>Comment bien signaler ?</h3>
          <div className="connect-tips">
            {[
              { icon: '🔍', title: 'Soyez précis', text: 'Donnez un maximum de détails : heure, lieu exact, personnes impliquées.' },
              { icon: '📸', title: 'Ajoutez des preuves', text: 'Photos et vidéos augmentent considérablement la crédibilité de votre alerte.' },
              { icon: '⚡', title: 'Soyez rapide', text: 'L\'actualité n\'attend pas. Signalez dès que vous êtes en sécurité.' },
              { icon: '✅', title: 'Vérification', text: 'Notre rédaction vérifiera votre information avant toute publication.' },
              { icon: '🔒', title: 'Confidentialité', text: 'Votre identité sera protégée si vous le souhaitez.' },
            ].map(t => (
              <div className="tip-card" key={t.title}>
                <span className="tip-icon">{t.icon}</span>
                <div><h4>{t.title}</h4><p>{t.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================================
   TV PAGE
   ======================================= */
function TVPage() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="fade-up">
      <div className="page-header">
        <h2>Soleil TV+</h2>
        <p>Streaming direct et VOD — l'actualité en images, sur tous vos écrans</p>
      </div>

      {/* Live player */}
      <div className="tv-player">
        <div className="tv-player-overlay">
          {!playing ? (
            <>
              <div className="play-circle" onClick={() => setPlaying(true)}>
                <Play size={28} fill="currentColor" />
              </div>
              <div className="tv-player-title">📺 Journal de 20H — En direct</div>
              <div className="tv-player-subtitle">Soleil TV • Dakar</div>
            </>
          ) : (
            <div style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📡</div>
              <div>Connexion au flux en cours...</div>
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'rgba(255,255,255,0.4)' }}>Dans une vraie app, le lecteur HLS/DASH serait ici</div>
            </div>
          )}
        </div>
        <div className="tv-bar">
          <div className="live-chip"><div className="live-dot" />DIRECT</div>
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Soleil TV — Journal de 20H</span>
        </div>
      </div>

      {/* VOD Grid */}
      <div className="section-header">
        <h3>Replays & Documentaires</h3>
      </div>
      <div className="video-grid">
        {VIDEOS.map(v => (
          <div className="video-card" key={v.id}>
            <div className="video-thumb">
              <span style={{ fontSize: '3rem' }}>{v.emoji}</span>
              <div className="video-play">
                <div className="video-play-btn"><Play size={20} fill="currentColor" /></div>
              </div>
              <div className="video-duration">{v.dur}</div>
            </div>
            <div className="video-info">
              <div style={{ marginBottom: '0.4rem' }}><CategoryChip cat={v.cat || 'Culture'} /></div>
              <h3>{v.title}</h3>
              <div className="video-meta">Soleil TV • {v.dur}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =======================================
   APP SHELL
   ======================================= */
const TABS = [
  { id: 'home',    label: 'Vue d\'ensemble',  icon: Sun,        badge: null },
  { id: 'news',    label: 'Le Soleil News',   icon: Newspaper,  badge: '4' },
  { id: 'archives',label: 'Soleil Archives',  icon: Archive,    badge: null },
  { id: 'premium', label: 'Soleil Premium',   icon: BookOpen,   badge: null },
  { id: 'connect', label: 'Soleil Connect',   icon: Users,      badge: null },
  { id: 'tv',      label: 'Soleil TV+',       icon: MonitorPlay,badge: 'LIVE' },
];

const TITLES = {
  home: 'Accueil', news: 'Le Soleil News', archives: 'Soleil Archives',
  premium: 'Soleil Premium', connect: 'Soleil Connect', tv: 'Soleil TV+',
};

export default function App() {
  const [tab, setTab] = useState('home');
  const [open, setOpen] = useState(false);

  const navigate = (id) => { setTab(id); setOpen(false); };

  return (
    <div className="app-layout">
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setOpen(o => !o)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      <div className={`overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Sun size={36} color="#f59e0b" />
          <div className="sidebar-logo-text">
            Le Soleil
            <small>Prototypes Digitaux</small>
          </div>
        </div>

        <span className="nav-section-label">Applications</span>
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} onClick={() => navigate(t.id)}>
              <Icon size={19} />
              {t.label}
              {t.badge && <span className="nav-badge">{t.badge}</span>}
            </button>
          );
        })}

        <div style={{ marginTop: 'auto', padding: '1rem 0.8rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>© 2026 Le Soleil — SSPP<br />Prototypes digitaux v1.0</p>
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="topbar">
          <span className="topbar-title">{TITLES[tab]}</span>
          <div className="topbar-meta">
            <div className="live-chip"><div className="live-dot" />LIVE</div>
            <Bell size={20} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
          </div>
        </header>

        <div className="page-content">
          {tab === 'home'     && <HomePage setTab={setTab} />}
          {tab === 'news'     && <NewsPage />}
          {tab === 'archives' && <ArchivesPage />}
          {tab === 'premium'  && <PremiumPage />}
          {tab === 'connect'  && <ConnectPage />}
          {tab === 'tv'       && <TVPage />}
        </div>
      </div>
    </div>
  );
}
