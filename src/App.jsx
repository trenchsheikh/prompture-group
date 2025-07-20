import { useState, useEffect } from 'react'
import { 
  Flame, 
  Settings, 
  Wrench, 
  Droplets, 
  Search, 
  Lock, 
  Bug, 
  Zap,
  Phone,
  Clock,
  Shield,
  Star,
  CheckCircle,
  MapPin,
  Mail,
  ChevronDown,
  Menu,
  X,
  Award,
  Users,
  TrendingUp
} from 'lucide-react'

// Animation utilities
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [animatedElements, setAnimatedElements] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Check for elements to animate on scroll
      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
        
        if (isVisible && !animatedElements.has(element)) {
          element.classList.add('animate-in')
          setAnimatedElements(prev => new Set(prev).add(element))
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [animatedElements])

  // Trigger hero animations immediately on page load
  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate')
    heroElements.forEach((element) => {
      element.classList.add('animate-in')
    })
  }, [])

  const services = [
    { 
      id: 'boiler-repairs', 
      name: 'Boiler Repairs', 
      icon: Flame,
      description: 'Expert boiler repair services for all major brands. Fast diagnosis and reliable fixes.',
      features: ['24/7 Emergency Service', 'All Major Brands', 'Same Day Repairs'],
      image: '/plumbing-hero.png'
    },
    { 
      id: 'boiler-installation', 
      name: 'Boiler Installation', 
      icon: Settings,
      description: 'Professional boiler installation with full warranty and aftercare support.',
      features: ['Energy Efficient Models', 'Professional Installation', '12 Month Guarantee'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'plumbing', 
      name: 'Plumbing Services', 
      icon: Wrench,
      description: 'Complete plumbing solutions for residential and commercial properties.',
      features: ['Leak Repairs', 'Pipe Installation', 'Bathroom Fitting'],
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'drainage', 
      name: 'Drainage Solutions', 
      icon: Droplets,
      description: 'Professional drainage services including unblocking and maintenance.',
      features: ['Drain Unblocking', 'CCTV Surveys', 'Preventive Maintenance'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'leak-detection', 
      name: 'Leak Detection', 
      icon: Search,
      description: 'Advanced leak detection using the latest technology and equipment.',
      features: ['Non-Invasive Detection', 'Thermal Imaging', 'Quick Resolution'],
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'locksmiths', 
      name: 'Locksmith Services', 
      icon: Lock,
      description: 'Professional locksmith services for homes and businesses.',
      features: ['Emergency Lockouts', 'Lock Installation', 'Security Upgrades'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'pest-control', 
      name: 'Pest Control', 
      icon: Bug,
      description: 'Comprehensive pest control solutions for all types of infestations.',
      features: ['Safe Treatments', 'Follow-up Service', 'Prevention Advice'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 'electrical', 
      name: 'Electrical Services', 
      icon: Zap,
      description: 'Certified electrical services for installations, repairs, and maintenance.',
      features: ['Certified Electricians', 'Safety Inspections', 'Smart Home Solutions'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: '1-2 Hour Response',
      description: 'Rapid emergency response when you need it most'
    },
    {
      icon: Phone,
      title: '24/7 Emergency',
      description: 'Available around the clock, 365 days a year'
    },
    {
      icon: Shield,
      title: '12 Month Guarantee',
      description: 'Complete confidence with our comprehensive warranty'
    },
    {
      icon: Star,
      title: 'Unbeatable Prices',
      description: 'Competitive rates with complete transparency'
    }
  ]

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers'
    },
    {
      icon: Clock,
      number: '1-2',
      label: 'Hour Response'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: 'Success Rate'
    }
  ]

  const areas = [
    'Central London', 'North London', 'South London', 'East London',
    'West London', 'South East London', 'South West London', 
    'Harrow', 'Twickenham', 'Slough'
  ]

  const CallButton = ({ className = "", size = "default" }) => {
    const baseClasses = "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 relative"
    const sizeClasses = size === "large" ? "py-4 px-8 text-lg" : "py-3 px-6 text-base"
    
    return (
      <div className={`relative ${className}`}>
        {/* Gradient glowing border */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black rounded-lg blur-sm opacity-60 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-black rounded-lg blur-[2px] opacity-40"></div>
        
        {/* Button content */}
        <a 
          href="tel:020XXXXX" 
          className={`${baseClasses} ${sizeClasses} relative z-10`}
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    )
  }

  const handleNavClick = (sectionId) => {
    // Close mobile menu
    setIsMobileMenuOpen(false)
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      // Get actual heights of sticky elements
      const emergencyBanner = document.querySelector('.sticky.top-0.z-50')
      const header = document.querySelector('header')
      
      const emergencyBannerHeight = emergencyBanner ? emergencyBanner.offsetHeight : 48
      const headerHeight = header ? header.offsetHeight : 64
      const extraPadding = 30 // Extra padding to ensure header is fully visible
      const totalOffset = emergencyBannerHeight + headerHeight + extraPadding
      const elementPosition = element.offsetTop - totalOffset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Emergency Banner */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold animate-pulse mb-2 md:mb-0">
              EMERGENCY SERVICE AVAILABLE 24/7 - NO HIDDEN CHARGES
            </p>
            <CallButton className="mx-auto md:mx-0" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Prompture Group</h1>
                <p className="text-xs text-gray-600">London's Emergency Property Experts</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                About
              </a>
              <a 
                href="#coverage" 
                onClick={(e) => { e.preventDefault(); handleNavClick('coverage'); }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              >
                Coverage
              </a>
              <CallButton />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}>
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                About
              </a>
              <a 
                href="#coverage" 
                onClick={(e) => { e.preventDefault(); handleNavClick('coverage'); }}
                className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Coverage
              </a>
              <CallButton className="w-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/plumbing-hero.png')`
          }}
        ></div>
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/80"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="animate-fade-in-up hero-animate text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              London's <span className="text-blue-200">Premier</span> Emergency Property Maintenance
            </h1>
            <p 
              className="animate-fade-in-up hero-animate animate-delay-200 text-xl md:text-2xl text-blue-100 mb-8"
            >
              Guaranteed <span className="font-semibold text-white">1-2 hour response</span> time for all emergencies
            </p>
            <p 
              className="animate-fade-in-up hero-animate animate-delay-400 text-lg text-blue-100 mb-12 max-w-3xl mx-auto"
            >
              Professional, qualified, and passionate team serving homeowners, businesses, and landlords across London and the South East with unmatched reliability.
            </p>
            
            <div 
              className="animate-fade-in-up hero-animate animate-delay-600 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CallButton size="large" />
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                className="py-4 px-8 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover-lift cursor-pointer"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index} 
                  data-animate
                  className={`animate-scale-in animate-delay-${(index + 1) * 100} text-center group hover-lift`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Strip with Background */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-900/85"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-animate
              className="animate-fade-in-up text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why We're Different
            </h2>
            <p 
              data-animate
              className="animate-fade-in-up animate-delay-200 text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Experience the Prompture Group difference with our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index} 
                  data-animate
                  className={`animate-fade-in-up animate-delay-${(index + 1) * 100} text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Alternating Layout */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-animate
              className="animate-fade-in-up text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Our Expert Services
            </h2>
            <p 
              data-animate
              className="animate-fade-in-up animate-delay-200 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive property maintenance solutions delivered by certified professionals
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={service.id} 
                  data-animate
                  className={`animate-fade-in-up animate-delay-${(index + 1) * 100} flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                  style={{ opacity: 1, transform: 'translateY(0)' }}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative group hover-lift">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800">{service.name}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm hover-lift">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <CallButton />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-animate className="animate-fade-in-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Why Choose Prompture Group?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  With years of experience serving London and the South East, we've built our reputation on reliability, quality, and exceptional customer service. Our team of certified professionals is equipped to handle any property emergency with speed and precision.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Certified Professionals</h3>
                      <p className="text-gray-600">All our technicians are fully qualified and certified in their respective trades.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fully Insured</h3>
                      <p className="text-gray-600">Complete peace of mind with comprehensive insurance coverage.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 hover-lift">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">5-Star Service</h3>
                      <p className="text-gray-600">Consistently rated excellent by our satisfied customers.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div data-animate className="animate-fade-in-right relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional team"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 hover-lift">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Emergency? Don't Wait!</h3>
                    <p className="text-gray-600 mb-4">
                      Our 24/7 team responds within 1-2 hours to get your property back to normal.
                    </p>
                    <CallButton className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Coverage Area with Map Background */}
       <section id="coverage" className="py-20 relative">
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
           style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
           }}
         ></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              data-animate
              className="animate-fade-in-up text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Areas We Cover
            </h2>
            <p 
              data-animate
              className="animate-fade-in-up animate-delay-200 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Serving London and the South East with rapid response emergency services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <div 
                key={area} 
                data-animate
                className={`animate-scale-in animate-delay-${(index + 1) * 50} text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover-lift`}
              >
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{area}</p>
              </div>
            ))}
          </div>
          
          <div data-animate className="animate-fade-in-up animate-delay-500 text-center mt-16">
            <CallButton size="large" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">Prompture Group</h3>
                  <p className="text-sm text-gray-400">Emergency Property Experts</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                London's most reliable emergency property maintenance service. Fast, professional, and available 24/7.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-xl font-bold">0208 0505 306</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@prompturegroup.co.uk</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map(service => (
                  <li key={service.id}>
                    <a href={`#${service.id}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Coverage Areas</h4>
              <ul className="space-y-2">
                {areas.slice(0, 8).map(area => (
                  <li key={area} className="text-gray-300">{area}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">Address</h5>
                  <p className="text-gray-300">
                    Prompture Group<br />
                    4 Old Park Ln, London<br />
                    W1K 1QW
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Emergency Hours</h5>
                  <p className="text-gray-300">24/7 - 365 Days a Year</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Prompture Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App