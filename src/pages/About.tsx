import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-flame-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">Our Story</h2>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">About Flames</h1>
          <div className="w-24 h-1 bg-flame-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              className="w-full h-[600px] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Born from Fire</h3>
            <p className="text-gray-400 leading-relaxed">
              Founded in 2010, Flames began with a simple philosophy: return to the most primal method of cooking. We believe that cooking over an open wood fire imparts a depth of flavor and character that modern appliances simply cannot replicate.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our custom-built hearth is the centerpiece of our restaurant, burning a carefully curated blend of oak, hickory, and fruitwoods. This isn't just a cooking method; it's an art form that requires constant attention, intuition, and respect for the ingredients.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We source our meats from local farms practicing sustainable agriculture, dry-aging them in-house to concentrate their flavor and ensure maximum tenderness before they ever meet the flame.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Meet Chef Marcus</h3>
            <p className="text-gray-400 leading-relaxed">
              Executive Chef Marcus Thorne spent his early career in some of the world's most refined Michelin-starred kitchens before realizing his true passion lay in the raw, untamed nature of live-fire cooking.
            </p>
            <p className="text-gray-400 leading-relaxed">
              "There's an honesty to cooking with fire," Marcus says. "You can't hide behind complex techniques or gadgets. It's just you, the ingredient, and the flame. It demands your full presence."
            </p>
            <div className="pt-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Chef Signature" className="h-12 invert opacity-50" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop" 
              alt="Chef Marcus" 
              className="w-full h-[600px] object-cover rounded-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
