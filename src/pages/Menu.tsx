import { motion } from 'motion/react';

export default function Menu() {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        { name: "Charred Octopus", desc: "Romesco sauce, fingerling potatoes, smoked paprika", price: "$24" },
        { name: "Smoked Bone Marrow", desc: "Bacon jam, grilled sourdough, parsley salad", price: "$22" },
        { name: "Wagyu Beef Tartare", desc: "Quail egg, truffle aioli, crispy capers", price: "$28" },
        { name: "Wood-Fired Oysters", desc: "Garlic herb butter, parmesan crust, lemon", price: "$26" }
      ]
    },
    {
      title: "From The Grill",
      items: [
        { name: "32oz Tomahawk Ribeye", desc: "45-day dry-aged, smoked sea salt, roasted garlic", price: "$145" },
        { name: "8oz Filet Mignon", desc: "Center cut, black truffle butter", price: "$65" },
        { name: "16oz New York Strip", desc: "Prime grade, peppercorn crust", price: "$72" },
        { name: "Colorado Lamb Chops", desc: "Mint chimichurri, charred eggplant puree", price: "$58" }
      ]
    },
    {
      title: "Seafood & Mains",
      items: [
        { name: "Cedar Plank Salmon", desc: "Maple glaze, wild rice, blistered asparagus", price: "$42" },
        { name: "Whole Branzino", desc: "Stuffed with herbs, grilled lemon, olive oil", price: "$48" },
        { name: "Smoked Half Chicken", desc: "Free-range, honey bourbon glaze, sweet potato mash", price: "$36" },
        { name: "Coal-Roasted Cauliflower", desc: "Tahini dressing, pomegranate, toasted pine nuts", price: "$28" }
      ]
    },
    {
      title: "Sides",
      items: [
        { name: "Truffle Mac & Cheese", desc: "Five cheese blend, toasted breadcrumbs", price: "$16" },
        { name: "Charred Asparagus", desc: "Lemon zest, shaved parmesan", price: "$14" },
        { name: "Duck Fat Potatoes", desc: "Rosemary, sea salt", price: "$14" },
        { name: "Creamed Spinach", desc: "Nutmeg, crispy shallots", price: "$15" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-flame-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">Culinary Excellence</h2>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Menu</h1>
          <div className="w-24 h-1 bg-flame-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl mb-10 text-center italic text-white/90">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif text-xl text-white">{item.name}</h4>
                      <div className="flex-grow border-b border-dashed border-gray-700 mx-4 relative top-[-6px]"></div>
                      <span className="text-flame-400 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
