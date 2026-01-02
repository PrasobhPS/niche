import React from 'react';
import { Mail, Send, Linkedin, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex flex-col w-full font-sans">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/contact-hero.png"
                        alt="Workspace"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white mt-10">
                    <h1 className="text-4xl md:text-6xl font-light mb-6">
                        Let's Evaluate <span className="font-normal text-purple-200">Your Profile</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Not sure which path fits you?<br className="hidden md:block" />
                        We offer a free initial profile evaluation to help you decide.
                    </p>
                </div>
            </section>

            {/* Who Should Contact Us Section */}
            <section className="bg-black py-0">
                <div className="flex flex-col lg:flex-row">
                    {/* Left: Content */}
                    <div className="lg:w-1/2 p-20 lg:p-24 bg-black text-white flex items-center">
                        <div className="max-w-xl">
                            {/* Decorative Line */}
                            <div className="h-px w-full bg-gray-800 mb-12"></div>

                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-medium mb-4 leading-normal">Anyone planning to move to the USA</h3>
                                    <div className="h-px w-full bg-gray-800"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-light text-gray-400">Freshers struggling to get hired</h3>
                                    <div className="h-px w-full bg-gray-900 mt-4"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-light text-gray-400">Professionals stuck due to visa or experience gaps</h3>
                                    <div className="h-px w-full bg-gray-900 mt-4"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-light text-gray-400">Career switchers looking for structured growth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="lg:w-1/2 relative bg-black">
                        <img
                            src="/contact-graph.png"
                            alt="Growth Chart"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* What to Share / Form Section - Gradient Background */}
            <section className="py-24 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-purple-200 to-orange-200 opacity-90"></div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-5xl md:text-7xl font-light text-black mb-4 leading-tight">
                                What to<br />
                                <span className="font-bold">Share</span>
                            </h2>
                            <div className="mt-12 space-y-4">
                                <p className="flex items-center text-lg text-black/80 font-medium">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                                    Resume or LinkedIn profile
                                </p>
                                <p className="flex items-center text-lg text-black/80 font-medium">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                                    Education details
                                </p>
                                <p className="flex items-center text-lg text-black/80 font-medium">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                                    Work experience (if any)
                                </p>
                                <p className="flex items-center text-lg text-black/80 font-medium">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
                                    Career goal (India / USA / both)
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Text & Email Form Mock */}
                        <div className="lg:mt-10">
                            <p className="text-lg text-white font-medium mb-6 drop-shadow-sm">
                                Niche Tech Career – Building careers through clarity, performance, and real outcomes.
                            </p>

                            <div className="mt-20">
                                <p className="text-white text-lg mb-4">Email: info@nichetechcareer.com</p>
                                <div className="border border-white/50 rounded p-1 backdrop-blur-sm">
                                    <button className="w-full bg-white/10 hover:bg-white/20 text-white text-sm py-4 uppercase tracking-widest transition-colors border border-white/20">
                                        Get Free Profile Evaluation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer space handled by Layout/Footer */}
        </div>
    );
};

export default Contact;
