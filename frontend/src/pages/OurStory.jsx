import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Flame, Heart } from 'lucide-react';
import artisan from '../assets/artisan.jpg'; // Assuming this image exists

const OurStory = () => {
    return (
        <div className="bg-brand-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={artisan}
                        alt="Artisan working on brass"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <span className="text-brand-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Established in 1985</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-brand-cream mb-6 leading-tight">
                            Forged in Fire, <br />
                            <span className="text-brand-gold italic">Crafted with Soul.</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                            For over four decades, from the heart of the Brass City, we have been preserving an ancient heritage. A legacy that began in 1985 with a single furnace is now a beacon of devotion worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Origin Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Four Decades of <br /> Unwavering Faith</h2>
                            <div className="w-24 h-1 bg-brand-gold mb-8"></div>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                It started in 1985 in the narrow, bustling lanes of Hathras. With a vision to bring the divine into every home, our founders set up a modest workshop. They believed that a murti is not just metal; it is a medium of connection between the devotee and the divine.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                Hathras, known globally as the "Brass City," provided the perfect soil for this vision to grow. The rhythmic tapping of chisels and the roar of furnaces became the heartbeat of our existence.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Today, nearly 40 years later, while we have embraced modern techniques to ensure precision, the soul of our craft remains ancient. Every piece is still hand-finished, ensuring that when you place an idol in your prayer room, you feel the vibration of decades of devotion.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-brand-dark/5 aspect-[4/5] rounded-lg overflow-hidden"
                            >
                                {/* Placeholder for supportive imagery if needed, or colored blocks */}
                                <div className="w-full h-full bg-[#2a2a2a] flex items-center justify-center text-brand-gold/20">
                                    <Hammer size={48} strokeWidth={1} />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-brand-gold/10 aspect-[4/5] rounded-lg overflow-hidden mt-12"
                            >
                                <div className="w-full h-full bg-[#d4af37] flex items-center justify-center text-brand-dark/20">
                                    <Flame size={48} strokeWidth={1} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-4 block">The Creation</span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">A Journey from Wax to Divinity</h2>
                        <p className="text-gray-400 text-lg">Based on the ancient <i>Madhuuchisht Vidhana</i> (Lost Wax Process), creating a single murti is a labor of love spanning weeks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                icon: <Hammer size={32} />,
                                title: "Molding",
                                desc: "A precise wax model is hand-carved, capturing every ornament and expression."
                            },
                            {
                                icon: <Flame size={32} />,
                                title: "Casting",
                                desc: "Molten brass is poured into the hollow mold, replacing the wax in a trial by fire."
                            },
                            {
                                icon: <Heart size={32} />,
                                title: "Finishing",
                                desc: "The cooled idol is filed, polished, and antique-finished to reveal its divine glow."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-brand-gold/30 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-serif text-brand-cream mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 relative flex items-center justify-center">
                <div className="text-center px-4">
                    <h2 className="text-5xl md:text-8xl font-serif text-brand-dark/5 absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                        DEVOTION
                    </h2>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Bring Home a Piece of History</h3>
                        <p className="text-gray-600 mb-8">Let the divine presence grace your home.</p>
                        <a href="/shop-retail" className="inline-flex items-center gap-2 bg-brand-dark text-brand-cream px-8 py-3 rounded-lg font-medium hover:bg-brand-gold hover:text-brand-dark transition-colors">
                            Explore Collection <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
