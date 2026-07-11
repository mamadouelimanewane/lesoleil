import React, { useState } from 'react';
import { GraduationCap, BookOpen, PenTool, Award, ChevronRight, CheckCircle } from 'lucide-react';

export default function EducationPage() {
  const [mode, setMode] = useState('student'); // student, teacher

  return (
    <div className="fade-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            <GraduationCap size={14} /> Partenariat Ministère de l'Éducation
          </div>
          <h2 style={{ fontSize: '2rem' }}>Soleil Éducation</h2>
          <p style={{ color: 'var(--text-muted)' }}>L'actualité comme outil pédagogique pour les collèges et lycées.</p>
        </div>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '0.3rem', borderRadius: '12px' }}>
          <button className={`btn ${mode === 'student' ? 'btn-primary' : 'btn-ghost'} btn-sm`} onClick={() => setMode('student')} style={{ borderRadius: '8px' }}>Espace Élève</button>
          <button className={`btn ${mode === 'teacher' ? 'btn-primary' : 'btn-ghost'} btn-sm`} onClick={() => setMode('teacher')} style={{ borderRadius: '8px' }}>Espace Professeur</button>
        </div>
      </div>

      {mode === 'student' ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.05 }}>
              <BookOpen size={200} />
            </div>
            <span className="badge-featured" style={{ background: '#8b5cf6', color: '#fff', marginBottom: '1rem', display: 'inline-block' }}>Leçon du Jour</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Histoire : L'indépendance du Sénégal (4 Avril 1960)</h3>
            <p style={{ color: 'var(--text-sub)', marginBottom: '1.5rem', maxWidth: '600px' }}>Lis l'article original publié par Le Soleil le lendemain de l'indépendance, puis réponds au quiz pour valider tes acquis.</p>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #8b5cf6', marginBottom: '1.5rem', fontFamily: 'serif', fontSize: '1.1rem', lineHeight: 1.8 }}>
              "Dakar, en ce 4 avril 1960, s'éveille sous les couleurs vibrantes de la liberté. L'hymne national, fraîchement composé, résonne dans les rues de la capitale..."
            </div>
            
            <button className="btn btn-primary" style={{ background: '#8b5cf6', border: 'none' }}><PenTool size={18} /> Commencer le Quiz IA</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Award size={24} color="#f59e0b" />
                <h4 style={{ margin: 0 }}>Mes Progrès</h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}><span>Français (Lecture)</span><span>85%</span></div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '1rem' }}><div style={{ width: '85%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}><span>Histoire & Géo</span><span>60%</span></div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}><div style={{ width: '60%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Tableau de bord Enseignant (Lycée LSS)</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Devoir Actif</th>
                <th>Taux de complétion</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>3ème A</td>
                <td>Lecture : Article COP28</td>
                <td><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '50px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}><div style={{ width: '90%', height: '100%', background: '#10b981', borderRadius: '3px' }}></div></div> 90%</div></td>
                <td><button className="btn btn-ghost btn-sm">Noter</button></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Terminale L</td>
                <td>Dissertation : Discours Senghor 1971</td>
                <td><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '50px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}><div style={{ width: '45%', height: '100%', background: '#f59e0b', borderRadius: '3px' }}></div></div> 45%</div></td>
                <td><button className="btn btn-ghost btn-sm">Relancer</button></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#8b5cf6', border: 'none' }}>+ Créer une leçon depuis un article</button>
        </div>
      )}
    </div>
  );
}
