import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, BookOpen, Briefcase, GraduationCap, DollarSign, CheckCircle } from 'lucide-react';
import './USAPathways.css';

const USAPathways = () => {
    return (
        <div className="usa-page">
            {/* Hero */}
            <section className="usa-hero section-padding text-center">
                <div className="container">
                    <h1 className="hero-title animate-fade-in">Move to the <span className="text-highlight">USA</span> – The Right Way</h1>
                    <p className="hero-subtitle animate-fade-in">
                        We help freshers and experienced professionals move to the USA legally through the most suitable visa route, based on profile, career stage, and financials.
                    </p>
                </div>
            </section>

            {/* Visa Pathways */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Visa Pathways We Work With</h2>
                    <div className="grid-3">
                        {[
                            { title: 'H-1B', desc: 'Specialty Occupation Visa for professionals.' },
                            { title: 'F-1 → OPT → H-1B', desc: 'Study, Work, and Settle pathway.' },
                            { title: 'O-1', desc: 'For individuals with extraordinary ability.' },
                            { title: 'J-1', desc: 'Exchange Visitor Program for trainees/interns.' },
                            { title: 'L-1', desc: 'Intra-company transferee for executives/managers.' },
                            { title: 'B-1 / B-2', desc: 'Business travel and short-term assignments.' }
                        ].map((visa, index) => (
                            <div key={index} className="glass-panel p-4 visa-card">
                                <h3>{visa.title}</h3>
                                <p>{visa.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-4 text-muted">
                        <em>We do not push a single visa. We recommend what actually works for your profile.</em>
                    </p>
                </div>
            </section>

            {/* Popular Route Highlight */}
            <section className="section-padding bg-darker">
                <div className="container">
                    <h2 className="section-title text-center">Popular & Practical Route: <span className="text-highlight">F-1 → OPT → H-1B</span></h2>
                    <div className="route-benefits grid-2">
                        <div className="benefit-item">
                            <DollarSign className="icon-highlight" />
                            <div>
                                <h4>Low Upfront Investment</h4>
                                <p>Mainly government fees and tuition installments.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <Briefcase className="icon-highlight" />
                            <div>
                                <h4>Earn While Studying</h4>
                                <p>On-campus jobs and potential CPT opportunities.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <BookOpen className="icon-highlight" />
                            <div>
                                <h4>Legal Work Experience</h4>
                                <p>Gain U.S. experience through OPT (Optional Practical Training).</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <GraduationCap className="icon-highlight" />
                            <div>
                                <h4>H-1B Upgrade</h4>
                                <p>Processed later as a change of status without high upfront employer costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Decide */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-center">How We Decide the Right Route</h2>
                    <div className="decision-factors glass-panel">
                        <ul>
                            <li><CheckCircle size={20} className="text-highlight" /> Education & Academic Marks</li>
                            <li><CheckCircle size={20} className="text-highlight" /> Work Experience & Relevance</li>
                            <li><CheckCircle size={20} className="text-highlight" /> Skill Demand in USA</li>
                            <li><CheckCircle size={20} className="text-highlight" /> Financial Feasibility</li>
                            <li><CheckCircle size={20} className="text-highlight" /> Long-term Employability</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What You Get / CTA */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2 className="mb-4">What You Get With Us</h2>
                    <div className="features-grid grid-4 mb-5">
                        <div className="glass-panel p-3">Clear Eligibility Assessment</div>
                        <div className="glass-panel p-3">University & Visa Guidance</div>
                        <div className="glass-panel p-3">Loan & Scholarship Assistance</div>
                        <div className="glass-panel p-3">Long-term Career Planning</div>
                    </div>

                    <div className="cta-box glass-panel p-5">
                        <h3>Ready to Check Your Eligibility?</h3>
                        <Link to="/contact" className="btn btn-gradient btn-lg mt-4">
                            👉 Check Your USA Eligibility
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default USAPathways;
