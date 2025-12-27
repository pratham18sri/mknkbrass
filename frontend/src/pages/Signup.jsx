import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, ArrowRight, Loader } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [activeTab, setActiveTab] = useState('retail');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        // Wholesale Fields
        companyName: '',
        gstNumber: '',
        businessAddress: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                role: activeTab === 'retail' ? 'retail' : 'wholesale',
                businessDetails: activeTab === 'wholesale' ? {
                    companyName: formData.companyName,
                    gstNumber: formData.gstNumber,
                    businessAddress: formData.businessAddress
                } : undefined
            };

            const res = await axios.post('http://localhost:5000/api/auth/register', payload);

            // On success (You might want to save token to context/storage here)
            // For now, redirect to login
            console.log(res.data);
            navigate('/login');

        } catch (error) {
            console.error(error.response?.data?.message || 'Signup failed');
            alert('Signup Failed: ' + (error.response?.data?.message || 'Server Error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-12 bg-brand-cream px-4 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl rounded-sm shadow-xl overflow-hidden border border-brand-gold/10 relative">

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="text-center pt-10 pb-6 px-8">
                    <h2 className="text-3xl font-serif text-brand-dark mb-2">Create Account</h2>
                    <p className="text-brand-gray text-sm">Join the Indian Brass Murti family</p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100 mx-8 mb-8">
                    <button
                        onClick={() => setActiveTab('retail')}
                        className={`flex-1 pb-4 text-sm font-medium tracking-wide transition-all relative ${activeTab === 'retail' ? 'text-brand-gold' : 'text-gray-400 hover:text-brand-dark'}`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <User size={18} />
                            Retail Customer
                        </div>
                        {activeTab === 'retail' && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('wholesale')}
                        className={`flex-1 pb-4 text-sm font-medium tracking-wide transition-all relative ${activeTab === 'wholesale' ? 'text-brand-gold' : 'text-gray-400 hover:text-brand-dark'}`}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Briefcase size={18} />
                            Wholesale / Business
                        </div>
                        {activeTab === 'wholesale' && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold" />
                        )}
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">First Name</label>
                            <input
                                type="text" name="firstName" required
                                value={formData.firstName} onChange={handleChange}
                                className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Last Name</label>
                            <input
                                type="text" name="lastName" required
                                value={formData.lastName} onChange={handleChange}
                                className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Email Address</label>
                        <input
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange}
                            className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Password</label>
                        <input
                            type="password" name="password" required
                            value={formData.password} onChange={handleChange}
                            className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                        />
                    </div>

                    <AnimatePresence>
                        {activeTab === 'wholesale' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-6 overflow-hidden"
                            >
                                <div className="pt-4 border-t border-dashed border-gray-200">
                                    <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-sm">Business Details Required</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Company Name</label>
                                        <input
                                            type="text" name="companyName" required={activeTab === 'wholesale'}
                                            value={formData.companyName} onChange={handleChange}
                                            className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">GST / Tax ID</label>
                                        <input
                                            type="text" name="gstNumber" required={activeTab === 'wholesale'}
                                            value={formData.gstNumber} onChange={handleChange}
                                            className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Business Address</label>
                                    <textarea
                                        name="businessAddress" required={activeTab === 'wholesale'}
                                        rows="2"
                                        value={formData.businessAddress} onChange={handleChange}
                                        className="w-full bg-brand-cream/30 border border-gray-200 p-3 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                                    ></textarea>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-brand-dark text-white py-4 font-bold tracking-widest hover:bg-brand-gold transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader className="animate-spin" size={20} /> : (
                            <>
                                {activeTab === 'retail' ? 'Create Account' : 'Request Business Access'}
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account? <a href="/login" className="text-brand-dark font-bold hover:text-brand-gold underline decoration-brand-gold/50">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
