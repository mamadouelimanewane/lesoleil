import React, { useState } from 'react';
import { Newspaper, Archive, MonitorPlay, Users, BookOpen, Sun, Search, Play, Send, Smartphone, ChevronLeft } from 'lucide-react';
import './App.css';

const MOCK_NEWS = [
  { id: 1, time: '1 heure', category: 'Politique', title: 'Le gouvernement annonce un nouveau plan économique', excerpt: 'Découvrez les détails du nouveau plan de relance qui vise à dynamiser l\'économie locale d\'ici 2028.' },
  { id: 2, time: '3 heures', category: 'Sport', title: 'L\'équipe nationale se prépare pour le grand tournoi', excerpt: 'Les Lions sont en camp d\'entraînement intensif à Saly pour la prochaine compétition continentale.' },
  { id: 3, time: '5 heures', category: 'Société', title: 'Nouvelle initiative citoyenne pour la propreté urbaine', excerpt: 'Des centaines de jeunes se sont mobilisés ce week-end pour nettoyer les artères de la capitale.' }
];

const MOCK_ARCHIVES = [
  { id: 1970, title: 'Édition Spéciale 1970 : Création', desc: 'Le tout premier numéro du journal Le Soleil.' },
  { id: 1981, title: 'L\'Alternance Politique (1981)', desc: 'Couverture historique de la passation de pouvoir.' },
  { id: 2002, title: 'L\'Épopée de 2002', desc: 'Retour sur la performance historique de l\'équipe nationale.' },
  { id: 2012, title: 'Élections 2012', desc: 'Les résultats complets des élections présidentielles.' }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedNews, setSelectedNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tabs = [
    { id: 'home', name: 'Vue d\'ensemble', icon: <Sun size={20} /> },
    { id: 'news', name: 'Le Soleil News', icon: <Newspaper size={20} /> },
    { id: 'archives', name: 'Soleil Archives', icon: <Archive size={20} /> },
    { id: 'premium', name: 'Soleil Premium', icon: <BookOpen size={20} /> },
    { id: 'connect', name: 'Soleil Connect', icon: <Users size={20} /> },
    { id: 'tv', name: 'Soleil TV+', icon: <MonitorPlay size={20} /> },
  ];

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());
  
  const filteredArchives = MOCK_ARCHIVES.filter(a => 
    a.title.toLowerCase().includes(searchQuery) || a.id.toString().includes(searchQuery)
  );

  const handleConnectSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <div className="header">
              <h1>Le Soleil Digital</h1>
              <p>Prototypes interactifs des applications pour la transformation numérique.</p>
            </div>
            <div className="grid">
              {tabs.slice(1).map(tab => (
                <div className="glass-panel card" key={tab.id} onClick={() => setActiveTab(tab.id)} style={{cursor: 'pointer'}}>
                  <div className="card-icon">{tab.icon}</div>
                  <h3 className="card-title">{tab.name}</h3>
                  <p className="card-desc">Découvrez l'interface interactive de {tab.name}.</p>
                  <button className="btn">Explorer</button>
                </div>
              ))}
            </div>
          </>
        );
      case 'news':
        return (
          <div className="glass-panel mockup-container" style={{padding: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              {selectedNews && (
                <button className="btn" onClick={() => setSelectedNews(null)} style={{padding: '0.5rem', borderRadius: '50%'}}>
                  <ChevronLeft size={20} />
                </button>
              )}
              <h2>Le Soleil News (Live Feed)</h2>
            </div>
            
            {selectedNews ? (
              <div style={{marginTop: '2rem', animation: 'fadeIn 0.3s ease'}}>
                <div style={{width: '100%', height: '300px', background: '#334155', borderRadius: '12px', marginBottom: '2rem'}}></div>
                <div className="news-meta">{selectedNews.category} • Il y a {selectedNews.time}</div>
                <h1 style={{margin: '1rem 0'}}>{selectedNews.title}</h1>
                <p style={{color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8'}}>{selectedNews.excerpt}</p>
                <p style={{marginTop: '2rem', color: 'var(--text-muted)'}}>Ici viendrait le corps complet de l'article avec des images, des citations, et des tweets intégrés...</p>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', maxWidth: '800px'}}>
                {MOCK_NEWS.map(news => (
                  <div className="news-item" key={news.id} onClick={() => setSelectedNews(news)} style={{cursor: 'pointer'}}>
                    <div className="news-img"></div>
                    <div className="news-content">
                      <div className="news-meta">Il y a {news.time} • {news.category}</div>
                      <h3>{news.title}</h3>
                      <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>{news.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'archives':
        return (
          <div className="glass-panel mockup-container" style={{padding: '2rem'}}>
            <h2>Soleil Archives (Recherche Intelligente)</h2>
            <p style={{color: 'var(--text-muted)'}}>Recherchez dans 50 ans d'histoire sénégalaise.</p>
            
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Ex: 1981, Coupe du monde, Élections..." 
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="btn"><Search size={20} /> Chercher</button>
            </div>
            
            <div className="archive-grid">
              {filteredArchives.length > 0 ? filteredArchives.map(archive => (
                <div className="archive-item" key={archive.id} style={{animation: 'fadeIn 0.3s ease'}}>
                  <img src={`https://placehold.co/300x400/222/555?text=Une+${archive.id}`} alt={`Une de ${archive.id}`} />
                  <h3>{archive.title}</h3>
                  <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.5rem 0'}}>{archive.desc}</p>
                  <button className="btn" style={{marginTop: '1rem', width: '100%'}}>Consulter le PDF</button>
                </div>
              )) : (
                <p style={{color: 'var(--text-muted)'}}>Aucune archive trouvée pour "{searchQuery}".</p>
              )}
            </div>
          </div>
        );
      case 'premium':
        return (
          <div className="glass-panel mockup-container" style={{padding: '2rem'}}>
            <h2>Soleil Premium (Kiosque Digital)</h2>
            
            <div style={{display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap'}}>
              <div className="glass-panel" style={{flex: '1 1 300px', padding: '2rem', textAlign: 'center'}}>
                <BookOpen size={48} style={{color: 'var(--primary)', marginBottom: '1rem'}} />
                <h3>Édition du Jour</h3>
                <p style={{margin: '1rem 0'}}>Lisez le journal complet en format PDF interactif.</p>
                <h2 style={{color: 'white', margin: '1rem 0'}}>500 FCFA</h2>
                <button className="btn" style={{width: '100%', marginBottom: '1rem', background: '#ff6600', color: 'white'}}>
                  <Smartphone size={20} /> Payer par Orange Money
                </button>
                <button className="btn" style={{width: '100%', background: '#1cb0f6', color: 'white'}}>
                  <Smartphone size={20} /> Payer par Wave
                </button>
              </div>
              <div className="glass-panel" style={{flex: '1 1 300px', padding: '2rem', textAlign: 'center', border: '1px solid var(--primary)'}}>
                <div style={{background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem', display: 'inline-block', fontWeight: 'bold'}}>RECOMMANDÉ</div>
                <h3>Abonnement Mensuel</h3>
                <p style={{margin: '1rem 0'}}>Accès illimité à tous les e-papers et suppléments + sans publicité.</p>
                <h2 style={{color: 'var(--primary)', margin: '1.5rem 0'}}>5000 FCFA / mois</h2>
                <button className="btn" style={{width: '100%'}}>S'abonner maintenant</button>
              </div>
            </div>
          </div>
        );
      case 'connect':
        return (
          <div className="glass-panel mockup-container" style={{padding: '2rem'}}>
            <h2>Soleil Connect (Journalisme Citoyen)</h2>
            <p style={{color: 'var(--text-muted)'}}>Soumettez des alertes locales. Notre rédaction les vérifiera.</p>
            
            <form onSubmit={handleConnectSubmit} style={{maxWidth: '600px', marginTop: '2rem'}}>
              {formSubmitted ? (
                <div style={{padding: '2rem', background: 'rgba(37, 211, 102, 0.1)', color: '#25d366', borderRadius: '12px', textAlign: 'center', border: '1px solid #25d366'}}>
                  <h3 style={{color: '#25d366', marginBottom: '0.5rem'}}>Merci pour votre contribution !</h3>
                  <p>Votre alerte a été envoyée à la rédaction pour vérification.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label>Titre de l'information</label>
                    <input type="text" placeholder="Que se passe-t-il ?" required />
                  </div>
                  <div className="form-group">
                    <label>Description détaillée</label>
                    <textarea rows="4" placeholder="Décrivez la situation avec précision..." required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Lieu</label>
                    <input type="text" placeholder="Ville, quartier..." required />
                  </div>
                  <button type="submit" className="btn"><Send size={20} /> Envoyer à la rédaction</button>
                </>
              )}
            </form>
          </div>
        );
      case 'tv':
        return (
          <div className="glass-panel mockup-container" style={{padding: '2rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2>Soleil TV+</h2>
              <span style={{background: 'red', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div style={{width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'pulse 1.5s infinite'}}></div> DIRECT
              </span>
            </div>
            
            <div style={{width: '100%', height: '400px', background: '#000', borderRadius: '12px', marginTop: '1rem', position: 'relative', display: 'flex', alignItems: 'center', justify-content: 'center'}}>
               <Play size={64} style={{color: 'rgba(255,255,255,0.5)', cursor: 'pointer'}} />
               <div style={{position: 'absolute', bottom: '1rem', left: '1rem', color: 'white', fontWeight: 'bold'}}>Journal de 20H</div>
            </div>

            <h3 style={{marginTop: '2rem'}}>Replays & Documentaires</h3>
            <div className="video-grid" style={{marginTop: '1rem'}}>
              {[1, 2, 3].map(i => (
                <div className="video-card" key={i}>
                  <div className="video-thumb">
                    <div className="play-btn"><Play size={24} /></div>
                  </div>
                  <div className="video-info">
                    <div className="news-meta">Documentaire • 45 min</div>
                    <h3>Le Sénégal de Demain : Enquête Exclusive #{i}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">
          <Sun size={32} color="#f59e0b" />
          Le Soleil
        </div>
        <nav className="nav-menu">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedNews(null);
              }}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </nav>
      </aside>
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
