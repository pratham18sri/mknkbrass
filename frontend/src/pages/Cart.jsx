import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    const totals = useMemo(() => {
        return cart.reduce((acc, item) => {
            acc.price += item.price * item.quantity;
            return acc;
        }, { price: 0 });
    }, [cart]);

    const handleCheckout = () => {
        // Create a formatted message for WhatsApp
        let message = "*New Order Request*\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. *${item.name}* (${item.weight || 'N/A'})\n`;
            message += `   Qty: ${item.quantity} x ₹${item.price.toLocaleString('en-IN')} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
        });
        message += `*Total Amount: ₹${totals.price.toLocaleString('en-IN')}*\n`;
        message += "\nPlease confirm availability and shipping details.";

        const url = `https://wa.me/917017789326?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-cream px-4">
                <div className="w-24 h-24 bg-brand-dark/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={48} className="text-brand-dark/30" />
                </div>
                <h2 className="text-3xl font-serif text-brand-dark mb-4">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">
                    Looks like you haven't added any divine forms to your collection yet.
                </p>
                <Link
                    to="/shop-retail"
                    className="flex items-center gap-2 bg-brand-dark text-brand-cream px-8 py-3 rounded-lg font-medium hover:bg-brand-gold hover:text-brand-dark transition-colors"
                >
                    Browse Collection <ArrowRight size={18} />
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-16 min-h-screen bg-brand-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h1 className="text-4xl font-serif text-brand-dark mb-12">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3 space-y-6">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="bg-white p-4 rounded-xl shadow-sm border border-brand-dark/5 flex gap-6 items-center"
                                >
                                    {/* Image */}
                                    <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-serif text-brand-dark">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.weight}</p>
                                            </div>
                                            <p className="text-lg font-bold text-brand-dark">₹{item.price.toLocaleString('en-IN')}</p>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-600 transition-all"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="w-8 text-center font-medium text-brand-dark">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-600 transition-all"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                                                title="Remove Item"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-dark/5 sticky top-32">
                            <h2 className="text-2xl font-serif text-brand-dark mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                    <span>₹{totals.price.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-sm italic">Calculated at checkout</span>
                                </div>
                                <div className="border-t border-dashed border-gray-200 my-4"></div>
                                <div className="flex justify-between text-xl font-bold text-brand-dark">
                                    <span>Total</span>
                                    <span>₹{totals.price.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-6 h-6" />
                                Proceed to Buy
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Secure checkout via WhatsApp. You will be redirected to chat with the owner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
