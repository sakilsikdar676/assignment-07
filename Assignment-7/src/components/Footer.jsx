import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a3a2a] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* Brand Name */}
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                {/* Tagline */}
                <p className="max-w-2xl text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Section */}
                <div className="mb-12">
                    <h3 className="text-lg font-medium mb-4">Social Links</h3>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full text-black hover:bg-gray-200 transition-colors">
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;