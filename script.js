// Hotel data
const hotelsData = [
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

const locationsData = [
    { name: "London", emoji: "🏛️", count: "25+ Hotels", description: "Mayfair • Covent Garden • Westminster" },
    { name: "Birmingham", emoji: "🏙️", count: "8+ Resorts", description: "City Centre • Resorts World • NEC" },
    { name: "Manchester", emoji: "🏭", count: "12+ Hotels", description: "Northern Quarter • Spinningfields • Deansgate" },
    { name: "Edinburgh", emoji: "🏰", count: "10+ Properties", description: "Royal Mile • Princes Street • New Town" },
    { name: "Brighton", emoji: "🌊", count: "6+ Hotels", description: "Seafront • The Lanes • Marina" },
    { name: "Chester", emoji: "⚔️", count: "4+ Hotels", description: "City Walls • The Rows • Cathedral Quarter" }
];

// DOM elements
const featuredHotelsContainer = document.getElementById('featuredHotels');
const allHotelsContainer = document.getElementById('allHotels');
const locationsContainer = document.getElementById('locationsGrid');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// Create hotel card HTML
function createHotelCard(hotel, isSmall = false) {
    const cardClass = isSmall ? 'hotel-card-small' : 'hotel-card';
    const featuredBadge = hotel.featured ? `
        <div class="featured-badge">
            <span>✨</span>
            Featured
        </div>
    ` : '';
    
    const amenitiesHtml = isSmall ? '' : `
        <div class="amenities">
            ${hotel.amenities.slice(0, 3).map(amenity => 
                `<span class="amenity-tag">${amenity}</span>`
            ).join('')}
        </div>
    `;
    
    return `
        <div class="${cardClass}">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
                ${featuredBadge}
                <div class="rating-badge">
                    <span>⭐</span>
                    <span>${hotel.rating}</span>
                </div>
            </div>
            <div class="hotel-content">
                <h3 class="hotel-name">${hotel.name}</h3>
                <div class="hotel-location">
                    <span>📍</span>
                    <span>${hotel.location}</span>
                </div>
                <p class="hotel-description">${hotel.description}</p>
                <div class="hotel-facts">
                    <div class="facts-grid">
                        <div><strong>Rooms:</strong> ${hotel.rooms}</div>
                        <div><strong>Casino:</strong> ${hotel.casinoSize}</div>
                    </div>
                    <p class="quick-facts">${hotel.quickFacts}</p>
                </div>
                ${amenitiesHtml}
                <div class="hotel-footer">
                    <span class="hotel-price">${hotel.price}</span>
                    <button class="book-btn" onclick="bookHotel('${hotel.name}')">
                        ${isSmall ? 'View Details' : 'View Details & Book'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create location card HTML
function createLocationCard(location) {
    return `
        <div class="location-card">
            <div class="location-emoji">${location.emoji}</div>
            <h3 class="location-name">${location.name}</h3>
            <p class="location-count">${location.count}</p>
            <p class="location-description">${location.description}</p>
            <button class="location-btn" onclick="exploreLocation('${location.name}')">
                Explore Location
            </button>
        </div>
    `;
}

// Populate featured hotels
function populateFeaturedHotels() {
    const featuredHotels = hotelsData.filter(hotel => hotel.featured);
    featuredHotelsContainer.innerHTML = featuredHotels.map(hotel => createHotelCard(hotel)).join('');
}

// Populate all hotels
function populateAllHotels() {
    allHotelsContainer.innerHTML = hotelsData.map(hotel => createHotelCard(hotel, true)).join('');
}

// Populate locations
function populateLocations() {
    locationsContainer.innerHTML = locationsData.map(location => createLocationCard(location)).join('');
}

// Book hotel function
function bookHotel(hotelName) {
    alert(`Booking request for ${hotelName}. In a real application, this would redirect to a booking form.`);
}

// Explore location function
function exploreLocation(locationName) {
    alert(`Exploring ${locationName}. In a real application, this would show hotels in ${locationName}.`);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all hotel cards and location cards
    const elementsToObserve = document.querySelectorAll('.hotel-card, .hotel-card-small, .location-card, .deal-card');
    elementsToObserve.forEach(el => observer.observe(el));
}

// Mobile menu toggle
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav-active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// CTA button handlers
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Booking system would open here. In a real application, this would redirect to a booking platform.');
        });
    });
}

// Initialize all functionality
function init() {
    populateFeaturedHotels();
    populateAllHotels();
    populateLocations();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initMobileMenu();
    initCTAButtons();
    
    // Delay animation initialization to ensure DOM is ready
    setTimeout(initScrollAnimations, 100);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any layout-dependent features if needed
});

// Add loading states for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.src = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800';
        });
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}