import { neon } from '@neondatabase/serverless';

// Database client for Neon PostgreSQL
const sql = neon(process.env.DATABASE_URL!);

export interface Category {
  id: number;
  name_en: string;
  name_hi: string;
  slug: string;
  display_order: number;
}

export interface MenuItem {
  id: number;
  category_id: number;
  name_en: string;
  name_hi: string;
  price: number;
  image_url: string | null;
  is_veg: boolean;
  is_featured: boolean;
  is_available: boolean;
}

export interface MenuItemWithCategory extends MenuItem {
  category_name_en: string;
  category_name_hi: string;
  category_slug: string;
}

export async function getCategories(): Promise<Category[]> {
  const result = await sql`
    SELECT id, name_en, name_hi, slug, display_order 
    FROM categories 
    ORDER BY display_order
  `;
  return result as Category[];
}

export async function getMenuItems(): Promise<MenuItemWithCategory[]> {
  const result = await sql`
    SELECT 
      m.id,
      m.category_id,
      m.name_en,
      m.name_hi,
      m.price,
      m.image_url,
      m.is_veg,
      m.is_featured,
      m.is_available,
      c.name_en as category_name_en,
      c.name_hi as category_name_hi,
      c.slug as category_slug
    FROM menu_items m
    JOIN categories c ON m.category_id = c.id
    WHERE m.is_available = true
    ORDER BY c.display_order, m.name_en
  `;
  return result as MenuItemWithCategory[];
}

export async function getFeaturedItems(): Promise<MenuItemWithCategory[]> {
  const result = await sql`
    SELECT 
      m.id,
      m.category_id,
      m.name_en,
      m.name_hi,
      m.price,
      m.image_url,
      m.is_veg,
      m.is_featured,
      m.is_available,
      c.name_en as category_name_en,
      c.name_hi as category_name_hi,
      c.slug as category_slug
    FROM menu_items m
    JOIN categories c ON m.category_id = c.id
    WHERE m.is_featured = true AND m.is_available = true
    ORDER BY m.name_en
    LIMIT 6
  `;
  return result as MenuItemWithCategory[];
}

export async function getMenuItemsByCategory(categorySlug: string): Promise<MenuItem[]> {
  const result = await sql`
    SELECT m.* 
    FROM menu_items m
    JOIN categories c ON m.category_id = c.id
    WHERE c.slug = ${categorySlug} AND m.is_available = true
    ORDER BY m.name_en
  `;
  return result as MenuItem[];
}
