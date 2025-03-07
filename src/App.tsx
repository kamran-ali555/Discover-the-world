import React from 'react';
import { Compass, Hotel, Star, Map, PlaneLanding, MessageSquare, Calendar, Phone, Mail, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const destinations = [
    {
      id: 1,
      title: 'Santorini, Greece',
      description: 'Experience the stunning white architecture and breathtaking sunsets.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
      price: '1,299'
    },
    {
      id: 2,
      title: 'Bali, Indonesia',
      description: 'Discover tropical paradise with ancient temples and pristine beaches.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      price: '899'
    },
    {
      id: 3,
      title: 'Swiss Alps',
      description: 'Adventure awaits in the majestic mountains of Switzerland.',
      image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
      price: '1,499'
    },
  ];

  const tours = [
    {
      id: 1,
      title: 'European Adventure',
      duration: '14 Days',
      countries: ['France', 'Italy', 'Spain'],
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
      price: '3,499'
    },
    {
      id: 2,
      title: 'Asian Discovery',
      duration: '12 Days',
      countries: ['Japan', 'South Korea', 'Taiwan'],
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=800',
      price: '2,999'
    },
    {
      id: 3,
      title: 'African Safari',
      duration: '10 Days',
      countries: ['Kenya', 'Tanzania', 'Uganda'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
      price: '4,299'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The trip to Santorini was absolutely magical. Every detail was perfectly planned!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Bali exceeded all my expectations. The local guides were knowledgeable and friendly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <Compass className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Guidance</h3>
            <p className="text-gray-600">Professional travel experts to help plan your perfect trip</p>
          </div>
          <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <Hotel className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Best Accommodations</h3>
            <p className="text-gray-600">Carefully selected hotels for comfort and luxury</p>
          </div>
          <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <Map className="w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Curated Itineraries</h3>
            <p className="text-gray-600">Perfectly planned routes and activities</p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map(destination => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map(tour => (
              <div key={tour.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-1 rounded-full text-white font-semibold">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{tour.title}</h3>
                  <div className="flex items-center mb-4">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-gray-600">{tour.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.countries.map(country => (
                      <span key={country} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">About Discover the World</h2>
              <p className="text-lg mb-6">
                Since 2010, we've been crafting unforgettable travel experiences for adventurers around the globe. Our passion for exploration and commitment to excellence has made us a trusted name in the travel industry.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  <span>Over 100,000 satisfied travelers</span>
                </li>
                <li className="flex items-center">
                  <Map className="w-6 h-6 mr-3" />
                  <span>Destinations across 6 continents</span>
                </li>
                <li className="flex items-center">
                  <PlaneLanding className="w-6 h-6 mr-3" />
                  <span>Partnerships with leading airlines and hotels</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=1000" 
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Book Your Next Adventure</h2>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select destination</option>
                  <option>Europe</option>
                  <option>Asia</option>
                  <option>Africa</option>
                  <option>Americas</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
                <input type="date" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select duration</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                  <option>3 Weeks</option>
                  <option>1 Month</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Travelers</label>
                <input type="number" min="1" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Number of travelers" />
              </div>
            </div>
            <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
              Search Available Tours
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">1-800-TRAVEL</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@discovertheworld.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Map className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">1234 Travel Lane, Adventure City, AC 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Discover the World</h3>
            <p className="text-gray-400">Your trusted partner in creating unforgettable travel experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Travel Lane</li>
              <li>Adventure City, AC 12345</li>
              <li>1-800-TRAVEL</li>
              <li>info@discovertheworld.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Twitter</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;