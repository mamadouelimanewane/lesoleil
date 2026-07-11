import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Send, Sparkles, MessageSquare, Search } from 'lucide-react';

const SUGGESTIONS = [
  "Résume-moi l'actualité de la journée",
  "Que dit le nouveau plan de relance économique ?",
  "Qui a gagné le match des Lions hier ?",
  "Traduis-moi le résumé en Wolof"
];

export default function IAPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Bonjour ! Je suis Soleil IA, votre assistant intelligent. Je connais toute l\'actualité du Sénégal et les archives du journal. Que souhaitez-vous savoir aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Ceci est un prototype. Dans la version finale, je serai connecté aux archives et aux articles récents du Soleil pour vous fournir une réponse précise basée sur notre journalisme.";
      
      if (text.toLowerCase().includes('wolof')) {
        botResponse = "Nuyu naa la ! Lii prototype la rek. Ci kàddug wolof, dinaa mëna tontu sa laaj yi te jële ko ci xibaar yi ñu bind ci Le Soleil.";
      } else if (text.toLowerCase().includes('résume') || text.toLowerCase().includes('resume')) {
        botResponse = "Voici le résumé de la journée :\n1. Lancement d'un plan de relance de 500Mds FCFA.\n2. L'équipe nationale est en stage à Saly.\n3. Opération Dakar Propre avec 500 bénévoles.\nSouhaitez-vous plus de détails sur l'un de ces sujets ?";
      }

      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fade-up" style={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header" style={{ marginBottom: '1rem', paddingBottom: '1rem' }}>
        <h2>Soleil IA <Sparkles size={20} style={{ color: 'var(--primary)', verticalAlign: 'middle', marginLeft: '0.5rem' }} /></h2>
        <p>Discutez avec l'actualité et explorez nos archives grâce à l'intelligence artificielle</p>
      </div>

      <div className="chat-container glass" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
        
        {/* Messages Area */}
        <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map(msg => (
            <div key={msg.id} style={{ display: 'flex', gap: '1rem', alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              {msg.sender === 'bot' && (
                <div className="chat-avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={20} />
                </div>
              )}
              
              <div className={`chat-bubble ${msg.sender}`} style={{ 
                padding: '1rem 1.2rem', 
                borderRadius: '16px', 
                background: msg.sender === 'user' ? 'linear-gradient(135deg, var(--primary), var(--primary-dark))' : 'rgba(255,255,255,0.05)',
                color: msg.sender === 'user' ? '#000' : 'var(--text-main)',
                border: msg.sender === 'bot' ? '1px solid var(--border)' : 'none',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
                borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                whiteSpace: 'pre-line',
                lineHeight: 1.5
              }}>
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="chat-avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <User size={20} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '1rem', alignSelf: 'flex-start' }}>
              <div className="chat-avatar" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.2)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bot size={20} />
              </div>
              <div className="chat-bubble bot typing" style={{ padding: '1rem 1.2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', display: 'flex', gap: '0.4rem', alignItems: 'center', borderTopLeftRadius: '4px' }}>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></div>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.2s' }}></div>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        <div className="chat-suggestions" style={{ padding: '0 1.5rem', display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {SUGGESTIONS.map((s, i) => (
            <button key={i} className="chat-suggestion btn btn-ghost btn-sm" onClick={() => handleSend(s)} style={{ whiteSpace: 'nowrap', borderRadius: '20px', padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
              <MessageSquare size={14} style={{ marginRight: '0.4rem' }}/> {s}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar" style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="form-input" 
              style={{ width: '100%', paddingLeft: '2.5rem', borderRadius: '24px' }} 
              placeholder="Posez une question sur l'actualité ou les archives..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            />
          </div>
          <button 
            className="btn btn-primary" 
            style={{ borderRadius: '50%', width: '48px', height: '48px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
