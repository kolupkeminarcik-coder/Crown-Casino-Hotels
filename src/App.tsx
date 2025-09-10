import React from 'react';
import { Star, MapPin, Phone, Mail, Clock, Wifi, Car, Utensils, Waves, Dumbbell, Gift, Camera, Users, Crown, Sparkles } from 'lucide-react';

function App() {
  const featuredHotels = [
    {
      id: 1,
      name: "The Ritz London",
      location: "Piccadilly, London",
      rating: 4.9,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The epitome of British luxury, featuring the exclusive Club 23 private gaming salon in the heart of Mayfair.",
      rooms: 136,
      casinoSize: "Private Members Only",
      amenities: ["Michelin Star Dining", "Palm Court", "Rivoli Bar", "Spa Services", "Concierge"],
      quickFacts: "Historic luxury • Private gaming • Royal heritage • Afternoon tea",
      price: "From £850/night",
      featured: true,
      deals: "VIP Gaming Package - Includes private table access"
    },
    {
      id: 2,
      name: "Genting Hotel Birmingham",
      location: "Resorts World Birmingham",
      rating: 4.7,
      image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A contemporary resort featuring one of the UK's largest casinos, world-class dining, and luxury accommodation.",
      rooms: 178,
      casinoSize: "50,000 sq ft",
      amenities: ["24/7 Casino", "Multiple Restaurants", "Spa", "Shopping", "Entertainment Venues"],
      quickFacts: "Modern luxury • Largest UK casino • Shopping centre • Entertainment complex",
      price: "From £199/night",
      featured: true,
      deals: "Casino Credit Package - £50 gaming credit included"
    },
    {
      id: 3,
      name: "The Savoy London",
      location: "The Strand, London",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Legendary Art Deco hotel offering sophisticated gaming experiences steps from Covent Garden and West End theatres.",
      rooms: 267,
      casinoSize: "Exclusive Gaming Room",
      amenities: ["Gordon Ramsay Savoy Grill", "Thames Foyer", "American Bar", "Fitness Centre", "Butler Service"],
      quickFacts: "Art Deco elegance • Thames views • World-renowned service • Historic prestige",
      price: "From £720/night",
      featured: true,
      deals: "Theatre & Gaming Package - West End show tickets included"
    },
    {
      id: 4,
      name: "The Langham London",
      location: "Regent Street, London",
      rating: 4.6,
      image: "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Victorian grandeur meets modern luxury with exclusive gaming facilities and award-winning spa treatments.",
      rooms: 380,
      casinoSize: "Private Gaming Suite",
      amenities: ["Chuan Spa", "Artesian Bar", "Roux at The Landau", "Palm Court", "24hr Fitness"],
      quickFacts: "Victorian heritage • Award-winning spa • Regent Street location • Luxury shopping nearby",
      price: "From £650/night",
      featured: false,
      deals: "Spa & Gaming Retreat - Full spa access + gaming credits"
    },
    {
      id: 5,
      name: "Four Seasons Hampshire",
      location: "Dogmersfield, Hampshire",
      rating: 4.8,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Country estate luxury with private gaming rooms, championship golf, and extensive spa facilities set in 500 acres.",
      rooms: 133,
      casinoSize: "Private Gaming Rooms",
      amenities: ["Championship Golf", "The Spa", "Four Restaurants", "Equestrian Centre", "Clay Pigeon Shooting"],
      quickFacts: "Country estate • Championship golf • 500 acres • Equestrian activities",
      price: "From £480/night",
      featured: false,
      deals: "Golf & Gaming Package - Unlimited golf + casino access"
    },
    {
      id: 6,
      name: "The Grand Brighton",
      location: "Brighton Seafront",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Iconic Victorian seafront hotel featuring elegant gaming rooms with stunning views of the English Channel.",
      rooms: 201,
      casinoSize: "Regency Gaming Room",
      amenities: ["Sea Views", "GB1 Restaurant", "King Alfred Bar", "Spa Treatments", "Conference Facilities"],
      quickFacts: "Seafront location • Victorian elegance • Brighton Pier nearby • Regency heritage",
      price: "From £280/night",
      featured: false,
      deals: "Seaside Gaming Escape - Sea view room + welcome drinks"
    },
    {
      id: 7,
      name: "The Chester Grosvenor",
      location: "Chester City Centre",
      rating: 4.7,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Historic luxury hotel in the heart of Roman Chester, offering exclusive gaming experiences and Michelin-starred dining.",
      rooms: 80,
      casinoSize: "Private Club Room",
      amenities: ["Michelin Star Restaurant", "Spa La Brasserie", "The Arkle Bar", "Roman Tours", "Shopping Rows"],
      quickFacts: "Roman city • Michelin dining • Historic architecture • Shopping rows access",
      price: "From £350/night",
      featured: false,
      deals: "Chester Heritage Package - City tour + gaming experience"
    },
    {
      id: 8,
      name: "The Midland Manchester",
      location: "Manchester City Centre",
      rating: 4.4,
      image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Edwardian grandeur in Manchester's cultural quarter with sophisticated gaming facilities and renowned dining.",
      rooms: 312,
      casinoSize: "Northern Gaming Club",
      amenities: ["The French Restaurant", "Octium Spa", "Mr Cooper's Bar", "Theatre District", "Shopping Quarter"],
      quickFacts: "Edwardian grandeur • Cultural quarter • Theatre district • Northern charm",
      price: "From £220/night",
      featured: false,
      deals: "Northern Lights Package - Theatre tickets + casino credits"
    },
    {
      id: 9,
      name: "The Caledonian Edinburgh",
      location: "Princes Street, Edinburgh",
      rating: 4.6,
      image: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Scottish elegance overlooking Edinburgh Castle with exclusive gaming salons and whisky experiences.",
      rooms: 241,
      casinoSize: "Highland Gaming Salon",
      amenities: ["Castle Views", "Pompadour Restaurant", "Caley Bar", "Spa Facilities", "Whisky Lounge"],
      quickFacts: "Castle views • Scottish heritage • Royal Mile nearby • Whisky experiences",
      price: "From £380/night",
      featured: false,
      deals: "Highland Gaming Experience - Whisky tasting + private table access"
    },
    {
      id: 10,
      name: "The Celtic Manor Resort",
      location: "Newport, South Wales",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Championship golf resort featuring luxurious gaming facilities, spa treatments, and Celtic hospitality.",
      rooms: 330,
      casinoSize: "Celtic Gaming Lounge",
      amenities: ["3 Golf Courses", "Forum Spa", "Multiple Restaurants", "Adventure Resort", "Conference Centre"],
      quickFacts: "Championship golf • Ryder Cup venue • Adventure activities • Welsh hospitality",
      price: "From £320/night",
      featured: false,
      deals: "Celtic Champion Package - Golf + spa + gaming credits"
    }
  ];

  const locations = [
    { name: "London", emoji: "🏛️", count: "25+ Hotels", description: "Mayfair • Covent Garden • Westminster" },
    { name: "Birmingham", emoji: "🏙️", count: "8+ Resorts", description: "City Centre • Resorts World • NEC" },
    { name: "Manchester", emoji: "🏭", count: "12+ Hotels", description: "Northern Quarter • Spinningfields • Deansgate" },
    { name: "Edinburgh", emoji: "🏰", count: "10+ Properties", description: "Royal Mile • Princes Street • New Town" },
    { name: "Brighton", emoji: "🌊", count: "6+ Hotels", description: "Seafront • The Lanes • Marina" },
    { name: "Chester", emoji: "⚔️", count: "4+ Hotels", description: "City Walls • The Rows • Cathedral Quarter" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-yellow-600" />
              <h1 className="text-2xl font-bold text-gray-900">Crown Casino Hotels</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#hotels" className="text-gray-700 hover:text-yellow-600 transition-colors">Hotels</a>
              <a href="#locations" className="text-gray-700 hover:text-yellow-600 transition-colors">Locations</a>
              <a href="#deals" className="text-gray-700 hover:text-yellow-600 transition-colors">Deals</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Top 10 Casino Hotels and Resorts 
            <span className="text-yellow-400"> in the UK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the ultimate luxury at Britain's most exclusive casino hotels and resorts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105">
              Book a Casino Hotel Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Explore Amenities
            </button>
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section id="hotels" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured 5-Star Casino Hotels</h2>
            <p className="text-xl text-gray-600">Discover Britain's most prestigious casino hotels and resorts</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredHotels.filter(hotel => hotel.featured).map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold ml-1">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{hotel.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><span className="font-semibold">Rooms:</span> {hotel.rooms}</div>
                      <div><span className="font-semibold">Casino:</span> {hotel.casinoSize}</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{hotel.quickFacts}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">{hotel.price}</span>
                    <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                      View Details & Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Casino Resorts Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Casino Hotels & Resorts</h2>
            <p className="text-xl text-gray-600">From London's exclusive private clubs to countryside resort estates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-yellow-400">
                <div className="relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-semibold ml-1">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{hotel.name}</h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="text-xs">{hotel.location}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{hotel.description}</p>
                  
                  <div className="text-xs text-gray-500 mb-3">
                    <div>🏨 {hotel.rooms} rooms • 🎰 {hotel.casinoSize}</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-yellow-600">{hotel.price}</span>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casino Resorts & Deals Section */}
      <section id="deals" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Exclusive Casino Resort Deals</h2>
            <p className="text-xl text-blue-200">VIP experiences, gaming credits, and luxury packages</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 p-8 rounded-xl text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Up to 40% Off</h3>
              <p className="mb-4">Luxury suites at premium casino hotels across the UK</p>
              <button className="bg-white text-yellow-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Claim Deal Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl text-center">
              <Crown className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">VIP Casino Experiences</h3>
              <p className="mb-4">Private gaming rooms, personal concierge, and exclusive amenities</p>
              <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore VIP
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Premium Packages</h3>
              <p className="mb-4">Gaming credits, spa treatments, and fine dining experiences</p>
              <button className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Packages
              </button>
            </div>
          </div>
          
          <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Current Special Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-bold mb-2">Weekend Gaming Getaway</h4>
                <p className="text-blue-200">2 nights accommodation + £100 gaming credit + complimentary breakfast</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-bold mb-2">Luxury Spa & Casino Package</h4>
                <p className="text-blue-200">3-hour spa treatment + private gaming table access + champagne welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Casino Hotels by Location */}
      <section id="locations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Casino Hotels by Location</h2>
            <p className="text-xl text-gray-600">Explore luxury gaming destinations across the United Kingdom</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="text-4xl mb-4">{location.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{location.count}</p>
                <p className="text-gray-600 text-sm mb-4">{location.description}</p>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Explore Location
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-8 w-8 text-yellow-600" />
                <h3 className="text-2xl font-bold">Crown Casino Hotels</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Britain's premier luxury casino hotel booking platform, featuring the finest gaming destinations across the United Kingdom.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>25 Berkeley Square, London W1J 6BR</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>reservations@crowncasinohotels.co.uk</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-yellow-600" />
                  <span>24/7 Concierge Support</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#hotels" className="hover:text-yellow-400 transition-colors">Casino Hotels</a></li>
                <li><a href="#restaurants" className="hover:text-yellow-400 transition-colors">Restaurants</a></li>
                <li><a href="#spas" className="hover:text-yellow-400 transition-colors">Spas</a></li>
                <li><a href="#shopping" className="hover:text-yellow-400 transition-colors">Shopping</a></li>
                <li><a href="#attractions" className="hover:text-yellow-400 transition-colors">Attractions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
                <li><a href="#responsible-gaming" className="hover:text-yellow-400 transition-colors">Responsible Gaming</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Crown Casino Hotels. All rights reserved. Licensed and regulated by the UK Gambling Commission.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#facebook" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#twitter" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Camera className="w-5 h-5" />
                </a>
                <a href="#linkedin" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Wifi className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;