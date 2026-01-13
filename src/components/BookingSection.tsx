
import { useState } from 'react';
import { Clock, Calendar as CalendarIcon } from 'lucide-react';
import catBg from '../assets/Background 1.png';

// Dummy data for available slots
const AVAILABLE_SLOTS = [
  { id: 1, time: '08:00', label: 'Manhã' },
  { id: 2, time: '09:00', label: 'Manhã' },
  { id: 3, time: '10:00', label: 'Manhã' },
  { id: 4, time: '11:00', label: 'Manhã' },
  { id: 5, time: '13:00', label: 'Tarde' },
  { id: 6, time: '14:00', label: 'Tarde' },
  { id: 7, time: '15:00', label: 'Tarde' },
  { id: 8, time: '16:00', label: 'Tarde' },
  { id: 9, time: '17:00', label: 'Tarde' },
  { id: 10, time: '18:00', label: 'Noite' },
];

export default function BookingSection() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <section style={{ 
      position: 'relative', 
      padding: '0 0 4rem 0', // Removed top padding to glue to Hero
      backgroundColor: '#f8f9fa',
      overflow: 'hidden' 
    }}>
      <div className="container-wide">
        <div className="booking-grid" style={{ 
          display: 'grid', 
          gap: '2rem', 
          alignItems: 'center',
          minHeight: '500px',
          position: 'relative' // Anchor for absolute children
        }}>
          
          {/* Left Content - Text & Slots */}
          <div style={{ zIndex: 10, width: '100%', maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block', 
              color: 'var(--primary)', 
              fontWeight: 600, 
              fontSize: '0.875rem',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              AGENDE ONLINE
            </span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', maxWidth: '500px' }}>
              Seu Pet prontinho no melhor horário para você
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '450px' }}>
              Confira os horários disponíveis hoje e garanta o tratamento de rei ou rainha que seu amiguinho merece.
            </p>

            {/* Slots Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', 
              gap: '1rem',
              width: '100%',
              marginBottom: '2rem'
            }}>
              {AVAILABLE_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`glass-panel ${selectedSlot === slot.id ? 'active-slot' : ''}`}
                  style={{
                    padding: '1rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: selectedSlot === slot.id ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                    backgroundColor: selectedSlot === slot.id ? 'rgba(230, 126, 34, 0.1)' : 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                >
                  <Clock size={16} style={{ margin: '0 auto 0.5rem', color: 'var(--primary)' }} />
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--secondary)' }}>{slot.time}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{slot.label}</div>
                  
                  {/* Selection Indicator */}
                  {selectedSlot === slot.id && (
                    <div style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '16px',
                      height: '16px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '50%',
                      border: '2px solid white'
                    }} />
                  )}
                </button>
              ))}
            </div>

            <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              <CalendarIcon size={20} /> Confirmar Agendamento
            </button>
          </div>


          
        </div>
      </div>

      {/* Right Content - Cat Background Image - Flush to viewport right */}
      <div style={{ 
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50%',
        height: '120%', 
        maxWidth: '600px',
        backgroundImage: `url(${catBg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <style>{`
        .booking-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .booking-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }
        /* Hover effect for slots */
        button.glass-panel:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </section>
  );
}
