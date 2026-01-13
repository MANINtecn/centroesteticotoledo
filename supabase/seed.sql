-- Insert Dummy Products
INSERT INTO products (name, description, price, image_url, category, stock, active) VALUES
('Ração Premium Dog', 'Nutrição completa para cães adultos', 149.90, 'https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=2070&auto=format&fit=crop', 'food', 50, true),
('Brinquedo Mordedor', 'Resistente e divertido', 29.90, 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop', 'toys', 30, true),
('Cama Confort', 'O melhor descanso para seu pet', 189.00, 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1974&auto=format&fit=crop', 'accessories', 10, true),
('Coleira Ajustável', 'Segurança e estilo', 45.50, 'https://images.unsplash.com/photo-1605639147291-8f0d5be10323?q=80&w=1974&auto=format&fit=crop', 'accessories', 40, true),
('Petisco Natural', 'Saboroso e saudável', 15.00, 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?q=80&w=1974&auto=format&fit=crop', 'food', 100, true);

-- Insert Dummy Services
INSERT INTO services (name, description, price, duration_minutes, active) VALUES
('Banho e Tosa', 'Serviço completo de higiene e estética', 80.00, 90, true),
('Consulta Veterinária', 'Check-up geral de saúde', 120.00, 30, true),
('Vacinação', 'Aplicação de vacinas anuais', 90.00, 15, true),
('Hidratação', 'Tratamento intensivo para a pelagem', 50.00, 45, true);

-- Insert Dummy Appointments Slots (for future logic, conceptual)
-- In a real app, slots would be generated dynamically or based on availability constraints.
