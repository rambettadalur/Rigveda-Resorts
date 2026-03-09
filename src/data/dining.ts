import { DiningOption } from '@/types'

export const diningOptions: DiningOption[] = [
  {
    name: 'Shubha — The Vegetarian Restaurant',
    description: 'A serene dining space dedicated to pure vegetarian cuisine. Shubha brings together the vibrant flavours of South and North India, celebrating seasonal produce and time-honoured recipes in a warm, welcoming atmosphere.',
    cuisine: 'Pure Vegetarian, South Indian, North Indian',
    mealTimes: ['Breakfast', 'Lunch', 'Dinner'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=640&fit=crop&q=80',
    menuHighlights: [
      'Karnataka thali with seasonal vegetables',
      'Crispy dosas and fluffy idli-vada',
      'Paneer dishes and North Indian curries',
      'Fresh cold-pressed juices',
      'Traditional sweets and desserts',
      'Seasonal specials from local farms',
    ],
  },
  {
    name: 'Agni — The Non-Vegetarian Restaurant',
    description: 'Named after the god of fire, Agni is where bold flavours and expert grilling techniques come together. From smoky tandoor creations to coastal seafood and robust meat curries, every plate is a celebration of culinary craftsmanship.',
    cuisine: 'Multi-cuisine, Seafood, Grills, Indian',
    mealTimes: ['Lunch', 'Dinner'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=640&fit=crop&q=80',
    menuHighlights: [
      'Grilled fish with coastal spices',
      'Mutton biryani slow-cooked to perfection',
      'Tandoori chicken and seekh kebabs',
      'Prawn and crab preparations',
      'Rich meat curries and gravies',
      'Live grill station on weekends',
    ],
  },
  {
    name: 'Hoysala — Traditional Karnataka Kitchen',
    description: 'A homage to the heritage and culinary legacy of Karnataka, Hoysala serves authentic regional recipes passed down through generations. Savour dishes from the Malnad hills, coastal Udupi, and the heart of Mysuru in one extraordinary kitchen.',
    cuisine: 'Authentic Karnataka, Heritage Recipes',
    mealTimes: ['Lunch', 'Dinner'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=640&fit=crop&q=80',
    menuHighlights: [
      "Bisi Bele Bath — Karnataka's comfort classic",
      'Ragi mudde with sambar and greens',
      'Delicate Neer dosa with coconut chutney',
      'Coorg-style pork curry',
      'Udupi-style sambhar and rasam',
      'Traditional payasam and holige for dessert',
    ],
  },
]

// Additional dining information
export const diningInfo = {
  timings: {
    breakfast: '7:30 AM - 10:30 AM',
    lunch: '12:30 PM - 3:00 PM',
    dinner: '7:00 PM - 10:30 PM',
    allDay: '7:00 AM - 10:00 PM',
  },
  cuisinePhilosophy: 'At Rigveda Resorts, we believe in farm-to-table dining. We source fresh vegetables from local farms, coffee from nearby plantations, and use traditional recipes passed down through generations. Our chefs are trained in both authentic Karnataka cuisine and international dishes, ensuring every palate is satisfied.',
  specialDiets: [
    'Vegetarian',
    'Vegan',
    'Jain',
    'Gluten-free',
    'Dairy-free',
  ],
  note: 'Please inform us of any dietary restrictions or allergies in advance, and our chefs will be happy to accommodate your needs.',
}
