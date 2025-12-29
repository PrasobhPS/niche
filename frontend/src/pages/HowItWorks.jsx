import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative w-full bg-black py-24 md:py-32 px-6 overflow-hidden">
                {/* Background Glows matching Home.jsx style */}
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10 text-left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-white mb-6 leading-tight">
                        Start Your Career With Real<br />
                        Work,<br />
                        <span className="font-bold">Not Theory</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-6">
                        Our On-Job Trainee (OJT) Program is designed for freshers and career starters who struggle to get hired due to lack of real experience.
                    </p>
                </div>
            </section>

            {/* Who This Is For Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
                            Who This <span className="font-bold">Is For</span>
                        </h2>
                        <p className="text-gray-500 uppercase text-xs tracking-widest mb-1">THIS IS NOT CLASSROOM TRAINING.</p>
                        <p className="text-gray-500 uppercase text-xs tracking-widest">THIS IS REAL WORK IN A REAL ENVIRONMENT.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 shadow-sm mx-auto max-w-4xl">
                        {/* Box 1 - Purple */}
                        <div className="bg-[#8B5CF6] p-16 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-80">
                            <h3 className="text-white text-2xl font-light">
                                Fresh<br />
                                <span className="font-bold text-3xl">Graduates</span>
                            </h3>
                        </div>

                        {/* Box 2 - White */}
                        <div className="bg-white p-16 flex flex-col justify-center items-center text-center border-b border-gray-100 md:border-b-0 md:border-l aspect-square md:aspect-auto md:h-80">
                            <h3 className="text-black text-2xl font-light">
                                Career<br />
                                <span className="font-bold text-3xl">switchers</span>
                            </h3>
                        </div>

                        {/* Box 3 - White */}
                        <div className="bg-white p-16 flex flex-col justify-center items-center text-center border-r-0 md:border-r border-gray-100 aspect-square md:aspect-auto md:h-80">
                            <h3 className="text-black text-xl font-light">
                                Candidates<br />
                                rejected due to<br />
                                <span className="font-bold text-2xl">"no experience"</span>
                            </h3>
                        </div>

                        {/* Box 4 - White */}
                        <div className="bg-white p-16 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-80">
                            <h3 className="text-black text-xl font-light">
                                Those who want<br />
                                to build skills the<br />
                                <span className="font-bold text-2xl">right way</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* How OJT Works */}
            <section className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-black">
                            How the OJT <span className="font-bold">Program Works</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="bg-[#FFF8F3] p-10 rounded-xl aspect-square flex items-center justify-center text-center hover:shadow-lg transition-shadow">
                            <p className="text-black font-medium leading-relaxed">
                                Join as an<br />
                                On-Job<br />
                                Trainee
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-[#F0FDFA] p-10 rounded-xl aspect-square flex items-center justify-center text-center hover:shadow-lg transition-shadow">
                            <p className="text-black font-medium leading-relaxed">
                                Work on live<br />
                                projects<br />
                                and real<br />
                                deliverables
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-[#F5F3FF] p-10 rounded-xl aspect-square flex items-center justify-center text-center hover:shadow-lg transition-shadow">
                            <p className="text-black font-medium leading-relaxed">
                                Learn industry<br />
                                tools,<br />
                                processes,<br />
                                and workflows
                            </p>
                        </div>
                        {/* Step 4 */}
                        <div className="bg-gray-100 p-10 rounded-xl aspect-square flex items-center justify-center text-center hover:shadow-lg transition-shadow">
                            <p className="text-black font-medium leading-relaxed">
                                Continuous<br />
                                performance<br />
                                evaluation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Image Banner */}
            <div className="w-full h-80 md:h-[500px] overflow-hidden">
                <img
                    src="/how-it-works-office.png"
                    alt="Modern Office"
                    className="w-full h-full object-cover grayscale opacity-80"
                />
            </div>

            {/* Performance Based / What You Gain */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Card */}
                        <div className="bg-white rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100/50 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                            <div className="h-64 sm:h-72 overflow-hidden">
                                <img
                                    src="/performance-new.png"
                                    alt="Performance Review"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
                                    Hiring Is 100% <span className="font-bold">Performance-Based</span>
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        No fake experience
                                    </li>
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        No guaranteed job promises
                                    </li>
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        Only performers move forward
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="bg-white rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100/50 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                            <div className="h-64 sm:h-72 overflow-hidden">
                                <img
                                    src="/gain-new.png"
                                    alt="Team Meeting"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
                                    What <span className="font-bold">You Gain</span>
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        Real-world experience
                                    </li>
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        Industry exposure
                                    </li>
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        Strong resume credibility
                                    </li>
                                    <li className="flex items-start text-base text-gray-600 font-light">
                                        A clear hiring pathway based on merit
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-black py-24 md:py-32 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4">
                        Ready to Take <span className="font-bold">the Next</span><br />
                        <span className="font-bold">Step?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
                        Niche Tech Career helps individuals build real careers, either by moving to the<br className="hidden md:block" />
                        USA legally or by starting strong through a performance-based On-Job Trainee<br className="hidden md:block" />
                        (OJT) program.
                    </p>
                    <Link to="/contact" className="inline-block border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 uppercase">
                        Start Now
                    </Link>
                </div>
                {/* Footer Links Mini (as per image) */}
                <div className="max-w-6xl mx-auto mt-24 border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500">
                    <div className="mb-8 md:mb-0 text-left">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact Us</h4>
                        <p>Correia@nichetechcareer.com</p>
                    </div>
                    <div className="text-left md:text-right">
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">Youtube</a>
                            <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 text-left text-[10px] text-gray-700">
                    © 2024 Niche Tech Career. All rights reserved.
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
