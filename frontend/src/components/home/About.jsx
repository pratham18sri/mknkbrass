import React from 'react';
import { motion } from 'framer-motion';
import artisanImg from '../../assets/artisan.jpg';

const About = () => {
    return (
        <section className="py-24 bg-brand-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Image with Badge */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-sm overflow-hidden shadow-xl"
                        >
                            <img
                                src={artisanImg}
                                alt="Master Artisan Crafting Brass Idol"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-brand-cream/95 backdrop-blur-sm p-6 rounded-sm border-l-4 border-brand-gold shadow-lg max-w-[200px]">
                                <span className="block text-4xl font-serif font-bold text-brand-dark mb-1">50+</span>
                                <span className="block text-xs font-bold text-brand-gray tracking-widest uppercase">Years of Master Craftsmanship</span>
                            </div>
                        </motion.div>

                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-[20px] border-brand-gold/10 rounded-sm"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
                                The Soul of Indian <span className="italic text-brand-gold">Heritage</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                At Indian Brass Murti, we don't just manufacture idols; we breathe life into metal.
                                Every piece is a testament to the centuries-old traditional <i>'Lost Wax'</i> casting technique,
                                meticulously handcrafted by master artisans in Hathras.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Our commitment to purity, proportion, and precision has made us the preferred choice for
                                major temples, luxury hotels, and wholesalers across the globe for over five decades.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-brand-gold/20 pt-8">
                                <div>
                                    <h4 className="font-serif text-xl text-brand-dark mb-2">Authentic Brass</h4>
                                    <p className="text-sm text-gray-500">Using premium virgin brass alloys for longevity and luster.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-brand-dark mb-2">Hand-Finished</h4>
                                    <p className="text-sm text-gray-500">Every detail hand-chiseled by hereditary master artisans.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
