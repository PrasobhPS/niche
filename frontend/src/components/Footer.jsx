import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* CTA Section */}
                <section className="bg-black py-20 border-t border-gray-900">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-center bg-black">
                            <div className="mb-8 md:mb-0 max-w-2xl">
                                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                                    Ready to Take <span className="font-medium text-white">the Next Step?</span>
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                                    Niche Tech Career helps individuals build real careers, either by moving to the USA legally or by starting strong through a performance-based on-job trainee (OJT) program.
                                </p>
                            </div>
                            <div>
                                <div className="mt-10 md:mt-0">
                                    <Link
                                        to="/contact"
                                        className="inline-block border border-purple-500/50 hover:border-purple-500 text-white px-10 py-3 text-xs font-bold tracking-[0.2em] transition-all uppercase rounded-sm whitespace-nowrap"
                                    >
                                        Start Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom Links */}
                <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact US</h4>
                        <a href="mailto:Careers@nichetechies.com" className="text-gray-500 hover:text-white transition-colors text-xs underline decoration-gray-700 underline-offset-8">
                            Careers@nichetechies.com
                        </a>
                    </div>
                    <div className="flex flex-col md:items-end">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Connect</h4>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs decoration-transparent underline underline-offset-4 hover:decoration-white">Instagram</a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs decoration-transparent underline underline-offset-4 hover:decoration-white">Youtube</a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs decoration-transparent underline underline-offset-4 hover:decoration-white">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
