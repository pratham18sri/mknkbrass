import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Crown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClasses = twMerge(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-brand-gold/10 py-2'
            : 'bg-transparent py-6'
    );

    const txtClasses = twMerge(
        'transition-colors duration-300 font-medium tracking-wide text-sm uppercase',
        scrolled ? 'text-brand-dark' : 'text-brand-cream'
    );

    const logoClasses = twMerge(
        'font-serif font-bold tracking-widest transition-all duration-300',
        scrolled ? 'text-brand-dark text-2xl' : 'text-brand-gold text-3xl'
    );

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Updated with Professional Icon & Typography */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Crown size={28} className="text-brand-gold" strokeWidth={1.5} />
                        <Link to="/" className={logoClasses}>
                            INDIAN<span className="font-sans font-light text-base tracking-[0.3em] ml-2 text-brand-gold">BRASS MURTI</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12 items-center">
                        {['Home', 'Shop Retail', 'Wholesale', 'Our Story'].map((item) => (
                            <a key={item} href="#" className={`${txtClasses} hover:text-brand-gold relative group`}>
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button className={txtClasses + " hover:text-brand-gold"}>
                            <Search size={22} strokeWidth={1.5} />
                        </button>
                        <Link to="/login" className={txtClasses + " hover:text-brand-gold"}>
                            <User size={22} strokeWidth={1.5} />
                        </Link>
                        <button className={txtClasses + " hover:text-brand-gold relative"}>
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-brand-dark' : 'text-brand-cream'}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full justify-center items-center space-y-8">
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-brand-cream">
                        <X size={32} />
                    </button>
                    {['Home', 'Shop Retail', 'Wholesale', 'Our Story', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-3xl font-serif text-brand-cream hover:text-brand-gold transition-colors">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
