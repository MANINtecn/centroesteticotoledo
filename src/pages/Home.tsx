
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import BookingSection from '../components/BookingSection';

export default function Home() {
  return (
    <>
      <section style={{ 
        position: 'relative', 
        padding: '6rem 0 2rem 0', // Reduced bottom padding
        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFFFFF 100%)',
        overflow: 'hidden'
      }}>
        {/* ... Hero Content ... */}
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid" style={{ display: 'grid', gap: '2rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div style={{ maxWidth: '600px' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '0.5rem 1rem', 
                borderRadius: '2rem', 
                backgroundColor: 'rgba(230, 126, 34, 0.1)', 
                color: 'var(--primary)', 
                fontWeight: 600, 
                fontSize: '0.875rem',
                marginBottom: '1.5rem'
              }}>
                ✨ Cuidado Premium para seu Pet
              </span>
              <h1 style={{ marginBottom: '1.5rem', fontSize: '3.5rem', lineHeight: 1.1 }}>
                Amor e Cuidado que seu Pet Merece
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '0' }}>
                Serviços de banho, tosa e produtos exclusivos. Agende online e proporcione o melhor para seu melhor amigo.
              </p>
              {/* Buttons removed as requested */}
            </div>

            {/* Right Content - Carousel */}
            <div style={{ 
              position: 'relative',
              width: '100%',
              minWidth: 0 // CRITICAL: Prevents grid blow-out
            }}>
              <ProductCarousel />
            </div>
          </div>
        </div>
        
        {/* Background Effect */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '-5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(230,126,34,0.05) 0%, rgba(255,255,255,0) 70%)', 
          borderRadius: '50%',
          zIndex: 1
        }} />
      </section>

      <BookingSection />

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Star size={32} color="var(--primary)" />, title: 'Profissionais Qualificados', text: 'Equipe treinada para oferecer o melhor tratamento.' },
              { icon: <Clock size={32} color="var(--primary)" />, title: 'Agendamento Flexível', text: 'Escolha o melhor horário para você e seu pet.' },
              { icon: <Shield size={32} color="var(--primary)" />, title: 'Segurança Garantida', text: 'Ambiente monitorado e seguro para todos os pets.' }
            ].map((feature, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
