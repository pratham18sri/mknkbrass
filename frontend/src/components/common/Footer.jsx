import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-serif text-2xl font-bold text-brand-gold tracking-wide block mb-6">
                            Indian Brass Murti
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Preserving the ancient Indian tradition of brass casting.
                            Manufactured with devotion, delivered with care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Our Story</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Retail Shop</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Wholesale Inquiry</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Custom Orders</a></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Customer Care</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Track Order</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-gold text-sm transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
                        <p className="text-gray-400 text-sm mb-2">Hathras, India (Brass City)</p>
                        <p className="text-gray-400 text-sm mb-2">+91 98765 43210</p>
                        <p className="text-gray-400 text-sm">support@indianbrassmurti.com</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs mb-4 md:mb-0">
                        © 2026 Indian Brass Murti. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {/* Social Icons would go here */}
                        <span className="text-gray-500 text-xs">Privacy Policy</span>
                        <span className="text-gray-500 text-xs">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
