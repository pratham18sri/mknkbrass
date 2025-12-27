import React, { useState } from 'react';
import { ArrowRight, Loader } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);

            // Save Token & User Info
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data));

            // Redirect Logic
            if (res.data.role === 'admin') {
                navigate('/admin/dashboard');
            } else if (res.data.role === 'wholesale') {
                navigate('/wholesale/dashboard');
            } else {
                navigate('/'); // Retail users go to home
            }

        } catch (error) {
            console.error('Login Failed', error);
            alert('Invalid Email or Password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-12 bg-brand-cream px-4 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-sm shadow-xl overflow-hidden border border-brand-gold/10 relative">

                {/* Decorative Pattern */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                <div className="text-center pt-10 pb-8 px-8">
                    <h2 className="text-3xl font-serif text-brand-dark mb-2">Welcome Back</h2>
                    <p className="text-brand-gray text-sm">Login to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="px-8 pb-10 space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-brand-gray mb-1">Email Address</label>
                        <input
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange}
                            className="w-full bg-brand-cream/30 border border-gray-200 p-4 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="block text-xs uppercase tracking-wider text-brand-gray">Password</label>
                            <a href="#" className="text-xs text-brand-gold hover:underline">Forgot Password?</a>
                        </div>
                        <input
                            type="password" name="password" required
                            value={formData.password} onChange={handleChange}
                            className="w-full bg-brand-cream/30 border border-gray-200 p-4 text-brand-dark focus:outline-none focus:border-brand-gold focus:bg-white transition-colors rounded-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-brand-dark text-white py-4 font-bold tracking-widest hover:bg-brand-gold transition-colors duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader className="animate-spin" size={20} /> : (
                            <>
                                Secure Login <ArrowRight size={20} />
                            </>
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Don't have an account? <a href="/signup" className="text-brand-dark font-bold hover:text-brand-gold underline decoration-brand-gold/50">Register here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
