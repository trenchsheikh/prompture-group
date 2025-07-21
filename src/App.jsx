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
  TrendingUp,
  MessageCircle,
  ChevronUp,
  ArrowRight,
  Home
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
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const onScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 300)
      
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

  const features = [
    {
      icon: Clock,
      title: '1-2 Hour Response',
      description: 'Rapid emergency response when you need it most'
    },
    {
      icon: Home,
      title: 'Your Home. Our Priority',
      description: 'We treat every project with the urgency, care, and respect it deserves.'
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

  // Enhanced services data with icons
  const services = [
    {
      id: 'plumbing',
      title: 'Plumbing',
      icon: Droplets,
      description: 'Efficient and reliable plumbing solutions for homes and businesses. From emergency leak repairs to complete installations, our certified plumbers deliver quality workmanship.',
      features: ['Emergency Leak Repairs', 'Pipe Installation', 'Drain Unblocking', 'Water Heater Service'],
      image: '/plumber.png'
    },
    {
      id: 'heating',
      title: 'Heating',
      icon: Flame,
      description: 'Stay warm with our expert heating services. We install, repair, and maintain central heating systems of all types with precision and care.',
      features: ['Boiler Installation', 'Central Heating', 'Radiator Repair', 'System Maintenance'],
      image: '/heating.png'
    },
    {
      id: 'gas',
      title: 'Gas Engineering',
      icon: Settings,
      description: 'Certified gas engineers delivering safe and compliant services—from boiler installations to comprehensive gas safety checks.',
      features: ['Gas Safety Checks', 'Boiler Servicing', 'Gas Appliance Installation', 'Emergency Gas Repairs'],
      image: '/gas.png'
    },
    {
      id: 'tiling',
      title: 'Tiling',
      icon: Bug,
      description: 'Professional wall and floor tiling with a high-quality finish. Perfect for kitchens, bathrooms, and complete renovations.',
      features: ['Bathroom Tiling', 'Kitchen Backsplashes', 'Floor Installation', 'Waterproofing'],
      image: '/tiling.png'
    },
    {
      id: 'electrical',
      title: 'Electrical',
      icon: Zap,
      description: 'From full rewires to socket installations, our qualified electricians handle all domestic and commercial electrical work safely.',
      features: ['Rewiring', 'Socket Installation', 'Lighting Design', 'Safety Inspections'],
      image: '/electrical.png'
    },
    {
      id: 'bathroom-kitchen',
      title: 'Bathroom & Kitchen Fit-Out',
      icon: Wrench,
      description: 'End-to-end refurbishment services. Modern, functional, and beautifully finished spaces tailored to your style and needs.',
      features: ['Complete Renovations', 'Design Consultation', 'Project Management', 'Quality Finishes'],
      image: '/kitchen.png'
    },
    {
      id: 'painting',
      title: 'Painting & Decorating',
      icon: Search,
      description: 'Interior and exterior painting with precision. We bring fresh life to your space with clean finishes and lasting results.',
      features: ['Interior Painting', 'Exterior Coating', 'Wallpaper Hanging', 'Surface Preparation'],
      image: '/painter.png'
    }
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
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      // Only subtract the header height for scroll offset, and add 32px to bring section higher
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 0
      const elementRect = element.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset
      const targetY = elementRect.top + scrollY - headerHeight + 140
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Emergency Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-white text-white py-3">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold animate-pulse mb-2 md:mb-0">
            EMERGENCY SERVICE AVAILABLE 24/7 - NO HIDDEN CHARGES
          </p>
          <CallButton className="mx-auto md:mx-0" />
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-28 md:top-16 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Prompture Group Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Prompture Group</h1>
                <p className="text-xs text-gray-600">London’s Trusted Property Maintenance Experts</p>
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
                onClick={(e) => { e.preventDefault(); handleNavClick('our-expert-services'); }}
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
                onClick={(e) => { e.preventDefault(); handleNavClick('our-expert-services'); }}
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
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden mt-44 md:mt-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/80"></div>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pb-44 md:pb-40">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="animate-fade-in-up hero-animate text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              London's <span className="text-blue-200">Premier</span> Property Services
            </h1>
            <p 
              className="animate-fade-in-up hero-animate animate-delay-200 text-xl md:text-2xl text-blue-100 mb-4"
            >
              Experts in Projects of All Sizes – Domestic and Commercial
            </p>
            <p 
              className="animate-fade-in-up hero-animate animate-delay-300 text-lg text-blue-100 mb-2 max-w-3xl mx-auto"
            >
              Prompt, Precise and Professional
            </p>
            <p 
              className="animate-fade-in-up hero-animate animate-delay-400 text-lg text-blue-100 mb-12 max-w-3xl mx-auto"
            >
              From small repairs to large-scale renovations, we handle every project with expert care and efficiency.
            </p>
            <div 
              className="animate-fade-in-up hero-animate animate-delay-600 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <CallButton size="large" />
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); handleNavClick('our-expert-services'); }}
                className="py-4 px-8 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover-lift cursor-pointer"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
        
        {/* Trusted Brands Logos Section - Fixed Position at Hero Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {/* White background with subtle shadow */}
          <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 py-6 md:py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-4">
                <p className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                  Trusted by Industry Leaders
                </p>
              </div>
              
              {/* Logo Grid - Responsive */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/gas-safe-register-logo-header-removebg-preview.png" 
                    alt="Gas Safe Register" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/Vaillant-Large-Square-removebg-preview.png" 
                    alt="Vaillant" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/Worcester-Bosch-logo-square-removebg-preview.png" 
                    alt="Worcester Bosch" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/Untitled_design__48_-removebg-preview.png" 
                    alt="NFRC" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/__Plumbing_Efficient_and_reliable_plumbing_solutions_for_homes_and_businesses._From_leaks_to_installations__we_ve_got_it_covered._Read_more_______Heating_Stay_warm_with_our_expert_heating_servic-remov.png" 
                    alt="SafeContractor" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center h-16 md:h-20 w-full">
                  <img 
                    src="/__Plumbing_Efficient_and_reliable_plumbing_solutions_for_homes_and_businesses._From_leaks_to_installations__we_ve_got_it_covered._Read_more_______Heating_Stay_warm_with_our_expert_heating_servic__1_-r.png" 
                    alt="CHAS" 
                    className="max-h-20 md:max-h-32 max-w-full object-contain filter hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
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
            backgroundImage: `url('/Promethu.png')`
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
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

      {/* IMPROVED SERVICES SECTION */}
      <section id="our-expert-services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
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
              Professional property services delivered with precision and care
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={service.id}
                  data-animate
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  {/* Card Content */}
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      {/* Title and Description */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Key Services
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center space-x-2 text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-medium text-gray-500">
                          Emergency Service Available
                        </span>
                        <a
                          href="#about"
                          onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group/btn cursor-pointer"
                        >
                          <span className="text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Prompture Group Section */}
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
                <div 
                  className="w-full h-96 rounded-2xl shadow-lg hover-lift bg-cover bg-center relative"
                  style={{ backgroundImage: `url('/emergency.png')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent rounded-2xl"></div>
                </div>
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

      {/* Areas We Cover Section */}
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
                  <span className="text-xl font-bold">020XXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@prompturegroup.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li className="text-gray-300">Plumbing</li>
                <li className="text-gray-300">Heating</li>
                <li className="text-gray-300">Gas Engineering</li>
                <li className="text-gray-300">Electrical</li>
                <li className="text-gray-300">Tiling</li>
                <li className="text-gray-300">Bathroom & Kitchen Fit-Out</li>
                <li className="text-gray-300">Painting & Decorating</li>
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
                    123 Business Street, London<br />
                    SW1A 1AA
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