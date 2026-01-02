import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const OJT = () => {
    return (
        <div className="flex flex-col w-full bg-white py-[100px]">
            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden flex flex-col rounded-[50px] mx-auto"
                style={{
                    width: '1360px',
                    minHeight: '600px',
                    marginTop: '10px',
                    marginLeft: '40px',
                    marginRight: 'auto'
                }}
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full flex-grow py-20">
                    <div className="w-full">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white leading-tight mb-6 tracking-tight">
                            Start Your Career With Real Work,<br />
                            <span className="font-bold">Not Theory</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Our On-Job Trainee (OJT) Program is designed for freshers and career starters who struggle to get hired due to lack of real experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who This Is For Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-4">
                            Who This <span className="font-bold">Is For</span>
                        </h2>
                        <p className="text-gray-500 font-light text-xl">
                            This is not classroom training.<br />
                            This is real work in a real environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Card 1 */}
                        <div className="flex flex-col">
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 rounded-t-2xl text-center h-48 flex items-center justify-center">
                                <h3 className="text-3xl font-heading font-medium">Fresh<br />Graduates</h3>
                            </div>
                            <div className="bg-white border border-gray-200 border-t-0 p-8 rounded-b-2xl shadow-sm text-center h-40 flex items-center justify-center">
                                <p className="text-gray-600 font-light text-lg">
                                    Candidates rejected due to<br />"no experience"
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col">
                            <div className="bg-white border border-gray-200 text-gray-900 p-10 rounded-t-2xl text-center h-48 flex items-center justify-center relative overflow-hidden">
                                <h3 className="text-3xl font-heading font-medium relative z-10">Career<br />switchers</h3>
                            </div>
                            <div className="bg-white border border-gray-200 border-t-0 p-8 rounded-b-2xl shadow-sm text-center h-40 flex items-center justify-center">
                                <p className="text-gray-600 font-light text-lg">
                                    Those who want to build skills<br />the right way
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How the OJT Program Works */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900">
                            How the OJT <span className="font-bold">Program Works</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Join as an On-Job Trainee", bg: "bg-[#FFF5EB]" },
                            { title: "Work on live projects and real deliverables", bg: "bg-[#E6FFFA]" },
                            { title: "Learn industry tools, processes, and workflows", bg: "bg-[#F3E8FF]" },
                            { title: "Continuous performance evaluation", bg: "bg-[#F1F5F9]" }
                        ].map((step, index) => (
                            <div key={index} className={`${step.bg} p-8 rounded-xl aspect-square flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow`}>
                                <p className="text-gray-800 font-medium text-lg leading-relaxed">{step.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section: Performance Based & What You Gain */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Card 1: Performance Based */}
                        <div className="bg-white p-0 md:p-0 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-sm hover:-translate-y-1">
                            <div className="w-full h-80 overflow-hidden">
                                <img
                                    src="/ojt-resume-review.png"
                                    alt="Resume Review"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-light text-gray-800 mb-8">
                                    Hiring Is 100% <span className="font-bold">Performance-Based</span>
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 font-light text-lg">No fake experience</p>
                                    <p className="text-gray-600 font-light text-lg">No guaranteed job promises</p>
                                    <p className="text-gray-600 font-light text-lg">Only performers move forward</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: What You Gain */}
                        <div className="bg-white p-0 md:p-0 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-sm hover:-translate-y-1">
                            <div className="w-full h-80 overflow-hidden">
                                <img
                                    src="/ojt-people-working.png"
                                    alt="People Working"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-light text-gray-800 mb-8">
                                    What <span className="font-bold">You Gain</span>
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-600 font-light text-lg">Real-world experience</p>
                                    <p className="text-gray-600 font-light text-lg">Industry exposure</p>
                                    <p className="text-gray-600 font-light text-lg">Strong resume credibility</p>
                                    <p className="text-gray-600 font-light text-lg">A clear hiring pathway based on merit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OJT;
