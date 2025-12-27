import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Using high-quality placeholder gradients/colors until real images are generated
const categories = [
    { id: 1, name: 'Ganesh', des: 'Remover of Obstacles', bg: 'bg-[#1a1a1a]' },
    { id: 2, name: 'Krishna', des: 'Divine Love', bg: 'bg-[#2a2a2a]' },
    { id: 3, name: 'Lakshmi', des: 'Wealth & Prosperity', bg: 'bg-[#1f1f1f]' },
    { id: 4, name: 'Shiva', des: 'The Destroyer', bg: 'bg-[#252525]' },
];

const Categories = () => {
    return (
        <section className="py-24 bg-brand-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-dark/10 pb-8">
                    <div className="max-w-xl">
                        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">Our Collections</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Curated Divine Forms</h2>
                        <p className="text-gray-600 font-light text-lg">
                            From the intricate jewellery of Lakshmi to the serene flute of Krishna, explore our masterworks.
                        </p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-brand-dark font-medium hover:text-brand-gold transition-colors group">
                        View Full Catalog
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer relative"
                        >
                            <div className={`aspect-[3/4] overflow-hidden relative rounded-sm ${cat.bg}`}>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                                {/* Placeholder Content (Since images failed to gen, styling this to look deliberate) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="font-serif text-6xl text-brand-gold/10 group-hover:scale-110 transition-transform duration-700 select-none">
                                        {cat.name[0]}
                                    </h3>
                                </div>

                                {/* Hover Reveal details */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-serif text-brand-cream mb-1">{cat.name}</h3>
                                    <p className="text-brand-gold text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {cat.des}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-brand-dark font-semibold">
                        View Full Catalog <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Categories;
