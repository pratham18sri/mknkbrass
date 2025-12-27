import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Import images
import ganesh from '../assets/ganesh.png';
import krishna from '../assets/krishna.png';
import lakshmi from '../assets/lakshmi.png';
import shiva from '../assets/shiva.png';

// Mock Data
const products = [
    { id: 1, name: 'Ganesh Idol - Antique Finish', price: 12500, category: 'Ganesh', img: ganesh, description: "Handcrafted brass Ganesh idol with antique finish." },
    { id: 2, name: 'Sitting Ganesh', price: 8500, category: 'Ganesh', img: ganesh, description: "Detailed sitting Ganesh for home altar." },
    { id: 3, name: 'Krishna Playing Flute', price: 15999, category: 'Krishna', img: krishna, description: "Exquisite brass Krishna playing the flute." },
    { id: 4, name: 'Radha Krishna Set', price: 24500, category: 'Krishna', img: krishna, description: "Pair of Radha and Krishna deities." },
    { id: 5, name: 'Lakshmi Standing', price: 11000, category: 'Lakshmi', img: lakshmi, description: "Symbol of wealth and prosperity." },
    { id: 6, name: 'Shiva Nataraja', price: 18500, category: 'Shiva', img: shiva, description: "Cosmic dancer Shiva in brass." },
];

const categories = ['All', 'Ganesh', 'Krishna', 'Lakshmi', 'Shiva'];

const Retailer = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { addToCart } = useCart();

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    const handleWhatsApp = (product) => {
        const message = `Hi, I am interested in buying *${product.name}* priced at ₹${product.price}. Can you please share more details?`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-brand-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">Direct to Retailers</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Shop Divine Collection</h1>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Purchase high-quality brass murtis directly for your home.
                        Bulk orders also available (check Wholesale section).
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrapjustify-center gap-4 mb-12 overflow-x-auto pb-4 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${selectedCategory === cat
                                    ? 'bg-brand-dark text-brand-gold shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-brand-gold/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-dark/5"
                        >
                            {/* Image Area */}
                            <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                                    ₹{product.price.toLocaleString('en-IN')}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-xs text-brand-gold font-bold uppercase tracking-wider mb-2">{product.category}</div>
                                <h3 className="text-xl font-serif text-brand-dark mb-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex-1 flex items-center justify-center gap-2 bg-brand-dark text-brand-cream py-3 rounded-lg font-medium hover:bg-brand-gold hover:text-brand-dark transition-colors"
                                    >
                                        <ShoppingCart size={18} />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleWhatsApp(product)}
                                        className="flex items-center justify-center w-12 bg-green-50 text-green-600 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                                        title="Buy via WhatsApp"
                                    >
                                        <MessageCircle size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Retailer;
