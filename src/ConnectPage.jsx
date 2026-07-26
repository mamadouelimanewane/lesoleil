import React, { useState } from 'react';
import { Send, MapPin, Camera, CheckCircle2, ChevronLeft, Lightbulb, ShieldCheck, Users } from 'lucide-react';

export default function ConnectPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ title: '', location: '', description: '' });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="fade-up" style={{ maxWidth: '520px', margin: '0 auto' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => setSent(false)} style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronLeft size={16} /> Envoyer un autre signalement
        </button>
        <div className="success-panel">
          <CheckCircle2 size={40} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
          <h3>Signalement transmis à la rédaction</h3>
          <p style={{ color: 'var(--text-sub)' }}>Merci {form.title ? `pour "${form.title}"` : ''}. Un journaliste du réseau Soleil Connect va vérifier votre information sous 24h.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div className="page-header">
        <h2 style={{ color: 'var(--text-main)' }}>Soleil Connect</h2>
        <p style={{ color: 'var(--text-muted)' }}>Réseau de correspondants citoyens — signalez un événement dans votre localité</p>
      </div>

      <div className="connect-grid">
        <form className="glass" style={{ padding: '2rem' }} onSubmit={submit}>
          <div className="form-group">
            <label className="form-label">Titre du signalement</label>
            <input
              className="form-input"
              placeholder="Ex: Coupure d'eau depuis 3 jours à Yeumbeul"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Localité</label>
            <input
              className="form-input"
              placeholder="Ex: Yeumbeul Nord, Dakar"
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-textarea"
              rows={4}
              placeholder="Décrivez ce que vous constatez sur place..."
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Photo ou vidéo (optionnel)</label>
            <div className="file-drop">
              <Camera size={24} style={{ margin: '0 auto 0.3rem', display: 'block' }} color="var(--text-muted)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cliquez ou glissez un fichier ici</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <Send size={16} /> Envoyer à la rédaction
          </button>
        </form>

        <div className="connect-tips">
          <div className="tip-card">
            <span className="tip-icon"><MapPin size={20} color="#ef4444" /></span>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>Couverture nationale</h4>
              <p style={{ color: 'var(--text-muted)' }}>Plus de 400 correspondants actifs dans les 14 régions du Sénégal.</p>
            </div>
          </div>
          <div className="tip-card">
            <span className="tip-icon"><ShieldCheck size={20} color="#ef4444" /></span>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>Vérification systématique</h4>
              <p style={{ color: 'var(--text-muted)' }}>Chaque signalement est recoupé par un journaliste avant toute publication.</p>
            </div>
          </div>
          <div className="tip-card">
            <span className="tip-icon"><Users size={20} color="#ef4444" /></span>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>Anonymat protégé</h4>
              <p style={{ color: 'var(--text-muted)' }}>Votre identité n'est jamais publiée sans votre consentement explicite.</p>
            </div>
          </div>
          <div className="tip-card">
            <span className="tip-icon"><Lightbulb size={20} color="#ef4444" /></span>
            <div>
              <h4 style={{ color: 'var(--text-main)' }}>Un bon signalement</h4>
              <p style={{ color: 'var(--text-muted)' }}>Précisez le lieu exact, la date des faits et joignez une preuve visuelle si possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
