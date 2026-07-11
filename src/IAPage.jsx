import React, { useState } from 'react';
import { Send, UploadCloud, FileText, ChevronLeft, Bot, User, Check, RefreshCw } from 'lucide-react';

export default function IAPage() {
  const [view, setView] = useState('home'); // home, document
  const [analyzing, setAnalyzing] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 3000);
  };

  if (view === 'document') {
    return (
      <div className="fade-up">
        <button className="btn btn-ghost btn-sm" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Retour au Chat
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Faux uploader */}
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border)' }}>
            <UploadCloud size={64} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Glissez un document PDF</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Rapport, loi, ou ancienne édition du Soleil</p>
            <button className="btn btn-primary" onClick={startAnalysis} disabled={analyzing} style={{ background: '#06b6d4', color: '#000', border: 'none' }}>
              {analyzing ? (
                <><RefreshCw size={18} className="spin" style={{ marginRight: '0.5rem' }} /> Analyse en cours...</>
              ) : (
                <>Simuler l'Analyse</>
              )}
            </button>
          </div>

          {/* Résultat */}
          <div className="glass" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '2rem', background: '#06b6d4', color: '#000', padding: '0.2rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>Résumé IA</div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', opacity: analyzing ? 0.3 : 1, transition: '0.3s' }}>
              <FileText size={24} color="#06b6d4" />
              <div>
                <h4 style={{ color: 'var(--text-main)' }}>Plan_Senegal_Emergent_2026.pdf</h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>45 pages condensées en 3 points</div>
              </div>
            </div>

            <div style={{ opacity: analyzing ? 0.3 : 1, transition: '0.3s', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(6,182,212,0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #06b6d4' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>1. Souveraineté Alimentaire</strong>
                <span style={{ color: 'var(--text-sub)' }}>L'accent est mis sur l'irrigation de la vallée du fleuve Sénégal avec un budget de 120 Mds.</span>
              </div>
              <div style={{ background: 'rgba(6,182,212,0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #06b6d4' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>2. Transition Numérique</strong>
                <span style={{ color: 'var(--text-sub)' }}>Objectif 100% des démarches administratives digitalisées d'ici fin 2026.</span>
              </div>
              <div style={{ background: 'rgba(6,182,212,0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #06b6d4' }}>
                <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>3. Emploi des Jeunes</strong>
                <span style={{ color: 'var(--text-sub)' }}>Création de 5 zones économiques spéciales (ZES) pour absorber 50 000 jeunes par an.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up" style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h2 style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Bot color="#06b6d4" /> Soleil IA</h2>
          <p style={{ color: 'var(--text-muted)' }}>Assistant conversationnel branché sur les archives nationales.</p>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={() => setView('document')} style={{ border: '1px solid #06b6d4', color: '#06b6d4' }}>
          Mode Analyse de Document
        </button>
      </div>

      <div className="chat-container glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden' }}>
        <div className="chat-messages" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="chat-avatar" style={{ width: '36px', height: '36px', background: '#06b6d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={20} color="#000" />
            </div>
            <div className="chat-bubble bot" style={{ background: 'rgba(128,128,128,0.1)', padding: '1rem 1.5rem', borderRadius: '0 16px 16px 16px', color: 'var(--text-main)', maxWidth: '80%' }}>
              Bonjour ! Je suis l'IA du Soleil. Je connais toute l'histoire du Sénégal depuis 1970 grâce à la numérisation de nos archives. Que voulez-vous savoir ?
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row-reverse' }}>
            <div className="chat-avatar" style={{ width: '36px', height: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={20} color="var(--text-main)" />
            </div>
            <div className="chat-bubble user" style={{ background: '#06b6d4', color: '#000', padding: '1rem 1.5rem', borderRadius: '16px 0 16px 16px', maxWidth: '80%' }}>
              Que disait Le Soleil le lendemain de la victoire du Sénégal à la CAN 2021 ?
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="chat-avatar" style={{ width: '36px', height: '36px', background: '#06b6d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={20} color="#000" />
            </div>
            <div className="chat-bubble bot" style={{ background: 'rgba(128,128,128,0.1)', padding: '1rem 1.5rem', borderRadius: '0 16px 16px 16px', color: 'var(--text-main)', maxWidth: '80%' }}>
              <p style={{ margin: '0 0 1rem 0' }}>L'édition du 7 février 2022 titrait en une : <strong>"HISTORIQUE ! L'ÉTOILE EST LÀ"</strong>.</p>
              <p style={{ margin: 0 }}>Le journal consacrait 12 pages spéciales à l'événement, décrivant la nuit de liesse à Dakar et la réaction de Sadio Mané après son tir au but décisif face à l'Égypte.</p>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <Check size={14} color="#06b6d4" /> Source vérifiée : Archives Le Soleil, Édition N° 15512
              </div>
            </div>
          </div>

        </div>

        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
          <div className="chat-suggestions" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            <button className="chat-suggestion" style={{ padding: '0.5rem 1rem', background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '20px', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>Résume le discours de Senghor de 1974</button>
            <button className="chat-suggestion" style={{ padding: '0.5rem 1rem', background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '20px', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>Comment évolue le prix de l'arachide depuis 2000 ?</button>
          </div>
          <div className="chat-input-bar" style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="text" placeholder="Posez une question à l'IA..." style={{ flex: 1, padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-main)' }} />
            <button className="btn btn-primary" style={{ background: '#06b6d4', color: '#000', border: 'none', padding: '0 1.5rem', borderRadius: '12px' }}>
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
