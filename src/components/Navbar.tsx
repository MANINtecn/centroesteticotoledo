
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="glass-panel" style={{ 
      position: 'sticky', 
      top: '1rem', 
      margin: '0 1rem', 
      zIndex: 50,
      padding: '0.75rem 1.5rem'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>
          <img src="/src/assets/logo.webp" alt="Centro Estético Toledo Logo" style={{ height: '48px', width: 'auto', borderRadius: '50%' }} />
          <span>Centro Estético Toledo</span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Início</Link>
          <Link to="/products" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Produtos</Link>
          <Link to="/booking" className="btn btn-primary">
            <Calendar size={18} />
            Agendar
          </Link>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
            <ShoppingCart size={24} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Início</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Produtos</Link>
          <Link to="/booking" onClick={() => setIsMenuOpen(false)} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Agendar</Link>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
