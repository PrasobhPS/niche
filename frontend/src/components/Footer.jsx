import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full border-t border-gray-900 font-sans">
            <div className="container mx-auto px-6 max-w-[1440px]" style={{ paddingInline: '120px' }}>
                {/* CTA Section */}
                <div className="py-24 flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-10 md:mb-0" style={{ maxWidth: '742px' }}>
                        <h2 className="text-5xl md:text-5xl font-light text-white mb-2 tracking-tight leading-tight">
                            Ready to Take <span className="font-bold text-white">the Next Step?</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mt-6 font-light max-w-xl">
                            Niche Tech Career helps individuals build real careers, either by moving to the USA legally or by starting strong through a performance-based on-job trainee (OJT) program.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-20">
                        <Link
                            to="/contact"
                            className="inline-block border border-purple-500/50 hover:border-purple-500 text-white px-10 py-4 text-sm font-medium tracking-widest transition-all rounded-sm whitespace-nowrap"
                        >
                            Start Now
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800"></div>

                {/* Bottom Links */}
                <div className="py-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact US</h4>
                        <a href="mailto:Careers@nichetechies.com" className="text-gray-400 hover:text-white transition-colors text-sm underline decoration-gray-600 underline-offset-8">
                            Careers@nichetechies.com
                        </a>
                    </div>
                    <div className="flex flex-col md:items-end">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
                        <div className="flex gap-8">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm decoration-transparent underline underline-offset-4 hover:decoration-white">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm decoration-transparent underline underline-offset-4 hover:decoration-white">Youtube</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm decoration-transparent underline underline-offset-4 hover:decoration-white">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
