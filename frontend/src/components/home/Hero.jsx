import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero-idol.png';

const Hero = () => {
    const handleRoleSelect = (role) => {
        localStorage.setItem('userRole', role);
        alert(`You selected: ${role} Buyer`);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax-like scaling */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroImage}
                    alt="Antique Brass Idols"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-brand-dark/90"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 border border-brand-gold/50 rounded-full text-brand-gold text-xs tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        Since 1985 • Hathras, India
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream mb-8 leading-tight tracking-tight">
                        Divine Craftsmanship <br />
                        <span className="text-brand-gold italic">Eternal Grace.</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        We manufacture exquisite brass idols that breathe life into tradition.
                        Serving specialized retail collectors and bulk wholesale distributors worldwide.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <button
                        onClick={() => handleRoleSelect('retail')}
                        className="group relative px-10 py-4 bg-brand-gold text-brand-dark font-bold overflow-hidden rounded-sm transition-all hover:scale-105"
                    >
                        <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                        <span className="relative uppercase tracking-widest text-sm">Shop Retail</span>
                    </button>

                    <button
                        onClick={() => handleRoleSelect('wholesale')}
                        className="group px-10 py-4 bg-transparent text-brand-cream border border-brand-cream/50 font-bold rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300 uppercase tracking-widest text-sm hover:bg-brand-dark/50"
                    >
                        Wholesale Inquiry
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-brand-gold/60 text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/0 via-brand-gold/50 to-brand-gold/0"></div>
            </motion.div>
        </div>
    );
};

export default Hero;
