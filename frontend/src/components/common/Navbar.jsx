import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, Crown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { totalItems } = useCart();
    const location = useLocation();

    // Pages that have a hero image and need transparent navbar initially
    const isTransparentNavPage = location.pathname === '/' || location.pathname === '/our-story';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Force "scrolled" look (solid bg, dark text) if not on a hero page or if actually scrolled
    const isDarkStyle = scrolled || !isTransparentNavPage;

    const navClasses = twMerge(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isDarkStyle
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-brand-gold/10 py-2'
            : 'bg-transparent py-6'
    );

    const txtClasses = twMerge(
        'transition-colors duration-300 font-medium tracking-wide text-sm uppercase',
        isDarkStyle ? 'text-brand-dark' : 'text-brand-cream'
    );

    const logoClasses = twMerge(
        'font-serif font-bold tracking-widest transition-all duration-300',
        isDarkStyle ? 'text-brand-dark text-2xl' : 'text-brand-gold text-3xl'
    );

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Shop Retail', path: '/shop-retail' },
        { name: 'Wholesale', path: '#' },
        { name: 'Our Story', path: '/our-story' }
    ];

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Crown size={28} className="text-brand-gold" strokeWidth={1.5} />
                        <Link to="/" className={logoClasses}>
                            INDIAN<span className="font-sans font-light text-base tracking-[0.3em] ml-2 text-brand-gold">BRASS MURTI</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12 items-center">
                        {menuItems.map((item) => (
                            <Link key={item.name} to={item.path} className={`${txtClasses} hover:text-brand-gold relative group`}>
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
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
                        <Link to="/cart" className={txtClasses + " hover:text-brand-gold relative"}>
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className={isDarkStyle ? 'text-brand-dark' : 'text-brand-cream'}>
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
                    {menuItems.map((item) => (
                        <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="text-3xl font-serif text-brand-cream hover:text-brand-gold transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
