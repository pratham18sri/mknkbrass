import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
    "Direct Factory Pricing (Save up to 40%)",
    "Custom Manufacturing & Private Labeling",
    "Priority Shipping & Export Documentation",
    "Dedicated Account Manager for Bulk Orders"
];

const WholesaleCTA = () => {
    return (
        <section className="relative py-24 bg-brand-dark overflow-hidden text-brand-cream">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3 block">For Business Partners</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            Scale Your Business with <br /> <span className="text-brand-gold">Factory Direct</span> Supply
                        </h2>
                        <p className="text-gray-400 text-lg mb-4 font-light leading-relaxed">
                            Join 500+ retailers worldwide who trust Indian Brass Murti for premium inventory.
                            Get access to our exclusive B2B catalog and volume discounts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 font-bold rounded-sm hover:bg-white transition-colors duration-300 group">
                                Request Wholesale Account
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-4 font-bold rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                                Download Catalog
                            </button>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-brand-gold/10">
                        <h3 className="text-2xl font-serif text-white mb-6">Partner Benefits</h3>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-gray-300"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                                        <Check size={14} className="text-brand-gold" />
                                    </div>
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleCTA;
