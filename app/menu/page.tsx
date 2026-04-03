import { MenuContent } from '@/components/menu/menu-content';
import { getCategories, getMenuItems } from '@/lib/db';

export const revalidate = 3600;

export const metadata = {
  title: 'Menu | Purvanchal Dhaba & Family Restaurant',
  description: 'Explore our full menu of authentic North Indian vegetarian dishes. From Paneer to Dal, Roti to Rice, we have it all!',
};

export default async function MenuPage() {
  const [categories, menuItems] = await Promise.all([
    getCategories(),
    getMenuItems(),
  ]);

  return <MenuContent categories={categories} menuItems={menuItems} />;
}
