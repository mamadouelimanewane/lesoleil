import React, { useState } from 'react';
import { GraduationCap, BookOpen, PenTool, Award, ChevronRight, CheckCircle, ChevronLeft } from 'lucide-react';

export default function EducationPage() {
  const [mode, setMode] = useState('student'); // student, teacher
  const [view, setView] = useState('home'); // home, quiz
  const [quizStep, setQuizStep] = useState(0);

  if (view === 'quiz') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => { setView('home'); setQuizStep(0); }} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Quitter le Quiz
        </button>

        <div className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {quizStep === 0 && (
            <div className="fade-up">
              <span className="badge-featured" style={{ background: '#8b5cf6', color: '#fff', marginBottom: '1rem', display: 'inline-block' }}>Question 1/3</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-main)' }}>D'après l'article du Soleil, que s'est-il passé le 4 Avril 1960 ?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <button className="btn btn-ghost" onClick={() => setQuizStep(1)} style={{ width: '100%', maxWidth: '400px', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem', border: '1px solid var(--border)' }}>A) La création de l'Union Africaine</button>
                <button className="btn btn-ghost" onClick={() => setQuizStep(1)} style={{ width: '100%', maxWidth: '400px', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem', border: '1px solid var(--border)', background: 'rgba(139,92,246,0.1)' }}>B) L'indépendance du Sénégal</button>
                <button className="btn btn-ghost" onClick={() => setQuizStep(1)} style={{ width: '100%', maxWidth: '400px', padding: '1rem', justifyContent: 'center', fontSize: '1.1rem', border: '1px solid var(--border)' }}>C) La coupe d'Afrique des Nations</button>
              </div>
            </div>
          )}
          {quizStep === 1 && (
            <div className="fade-up">
              <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#10b981' }}>Excellente réponse !</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-sub)', marginBottom: '2rem' }}>Vous avez bien identifié l'événement historique couvert par Le Soleil.</p>
              <div style={{ background: 'rgba(16,185,129,0.1)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', color: 'var(--text-main)' }}>
                <strong>Explication de l'IA :</strong> Le 4 Avril 1960 marque l'indépendance officielle du Sénégal, suite au transfert des compétences par la France, marquant la fin de la fédération du Mali peu après.
              </div>
              <button className="btn btn-primary" onClick={() => { setView('home'); setQuizStep(0); }} style={{ background: '#8b5cf6', border: 'none' }}>Terminer la leçon</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <GraduationCap size={14} /> Partenariat Ministère de l'Éducation
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Soleil Éducation</h2>
          <p style={{ color: 'var(--text-muted)' }}>L'actualité comme outil pédagogique pour les collèges et lycées.</p>
        </div>
        <div style={{ display: 'flex', background: 'rgba(128,128,128,0.1)', padding: '0.3rem', borderRadius: '12px' }}>
          <button className={`btn ${mode === 'student' ? 'btn-primary' : 'btn-ghost'} btn-sm`} onClick={() => setMode('student')} style={{ borderRadius: '8px', background: mode === 'student' ? '#8b5cf6' : '', border: 'none', color: mode === 'student' ? '#fff' : 'var(--text-main)' }}>Espace Élève</button>
          <button className={`btn ${mode === 'teacher' ? 'btn-primary' : 'btn-ghost'} btn-sm`} onClick={() => setMode('teacher')} style={{ borderRadius: '8px', background: mode === 'teacher' ? '#8b5cf6' : '', border: 'none', color: mode === 'teacher' ? '#fff' : 'var(--text-main)' }}>Espace Professeur</button>
        </div>
      </div>

      {mode === 'student' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.05 }}>
              <BookOpen size={200} />
            </div>
            <span className="badge-featured" style={{ background: '#8b5cf6', color: '#fff', marginBottom: '1rem', display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>Leçon du Jour</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Histoire : L'indépendance du Sénégal (4 Avril 1960)</h3>
            <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem', maxWidth: '600px' }}>Lis l'article original publié par Le Soleil le lendemain de l'indépendance, puis réponds au quiz pour valider tes acquis.</p>
            
            <div style={{ background: 'rgba(128,128,128,0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '1.5rem', fontFamily: 'serif', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
              "Dakar, en ce 4 avril 1960, s'éveille sous les couleurs vibrantes de la liberté. L'hymne national, fraîchement composé, résonne dans les rues de la capitale..."
            </div>
            
            <button className="btn btn-primary" onClick={() => setView('quiz')} style={{ background: '#8b5cf6', border: 'none', color: '#fff' }}><PenTool size={18} /> Commencer le Quiz IA</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Award size={24} color="#f59e0b" />
                <h4 style={{ margin: 0, color: 'var(--text-main)' }}>Mes Progrès</h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', color: 'var(--text-sub)' }}><span>Français (Lecture)</span><span>85%</span></div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(128,128,128,0.2)', borderRadius: '3px', marginBottom: '1rem' }}><div style={{ width: '85%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem', color: 'var(--text-sub)' }}><span>Histoire & Géo</span><span>60%</span></div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(128,128,128,0.2)', borderRadius: '3px' }}><div style={{ width: '60%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Tableau de bord Enseignant (Lycée LSS)</h3>
          <table className="data-table" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Classe</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Devoir Actif</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Taux de complétion</th>
                <th style={{ padding: '1rem', color: 'var(--text-muted)' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>3ème A</td>
                <td style={{ padding: '1rem', color: 'var(--text-sub)' }}>Lecture : Article COP28</td>
                <td style={{ padding: '1rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-sub)' }}><div style={{ width: '50px', height: '6px', background: 'rgba(128,128,128,0.2)', borderRadius: '3px' }}><div style={{ width: '90%', height: '100%', background: '#10b981', borderRadius: '3px' }}></div></div> 90%</div></td>
                <td style={{ padding: '1rem' }}><button className="btn btn-ghost btn-sm" style={{ border: '1px solid var(--border)' }}>Noter</button></td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>Terminale L</td>
                <td style={{ padding: '1rem', color: 'var(--text-sub)' }}>Dissertation : Discours Senghor 1971</td>
                <td style={{ padding: '1rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-sub)' }}><div style={{ width: '50px', height: '6px', background: 'rgba(128,128,128,0.2)', borderRadius: '3px' }}><div style={{ width: '45%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div> 45%</div></td>
                <td style={{ padding: '1rem' }}><button className="btn btn-ghost btn-sm" style={{ border: '1px solid var(--border)' }}>Relancer</button></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#8b5cf6', border: 'none', color: '#fff' }}>+ Créer une leçon depuis un article</button>
        </div>
      )}
    </div>
  );
}
