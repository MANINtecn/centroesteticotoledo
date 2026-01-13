-- Add 'active' column to products if it doesn't exist
ALTER TABLE products ADD COLUMN IF NOT EXISTS active boolean DEFAULT true;

-- Add 'active' column to services if it doesn't exist
ALTER TABLE services ADD COLUMN IF NOT EXISTS active boolean DEFAULT true;
