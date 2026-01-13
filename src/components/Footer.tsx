
import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'white', marginTop: '4rem', padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Centro Estético Toledo</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--secondary)' }}><Instagram size={24} /></a>
              <a href="#" style={{ color: 'var(--secondary)' }}><Facebook size={24} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} /> Rua das Flores, 123
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> (11) 99999-9999
              </span>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Links Úteis</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sobre Nós</a>
              <a href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Política de Privacidade</a>
              <a href="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Termos de Uso</a>
            </div>
          </div>

        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Centro Estético Toledo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
