import React, { useState } from 'react';
import { ChevronLeft, Clock } from 'lucide-react';

const ARTICLES = [
  {
    id: 1, category: 'economie', chip: 'chip-economie', icon: '📈',
    title: 'Le Sénégal annonce un plan de relance de 500 milliards CFA pour le secteur agricole',
    excerpt: 'Le ministre de l\'Agriculture a présenté ce mardi un vaste programme d\'investissement destiné à moderniser les filières rizicole et arachidière d\'ici 2028.',
    time: 'Il y a 12 min',
    body: [
      'Le gouvernement sénégalais a dévoilé mardi un plan de relance agricole doté d\'une enveloppe de 500 milliards de francs CFA, destiné à moderniser les filières stratégiques du pays d\'ici 2028.',
      'Ce programme, présenté conjointement par les ministères de l\'Agriculture et des Finances, vise en priorité la filière rizicole avec un objectif d\'autosuffisance nationale d\'ici trois ans, ainsi que la filière arachidière, historiquement au cœur de l\'économie sénégalaise.',
      'Les autorités misent sur la mécanisation des exploitations familiales, l\'accès facilité au crédit agricole et la construction de nouvelles unités de transformation dans les régions de Saint-Louis, Kaolack et Fatick.',
      'Les acteurs du secteur privé, réunis en table ronde la semaine dernière, ont salué l\'initiative tout en appelant à une mise en œuvre rapide et à une meilleure coordination avec les coopératives locales.',
    ]
  },
  {
    id: 2, category: 'politique', chip: 'chip-politique', icon: '🏛️',
    title: 'Conseil des ministres : adoption du projet de loi sur la souveraineté numérique',
    excerpt: 'Le texte, très attendu, encadre l\'hébergement des données publiques sur le territoire national et renforce la cybersécurité de l\'État.',
    time: 'Il y a 47 min',
    body: [
      'Réuni ce mercredi au Palais de la République, le Conseil des ministres a adopté le projet de loi relatif à la souveraineté numérique, un texte fondateur pour la stratégie digitale de l\'État sénégalais.',
      'La loi impose l\'hébergement des données publiques sensibles sur le territoire national et crée une agence dédiée à la cybersécurité des infrastructures critiques.',
      'Elle sera transmise à l\'Assemblée nationale pour examen dans les prochaines semaines, avec un calendrier d\'application prévu sur trois ans.',
    ]
  },
  {
    id: 3, category: 'sport', chip: 'chip-sport', icon: '⚽',
    title: 'Lions du Sénégal : la liste des 23 pour les éliminatoires dévoilée',
    excerpt: 'Le sélectionneur a convoqué un groupe rajeuni pour affronter le Rwanda et le Soudan dans un mois décisif pour la qualification.',
    time: 'Il y a 1h',
    body: [
      'Le sélectionneur national a dévoilé ce jeudi la liste des 23 joueurs retenus pour les deux prochaines rencontres qualificatives, marquées par le retour de plusieurs cadres et l\'intégration de trois nouveaux profils issus du championnat local.',
      'Les Lions affronteront le Rwanda à Dakar avant de se déplacer au Soudan quatre jours plus tard, deux rencontres jugées décisives dans la course à la qualification.',
    ]
  },
  {
    id: 4, category: 'societe', chip: 'chip-societe', icon: '🏥',
    title: 'Ouverture de trois nouveaux centres de santé dans la région de Kaolack',
    excerpt: 'Ces infrastructures permettront de réduire de moitié le temps d\'accès aux soins pour près de 80 000 habitants des zones rurales environnantes.',
    time: 'Il y a 2h',
    body: [
      'Trois centres de santé communautaires ont été inaugurés ce lundi dans la région de Kaolack, dans le cadre du programme national de couverture sanitaire universelle.',
      'Ces structures, équipées de maternités et de blocs d\'urgence, devraient bénéficier à environ 80 000 habitants qui devaient auparavant parcourir plus de 20 km pour accéder à des soins.',
    ]
  },
  {
    id: 5, category: 'culture', chip: 'chip-culture', icon: '🎭',
    title: 'Le Festival de Jazz de Saint-Louis célèbre sa 32e édition avec un plateau international',
    excerpt: 'Des artistes venus du Mali, de Cuba et des États-Unis se produiront pendant cinq jours dans la ville historique.',
    time: 'Il y a 4h',
    body: [
      'La 32e édition du Festival de Jazz de Saint-Louis s\'ouvrira ce week-end avec un plateau réunissant des artistes sénégalais, maliens, cubains et américains.',
      'L\'événement, qui attire chaque année plusieurs milliers de visiteurs, devrait générer d\'importantes retombées économiques pour les hôtels et restaurants de la ville historique.',
    ]
  },
];

export default function NewsPage() {
  const [article, setArticle] = useState(null);

  if (article) {
    return (
      <div className="fade-up article-view">
        <button className="btn btn-ghost btn-sm" onClick={() => setArticle(null)} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour au fil d'actualité
        </button>
        <span className={`category-chip ${article.chip}`}>{article.category}</span>
        <h1 style={{ color: 'var(--text-main)' }}>{article.title}</h1>
        <div className="news-time" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Clock size={14} /> {article.time} · Le Soleil
        </div>
        <div className="article-hero-img">{article.icon}</div>
        <div className="article-body">
          {article.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ color: 'var(--text-main)' }}>Le Soleil News</h2>
          <p style={{ color: 'var(--text-muted)' }}>Fil d'actualité en temps réel — mis à jour en continu</p>
        </div>
        <div className="live-chip"><div className="live-dot" />EN DIRECT</div>
      </div>

      <div className="news-list">
        {ARTICLES.map(a => (
          <div key={a.id} className="news-card" onClick={() => setArticle(a)}>
            <div className="news-thumb">{a.icon}</div>
            <div className="news-card-body">
              <span className={`category-chip ${a.chip}`}>{a.category}</span>
              <h3 style={{ color: 'var(--text-main)' }}>{a.title}</h3>
              <p style={{ color: 'var(--text-sub)' }}>{a.excerpt}</p>
              <div className="news-time" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={12} /> {a.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
