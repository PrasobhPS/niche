import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className="flex flex-col w-full bg-white py-[100px]">
            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden flex flex-col rounded-[50px] mx-auto"
                style={{
                    width: '1360px',
                    minHeight: '600px',
                    marginLeft: '40px',
                    marginRight: 'auto'
                }}
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full flex-grow">
                    {/* Left Image */}
                    <div className="h-full w-full flex items-end justify-center lg:justify-start">
                        <img
                            src="/how-it-works-hero.png"
                            alt="Professionals"
                            className="w-full max-w-lg object-contain lg:absolute lg:bottom-0 lg:left-0 lg:max-w-xl xl:max-w-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="text-white pt-20 pb-20 lg:py-0 pl-0 lg:pl-10">
                        <h1 className="font-heading font-light text-5xl md:text-7xl lg:text-8xl leading-tight">
                            Why<br />
                            Choose<br />
                            <span className="font-bold">US</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900">
                            How Niche Tech <span className="font-bold">Career Works</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

                        <div className="space-y-12 md:space-y-24">
                            {/* Step 1 - Left */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="flex-1 md:text-right md:pr-12 md:order-1 pl-12 md:pl-0">
                                    <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                                        <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-normal">Profile Evaluation</h3>
                                        <p className="text-gray-500 font-light text-sm">We assess your education, experience, skills, and goals.</p>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center transform md:-translate-x-1/2 md:-translate-y-0 -translate-y-[calc(100%+12px)] top-[20px] md:top-auto">
                                    <div className="w-4 h-4 bg-accent-purple rounded-full shadow-[0_0_0_4px_rgba(124,58,237,0.2)]"></div>
                                </div>
                                <div className="flex-1 md:order-2"></div>
                            </div>

                            {/* Step 2 - Right */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="flex-1 md:order-1"></div>
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center transform md:-translate-x-1/2 top-[20px] md:top-auto">
                                    <div className="w-4 h-4 bg-accent-purple rounded-full shadow-[0_0_0_4px_rgba(124,58,237,0.2)]"></div>
                                </div>
                                <div className="flex-1 md:pl-12 md:order-2 pl-12 md:pl-12">
                                    <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                                        <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-normal">Right Path Recommendation</h3>
                                        <ul className="text-gray-500 font-light text-sm list-disc list-inside space-y-1">
                                            <li>USA pathway</li>
                                            <li>OJT program</li>
                                            <li>Or a phased approach (OJT → USA later)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Left */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="flex-1 md:text-right md:pr-12 md:order-1 pl-12 md:pl-0">
                                    <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                                        <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-normal">Structured Execution</h3>
                                        <p className="text-gray-500 font-light text-sm">Clear documentation, timelines, costs, and expectations.</p>
                                    </div>
                                </div>
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center transform md:-translate-x-1/2 top-[20px] md:top-auto">
                                    <div className="w-4 h-4 bg-accent-purple rounded-full shadow-[0_0_0_4px_rgba(124,58,237,0.2)]"></div>
                                </div>
                                <div className="flex-1 md:order-2"></div>
                            </div>

                            {/* Step 4 - Right */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="flex-1 md:order-1"></div>
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 flex items-center justify-center transform md:-translate-x-1/2 top-[20px] md:top-auto">
                                    <div className="w-4 h-4 bg-accent-purple rounded-full shadow-[0_0_0_4px_rgba(124,58,237,0.2)]"></div>
                                </div>
                                <div className="flex-1 md:pl-12 md:order-2 pl-12 md:pl-12">
                                    <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                                        <h3 className="text-xl md:text-2xl text-gray-800 mb-2 font-normal">Long-Term Career Support</h3>
                                        <p className="text-gray-500 font-light text-sm">We focus on where you will be in 3-5 years, not just the next step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[100px] md:py-[120px] bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-2">
                            Why Choose
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-12">
                            Niche Tech Career
                        </h2>

                        <div className="space-y-4 mb-16">
                            <p className="text-xl md:text-2xl font-light text-gray-600">No false guarantees</p>
                            <p className="text-xl md:text-2xl font-light text-gray-600">Transparent communication</p>
                            <p className="text-xl md:text-2xl font-light text-gray-600">Multiple career routes</p>
                            <p className="text-xl md:text-2xl font-light text-gray-600">Performance over promises</p>
                            <p className="text-xl md:text-2xl font-light text-gray-600">Long-term thinking</p>
                        </div>

                        <p className="text-2xl md:text-3xl text-gray-900 font-light">
                            We believe careers are <span className="font-bold">built, not sold.</span>
                        </p>
                    </div>
                </div>

                {/* Images positioned at edges */}
                <img
                    src="/why-choose-1.png"
                    alt="Working"
                    className="absolute bottom-0 left-0 w-1/3 max-w-md object-contain lg:block hidden"
                />
                <img
                    src="/why-choose-2.png"
                    alt="Working"
                    className="absolute bottom-10 right-0 w-1/3 max-w-md object-contain lg:block hidden"
                />
            </section>


        </div>
    );
};

export default HowItWorks;
