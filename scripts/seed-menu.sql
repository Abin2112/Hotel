-- Seed categories
INSERT INTO categories (name_en, name_hi, slug, display_order) VALUES
('Paneer Special', 'पनीर स्पेशल', 'paneer', 1),
('Dal', 'दाल', 'dal', 2),
('Sabji', 'सब्जी', 'sabji', 3),
('Rice', 'चावल', 'rice', 4),
('Roti & Bread', 'रोटी और ब्रेड', 'roti', 5),
('Breakfast', 'नाश्ता', 'breakfast', 6),
('Chinese', 'चाइनीज', 'chinese', 7),
('Snacks', 'स्नैक्स', 'snacks', 8),
('Salad', 'सलाद', 'salad', 9),
('Sweets & Dessert', 'मिठाई', 'sweets', 10),
('Mushroom', 'मशरूम', 'mushroom', 11),
('Thali', 'थाली', 'thali', 12)
ON CONFLICT DO NOTHING;

-- Seed menu items
-- Paneer Dishes (category_id = 1)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(1, 'Shahi Paneer', 'शाही पनीर', 180, true, true, true, 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400'),
(1, 'Paneer Butter Masala', 'पनीर बटर मसाला', 180, true, true, true, 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400'),
(1, 'Kadhai Paneer', 'कढ़ाई पनीर', 180, true, false, true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400'),
(1, 'Paneer Do Pyaza', 'पनीर दो प्याज़ा', 170, true, false, true, 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400'),
(1, 'Paneer Bhurji', 'पनीर भुर्जी', 160, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(1, 'Palak Paneer', 'पालक पनीर', 170, true, false, true, 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=400'),
(1, 'Matar Paneer', 'मटर पनीर', 160, true, false, true, 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400'),
(1, 'Paneer Tikka Masala', 'पनीर टिक्का मसाला', 200, true, true, true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400');

-- Dal (category_id = 2)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(2, 'Dal Tadka', 'दाल तड़का', 120, true, true, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(2, 'Dal Fry', 'दाल फ्राई', 110, true, false, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(2, 'Dal Makhani', 'दाल मखनी', 150, true, true, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(2, 'Chana Dal', 'चना दाल', 100, true, false, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(2, 'Yellow Dal', 'पीली दाल', 90, true, false, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400');

-- Sabji (category_id = 3)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(3, 'Aloo Gobi', 'आलू गोभी', 100, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Aloo Matar', 'आलू मटर', 90, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Bhindi Masala', 'भिंडी मसाला', 110, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Baingan Bharta', 'बैंगन भर्ता', 120, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Mix Veg', 'मिक्स वेज', 130, true, true, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Jeera Aloo', 'जीरा आलू', 80, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400'),
(3, 'Gobhi Matar', 'गोभी मटर', 100, true, false, true, 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400');

-- Rice (category_id = 4)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(4, 'Steamed Rice', 'सादा चावल', 60, true, false, true, 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400'),
(4, 'Jeera Rice', 'जीरा राइस', 80, true, false, true, 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400'),
(4, 'Veg Pulao', 'वेज पुलाव', 120, true, true, true, 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400'),
(4, 'Veg Biryani', 'वेज बिरयानी', 150, true, true, true, 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400'),
(4, 'Matar Pulao', 'मटर पुलाव', 100, true, false, true, 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400');

-- Roti & Bread (category_id = 5)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(5, 'Tandoori Roti', 'तंदूरी रोटी', 15, true, false, true, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'),
(5, 'Butter Naan', 'बटर नान', 40, true, true, true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'),
(5, 'Garlic Naan', 'गार्लिक नान', 50, true, false, true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'),
(5, 'Plain Paratha', 'सादा पराठा', 25, true, false, true, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'),
(5, 'Aloo Paratha', 'आलू पराठा', 50, true, true, true, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'),
(5, 'Lachha Paratha', 'लच्छा पराठा', 35, true, false, true, 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400'),
(5, 'Stuffed Kulcha', 'स्टफ्ड कुल्चा', 45, true, false, true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400');

-- Breakfast (category_id = 6)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(6, 'Poori Sabji', 'पूरी सब्जी', 60, true, true, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(6, 'Chole Bhature', 'छोले भटूरे', 80, true, true, true, 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400'),
(6, 'Aloo Puri', 'आलू पूरी', 50, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(6, 'Samosa', 'समोसा', 20, true, false, true, 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'),
(6, 'Kachori', 'कचौरी', 25, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400');

-- Chinese (category_id = 7)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(7, 'Veg Fried Rice', 'वेज फ्राइड राइस', 120, true, true, true, 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400'),
(7, 'Veg Noodles', 'वेज नूडल्स', 120, true, false, true, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400'),
(7, 'Manchurian', 'मंचूरियन', 140, true, true, true, 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400'),
(7, 'Chilli Paneer', 'चिल्ली पनीर', 160, true, false, true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400'),
(7, 'Spring Roll', 'स्प्रिंग रोल', 100, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(7, 'Hakka Noodles', 'हक्का नूडल्स', 130, true, false, true, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400');

-- Snacks (category_id = 8)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(8, 'French Fries', 'फ्रेंच फ्राइज', 80, true, false, true, 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400'),
(8, 'Aloo Tikki', 'आलू टिक्की', 40, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(8, 'Bread Pakora', 'ब्रेड पकोड़ा', 30, true, false, true, 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400'),
(8, 'Paneer Pakora', 'पनीर पकोड़ा', 100, true, true, true, 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400');

-- Salad (category_id = 9)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(9, 'Green Salad', 'हरा सलाद', 50, true, false, true, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'),
(9, 'Onion Salad', 'प्याज़ सलाद', 30, true, false, true, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'),
(9, 'Mix Salad', 'मिक्स सलाद', 60, true, false, true, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400');

-- Sweets & Dessert (category_id = 10)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(10, 'Gulab Jamun', 'गुलाब जामुन', 50, true, true, true, 'https://images.unsplash.com/photo-1666190050371-50f43f87f4a8?w=400'),
(10, 'Rasgulla', 'रसगुल्ला', 50, true, false, true, 'https://images.unsplash.com/photo-1666190050371-50f43f87f4a8?w=400'),
(10, 'Kheer', 'खीर', 60, true, true, true, 'https://images.unsplash.com/photo-1666190050371-50f43f87f4a8?w=400'),
(10, 'Ice Cream', 'आइस क्रीम', 40, true, false, true, 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400');

-- Mushroom (category_id = 11)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(11, 'Mushroom Masala', 'मशरूम मसाला', 160, true, true, true, 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400'),
(11, 'Kadhai Mushroom', 'कढ़ाई मशरूम', 170, true, false, true, 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400'),
(11, 'Mushroom Do Pyaza', 'मशरूम दो प्याज़ा', 160, true, false, true, 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400');

-- Thali (category_id = 12)
INSERT INTO menu_items (category_id, name_en, name_hi, price, is_veg, is_featured, is_available, image_url) VALUES
(12, 'Veg Thali', 'वेज थाली', 150, true, true, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(12, 'Special Thali', 'स्पेशल थाली', 200, true, true, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400'),
(12, 'Paneer Thali', 'पनीर थाली', 220, true, false, true, 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400');
