import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, Calendar, Tag } from 'lucide-react';

const EDITIONS = [
  { id: 1, year: 1970, title: 'La nouvelle voix de la Nation sénégalaise est née', date: '20 Mai 1970', tag: 'Fondation' },
  { id: 2, year: 1980, title: 'Dakar accueille le premier Sommet de la Francophonie en Afrique', date: '14 Déc 1980', tag: 'Diplomatie' },
  { id: 3, year: 1988, title: 'Élections présidentielles : le pays retient son souffle', date: '02 Mars 1988', tag: 'Politique' },
  { id: 4, year: 1994, title: 'Dévaluation du Franc CFA : ce qui change pour les Sénégalais', date: '12 Jan 1994', tag: 'Économie' },
  { id: 5, year: 2000, title: 'Alternance historique : le Sénégal tourne une page politique', date: '20 Mars 2000', tag: 'Politique' },
  { id: 6, year: 2002, title: 'Naufrage du Joola : le pays en deuil national', date: '27 Sep 2002', tag: 'Société' },
  { id: 7, year: 2012, title: 'Second tour de la présidentielle : le verdict des urnes', date: '26 Mars 2012', tag: 'Politique' },
  { id: 8, year: 2018, title: 'Premier gisement de gaz offshore confirmé au large de Saint-Louis', date: '05 Juin 2018', tag: 'Économie' },
  { id: 9, year: 2021, title: 'Le TER relie enfin Dakar à Diamniadio', date: '27 Déc 2021', tag: 'Infrastructures' },
  { id: 10, year: 2024, title: 'Nouvelle Assemblée nationale : les résultats définitifs', date: '17 Nov 2024', tag: 'Politique' },
];

export default function ArchivesPage() {
  const [query, setQuery] = useState('');
  const [edition, setEdition] = useState(null);

  const results = useMemo(() => {
    if (!query.trim()) return EDITIONS;
    const q = query.toLowerCase();
    return EDITIONS.filter(e => e.title.toLowerCase().includes(q) || e.tag.toLowerCase().includes(q) || String(e.year).includes(q));
  }, [query]);

  if (edition) {
    return (
      <div className="fade-up article-view">
        <button className="btn btn-ghost btn-sm" onClick={() => setEdition(null)} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour aux archives
        </button>
        <span className="category-chip chip-economie">{edition.tag}</span>
        <h1 style={{ color: 'var(--text-main)' }}>{edition.title}</h1>
        <div className="news-time" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Calendar size={14} /> Édition du {edition.date}
        </div>
        <div className="article-hero-img" style={{ fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 800, color: 'rgba(245,158,11,0.6)' }}>{edition.year}</div>
        <div className="article-body">
          <p>Cet article, numérisé à partir des archives physiques du Soleil, est disponible en texte intégral grâce au moteur OCR de Mémoire de la Nation.</p>
          <p>Précision de reconnaissance : 99.8% · Édition n°{edition.id.toString().padStart(4, '0')} · Fonds d'archives vérifié.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Archives</h2>
        <p style={{ color: 'var(--text-muted)' }}>Recherche en texte intégral dans 54 ans de patrimoine — depuis 1970</p>
      </div>

      <div className="search-wrap">
        <div className="search-input-wrap">
          <Search size={18} />
          <input
            className="search-input"
            placeholder="Rechercher un événement, une année, un thème..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{results.length} édition{results.length > 1 ? 's' : ''} trouvée{results.length > 1 ? 's' : ''}</p>

      <div className="archives-grid">
        {results.map(e => (
          <div key={e.id} className="archive-card" onClick={() => setEdition(e)}>
            <div className="archive-cover">
              <div className="archive-cover-lines" />
              <span className="archive-cover-year">{e.year}</span>
            </div>
            <div className="archive-info">
              <h3 style={{ color: 'var(--text-main)' }}>{e.title}</h3>
              <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Tag size={12} /> {e.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
