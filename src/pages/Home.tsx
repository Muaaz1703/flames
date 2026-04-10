import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
            alt="Steak on grill" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/80 to-charcoal-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-atmosphere py-20 rounded-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-flame-500 tracking-[0.2em] uppercase text-sm font-semibold mb-6">
              Taste the Fire
            </h2>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight">
              FLAMES
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10">
              A modern steakhouse experience where primal cooking methods meet refined culinary artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-flame-500 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-flame-600 transition-colors w-full sm:w-auto"
              >
                Book a Table
              </Link>
              <Link
                to="/menu"
                className="group flex items-center gap-2 text-white uppercase tracking-widest text-sm font-medium hover:text-flame-400 transition-colors"
              >
                View Menu
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-6">The Art of <br/><span className="text-flame-500 italic">Wood-Fired</span> Cooking</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At Flames, we believe that fire is the most fundamental and honest ingredient. Our custom-built wood-fired grill is the beating heart of our kitchen, imparting a distinct, smoky complexity to everything we touch—from prime cuts of dry-aged beef to locally sourced seasonal vegetables.
              </p>
              <Link to="/about" className="inline-block border-b border-flame-500 text-flame-500 pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors">
                Discover Our Story
              </Link>
            </motion.div>
            <div className="relative h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                alt="Chef cooking" 
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-charcoal-900 p-6 hidden md:flex flex-col justify-center items-center text-center border border-gray-800">
                <span className="font-serif text-4xl text-flame-500 mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-charcoal-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Signature Dishes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into our most beloved creations, crafted with passion and fire.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tomahawk Ribeye",
                desc: "32oz dry-aged, smoked sea salt, roasted garlic butter",
                img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=1964&auto=format&fit=crop"
              },
              {
                name: "Charred Octopus",
                desc: "Romesco sauce, fingerling potatoes, smoked paprika",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop"
              },
              {
                name: "Smoked Bone Marrow",
                desc: "Bacon jam, grilled sourdough, parsley salad",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
              }
            ].map((dish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 h-80">
                  <img 
                    src={dish.img} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-flame-500 transition-colors">{dish.name}</h3>
                <p className="text-gray-400 text-sm">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
