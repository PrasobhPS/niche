import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BookOpen, Briefcase, GraduationCap, DollarSign, CheckCircle } from 'lucide-react';
import './USAPathways.css';

const USAPathways = () => {
    return (
        <div className="bg-white font-sans w-full max-w-[1440px] mx-auto">
            {/* Hero Section */}
            <section className="relative w-[1360px] mx-auto mt-[50px] md:mt-[100px] h-[500px] rounded-[50px] overflow-hidden bg-black flex items-center">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/30 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-12 md:px-24 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                        Move To The USA,<br />
                        <span className="font-bold">The Right Way</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                        We help freshers and experienced professionals move to the USA legally through the most suitable visa route, based on profile eligibility, career stage, and financial practicality.
                    </p>
                </div>
            </section>

            {/* Visa Pathways Map Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-light text-black mb-4">
                        Visa Pathways <span className="font-bold">We Work With</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
                        We do not push a single visa.<br />
                        We recommend what actually works for your profile.
                    </p>

                    <div className="relative max-w-5xl mx-auto">
                        <img
                            src="/usa-map-faded.png"
                            alt="USA Map Background"
                            className="w-full h-auto opacity-50"
                        />

                        {/* Overlay Points - Positioning is approximate based on design, aiming for a timeline look */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Line connection */}
                            <div className="absolute w-[80%] h-1 bg-gradient-to-r from-purple-500 to-pink-500 top-1/2 transform -translate-y-1/2 hidden md:block"></div>

                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full px-10 relative z-10">
                                {/* Point 1: H-1B */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg">H-1B</h3>
                                </div>
                                {/* Point 2: O-1 */}
                                <div className="flex flex-col items-center group mt-10 md:mt-[-40px]">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg">O-1</h3>
                                </div>
                                {/* Point 3: L-1 */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg">L-1</h3>
                                </div>
                                {/* Point 4: F-1 */}
                                <div className="flex flex-col items-center group mt-10 md:mt-[-40px]">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg">F-1 <span className="block text-xs font-normal text-gray-500">OPT<br />Green Card</span></h3>
                                </div>
                                {/* Point 5: J-1 */}
                                <div className="flex flex-col items-center group">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg">J-1</h3>
                                </div>
                                {/* Point 6: B-1 */}
                                <div className="flex flex-col items-center group mt-10 md:mt-[-40px]">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg mb-2 relative z-10"></div>
                                    <h3 className="font-bold text-lg text-center leading-tight">B-1<br /><span className="text-xs font-normal text-gray-500">(Business Travel)</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Route Highlight */}

            {/* How We Decide Section */}
            <section className="bg-black text-white">
                <div className="flex flex-col lg:flex-row min-h-[600px]">
                    {/* Left Content */}
                    <div className="lg:w-1/2 p-20 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-light mb-12">
                            How We Decide <span className="font-bold">the Right Route</span>
                        </h2>

                        <ul className="space-y-6 text-xl text-gray-300 font-light">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                                Education & marks
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                                Work experience
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                                Skill relevance
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                                Financial feasibility
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                                Long-term employability in the USA
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                        <img
                            src="/usa-students.png"
                            alt="Students Planning"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </div>
                </div>
            </section>

            {/* Info Cards / CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {/* Popular Route Card */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src="/usa-flag-docs.png" alt="USA Flag and Documents" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-4">Popular & Practical Route: <span className="font-light">F-1 → OPT → H-1B</span></h3>
                                <ul className="space-y-3 text-gray-600 text-sm flex-grow">
                                    <li>Low upfront investment (only government fees)</li>
                                    <li>Opportunity to earn while studying</li>
                                    <li>Legal U.S. work experience through OPT</li>
                                    <li>H-1B processed later as a change of status (no high upfront employer cost)</li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Card */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src="/usa-passport-pen.png" alt="Passport" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-4">What <span className="font-light">You Get</span></h3>
                                <ul className="space-y-3 text-gray-600 text-sm flex-grow">
                                    <li>Clear eligibility assessment</li>
                                    <li>University & Visa guidance</li>
                                    <li>Loan & Scholarship assistance (where applicable)</li>
                                    <li>Long-term career planning, not just visa filing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-20">
                        <div className="inline-block border border-purple-500 rounded p-1">
                            <Link to="/contact" className="block bg-white text-black px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-purple-50 transition-colors border border-gray-200">
                                Check Your USA Eligibility
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default USAPathways;
