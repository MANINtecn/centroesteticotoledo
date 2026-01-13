
import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Product } from '../types';

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      if (data) {
        // If we don't have enough products for a smooth loop, duplicate them
        // For the carousel effect to work well, we need at least 5-6 items explicitly, 
        // or we duplicate the existing ones multiple times.
        let fetchedProducts = data as Product[];
        
        // Ensure we have enough items to scroll
        if (fetchedProducts.length > 0 && fetchedProducts.length < 5) {
           fetchedProducts = [...fetchedProducts, ...fetchedProducts, ...fetchedProducts]; // Triple if very few
        } else if (fetchedProducts.length > 0) {
           fetchedProducts = [...fetchedProducts, ...fetchedProducts]; // Double for seamless loop
        }
        
        setProducts(fetchedProducts);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-4">Carregando novidades...</div>;
  }

  if (products.length === 0) {
    return null; // Don't show if no products
  }

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0' }}>
      <div 
        style={{ 
          overflow: 'hidden', 
          // Mask: Fade on left (exit), Sharp on right (entry) for clear alignment
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 100%)'
        }}
      >
        <div className="animate-scroll">
          {products.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="glass-panel"
              style={{ 
                width: '180px', // Fixed width for consistent loop
                minWidth: '180px',
                padding: '0.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              <div style={{ width: '100%', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <img 
                  src={product.image_url || 'https://via.placeholder.com/180?text=Sem+Imagem'} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/180?text=Petshop+Lilian';
                  }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{product.name}</h4>
                <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem' }}>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                </p>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ 
                  width: '100%', 
                  padding: '0.4rem', 
                  fontSize: '0.8rem', 
                  marginTop: 'auto' 
                }}
              >
                <ShoppingCart size={14} /> Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
