import { Product } from '@/components/ProductCard';

export const products: Product[] = [
  // Hotels
  {
    id: 'hotel-1',
    name: 'Luxury Beach Resort',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    category: 'hotels',
    description: 'Experience luxury at its finest with our beachfront resort featuring world-class amenities, spa services, and breathtaking ocean views.'
  },
  {
    id: 'hotel-2',
    name: 'Mountain View Hotel',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    category: 'hotels',
    description: 'Nestled in the mountains, this hotel offers stunning views, hiking trails, and a peaceful retreat from city life.'
  },
  {
    id: 'hotel-3',
    name: 'City Center Business Hotel',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400',
    category: 'hotels',
    description: 'Perfect for business travelers, located in the heart of the city with modern amenities and conference facilities.'
  },

  // Clothing - Men's
  {
    id: 'clothing-men-1',
    name: 'Men\'s Designer Cotton T-Shirt',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'clothing',
    subcategory: 'men',
    description: 'Premium cotton t-shirt with modern design, perfect for casual wear and comfort.'
  },
  {
    id: 'clothing-men-2',
    name: 'Men\'s Formal Business Suit',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    category: 'clothing',
    subcategory: 'men',
    description: 'Elegant business suit tailored for professionals, made with high-quality fabric.'
  },
  {
    id: 'clothing-men-3',
    name: 'Men\'s Casual Denim Jeans',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'clothing',
    subcategory: 'men',
    description: 'Comfortable and stylish denim jeans, perfect for everyday wear.'
  },

  // Clothing - Women's
  {
    id: 'clothing-women-1',
    name: 'Women\'s Floral Summer Dress',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
    category: 'clothing',
    subcategory: 'women',
    description: 'Beautiful floral summer dress, perfect for casual outings and special occasions.'
  },
  {
    id: 'clothing-women-2',
    name: 'Women\'s Professional Blazer',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
    category: 'clothing',
    subcategory: 'women',
    description: 'Elegant professional blazer for business meetings and formal events.'
  },
  {
    id: 'clothing-women-3',
    name: 'Women\'s Skinny Jeans',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
    category: 'clothing',
    subcategory: 'women',
    description: 'Comfortable skinny jeans with perfect fit and premium denim quality.'
  },

  // Clothing - Children's
  {
    id: 'clothing-kids-1',
    name: 'Kids Cartoon T-Shirt',
    price: 599,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400',
    category: 'clothing',
    subcategory: 'children',
    description: 'Fun cartoon printed t-shirt for kids, soft cotton material and vibrant colors.'
  },
  {
    id: 'clothing-kids-2',
    name: 'Kids School Uniform Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400',
    category: 'clothing',
    subcategory: 'children',
    description: 'Complete school uniform set with shirt, pants/skirt, and tie.'
  },
  {
    id: 'clothing-kids-3',
    name: 'Kids Party Dress',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400',
    category: 'clothing',
    subcategory: 'children',
    description: 'Adorable party dress for special occasions and celebrations.'
  },

  // Pets - Food and Accessories
  {
    id: 'pet-1',
    name: 'Premium Dog Food 5kg',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400',
    category: 'pets',
    description: 'Nutritious premium dog food with all essential vitamins and minerals for your furry friend.'
  },
  {
    id: 'pet-2',
    name: 'Cat Scratching Post',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1545529468-42764ef8c85f?w=400',
    category: 'pets',
    description: 'Multi-level scratching post to keep your cat entertained and their claws healthy.'
  },
  {
    id: 'pet-3',
    name: 'Pet Carrier Bag',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
    category: 'pets',
    description: 'Comfortable and secure pet carrier for safe transportation of your beloved pets.'
  },
  
  // Pets for Sale
  {
    id: 'pet-4',
    name: 'Golden Retriever Puppy',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
    category: 'pets',
    description: 'Healthy and friendly Golden Retriever puppy, 8 weeks old, vaccinated and ready for a loving home.'
  },
  {
    id: 'pet-5',
    name: 'Persian Cat',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400',
    category: 'pets',
    description: 'Beautiful Persian cat, 6 months old, well-trained and perfect for apartment living.'
  },
  {
    id: 'pet-6',
    name: 'German Shepherd Puppy',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400',
    category: 'pets',
    description: 'Intelligent German Shepherd puppy, great for families and security, fully vaccinated.'
  },
  {
    id: 'pet-7',
    name: 'Siamese Cat',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400',
    category: 'pets',
    description: 'Elegant Siamese cat with striking blue eyes, very social and affectionate.'
  },

  // Printed Items
  {
    id: 'print-1',
    name: 'Custom T-Shirt Printing',
    price: 799,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400',
    category: 'printed',
    description: 'Personalized t-shirt printing with your own design, logo, or text. Upload your image for custom printing.'
  },
  {
    id: 'print-2',
    name: 'Custom Photo Mug',
    price: 599,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
    category: 'printed',
    description: 'Personalized ceramic mug with your favorite photo or design. Perfect for gifts or personal use.'
  },
  {
    id: 'print-3',
    name: 'Custom Phone Back Cover',
    price: 499,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    category: 'printed',
    description: 'Durable phone back cover with your custom design. Compatible with all major phone models.'
  },
  {
    id: 'print-4',
    name: 'Custom Business Cards (500pcs)',
    price: 899,
    image: 'https://images.unsplash.com/photo-1586953983833-7460fb50c60e?w=400',
    category: 'printed',
    description: 'Professional business cards with premium printing quality and custom design options.'
  },
  {
    id: 'print-5',
    name: 'Custom Canvas Print',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    category: 'printed',
    description: 'High-quality canvas prints of your favorite photos, perfect for home decoration. Upload your image.'
  },
  {
    id: 'print-6',
    name: 'Custom Hoodie Printing',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1556821840-3a9fbc82ea41?w=400',
    category: 'printed',
    description: 'Comfortable hoodie with your custom design printed on front or back. Upload your artwork.'
  },

  // Medical Insurance - Health Plans
  {
    id: 'medical-health-1',
    name: 'Basic Health Insurance Plan',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    category: 'medical',
    subcategory: 'health',
    description: 'Comprehensive basic health insurance covering essential medical expenses and hospitalization up to ₹5 lakhs.'
  },
  {
    id: 'medical-health-2',
    name: 'Premium Family Health Plan',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
    category: 'medical',
    subcategory: 'health',
    description: 'Complete family health insurance with extensive coverage including critical illness benefits up to ₹25 lakhs.'
  },
  {
    id: 'medical-health-3',
    name: 'Senior Citizen Health Plan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400',
    category: 'medical',
    subcategory: 'health',
    description: 'Specialized health insurance plan designed for senior citizens with age-specific benefits and pre-existing condition coverage.'
  },

  // Insurance - Vehicle (Car & Bike)
  {
    id: 'insurance-vehicle-1',
    name: 'Comprehensive Car Insurance',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400',
    category: 'medical',
    subcategory: 'vehicle',
    description: 'Complete car insurance with third-party liability, own damage, and add-on covers like zero depreciation.'
  },
  {
    id: 'insurance-vehicle-2',
    name: 'Bike Insurance Plan',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'medical',
    subcategory: 'vehicle',
    description: 'Affordable bike insurance covering accidents, theft, and third-party damages with roadside assistance.'
  },
  {
    id: 'insurance-vehicle-3',
    name: 'Commercial Vehicle Insurance',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    category: 'medical',
    subcategory: 'vehicle',
    description: 'Insurance for commercial vehicles including goods carrier and passenger transport vehicles.'
  },

  // Agriculture Products
  {
    id: 'agriculture-1',
    name: 'Organic Seeds Variety Pack',
    price: 599,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    category: 'agriculture',
    description: 'Premium organic seeds collection for vegetables, herbs, and flowers. Perfect for home gardening.'
  },
  {
    id: 'agriculture-2',
    name: 'Bio Fertilizer 5kg',
    price: 899,
    image: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=400',
    category: 'agriculture',
    description: 'Organic bio fertilizer enriched with essential nutrients for healthy plant growth.'
  },
  {
    id: 'agriculture-3',
    name: 'Drip Irrigation Kit',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
    category: 'agriculture',
    description: 'Complete drip irrigation system for efficient water management in gardens and farms.'
  },
  {
    id: 'agriculture-4',
    name: 'Garden Tool Set',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
    category: 'agriculture',
    description: 'Professional garden tool set including spade, rake, pruner, and watering can.'
  },

  // Electronics
  {
    id: 'electronics-1',
    name: 'Wireless Bluetooth Headphones',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.'
  },
  {
    id: 'electronics-2',
    name: 'Smart Fitness Watch',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'electronics',
    description: 'Advanced fitness tracker with heart rate monitor, GPS, and smartphone connectivity.'
  },
  {
    id: 'electronics-3',
    name: 'Wireless Power Bank 20000mAh',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1609592363549-8b9e98ba61bb?w=400',
    category: 'electronics',
    description: 'High-capacity wireless power bank with fast charging and multiple device support.'
  },
  {
    id: 'electronics-4',
    name: 'Smart Home Security Camera',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400',
    category: 'electronics',
    description: '1080p HD security camera with night vision, motion detection, and mobile app control.'
  },

  // Refurbished Vehicles
  {
    id: 'vehicles-1',
    name: 'Honda City 2018 - Refurbished',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1549399476-ec5b84fdb8fc?w=400',
    category: 'vehicles',
    description: 'Well-maintained Honda City 2018 model with low mileage, fully serviced and certified.'
  },
  {
    id: 'vehicles-2',
    name: 'Royal Enfield Classic 350 - Refurbished',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    category: 'vehicles',
    description: 'Refurbished Royal Enfield Classic 350 in excellent condition with new parts and warranty.'
  },
  {
    id: 'vehicles-3',
    name: 'Maruti Swift 2019 - Refurbished',
    price: 550000,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400',
    category: 'vehicles',
    description: 'Maruti Swift 2019 model, single owner, well-maintained with complete service history.'
  },
  {
    id: 'vehicles-4',
    name: 'Yamaha FZ 2020 - Refurbished',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1609592363549-8b9e98ba61bb?w=400',
    category: 'vehicles',
    description: 'Yamaha FZ 2020 model bike in pristine condition with minimal usage and full documentation.'
  },

  // Fitness
  {
    id: 'fitness-1',
    name: 'Adjustable Dumbbell Set',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    category: 'fitness',
    description: 'Professional adjustable dumbbell set with multiple weight options for home workouts.'
  },
  {
    id: 'fitness-2',
    name: 'Yoga Mat Premium',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400',
    category: 'fitness',
    description: 'Non-slip premium yoga mat with extra cushioning for comfortable practice sessions.'
  },
  {
    id: 'fitness-3',
    name: 'Resistance Bands Set',
    price: 899,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    category: 'fitness',
    description: 'Complete resistance bands set with multiple resistance levels for strength training.'
  },
  {
    id: 'fitness-4',
    name: 'Treadmill Compact',
    price: 35999,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    category: 'fitness',
    description: 'Compact foldable treadmill perfect for home use with digital display and heart rate monitor.'
  }
];