import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import './USACareerPathways.css';

const USACareerPathways = () => {
    return (
        <div className="usa-page">
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">Move to the USA – <span className="highlight-blue">The Right Way</span></h1>
                    <p className="page-subtitle">
                        We help freshers and experienced professionals move to the USA legally through the most suitable visa route.
                    </p>
                </div>
            </header>

            <section className="visa-routes-section">
                <div className="container">
                    <h2>Visa Pathways We Work With</h2>
                    <div className="visa-grid">
                        {[
                            { title: 'H-1B', desc: 'Specialty Occupations' },
                            { title: 'F-1 → OPT → H-1B', desc: 'Study to Work Pathway' },
                            { title: 'O-1', desc: 'Individuals with Extraordinary Ability' },
                            { title: 'J-1', desc: 'Exchange Visitor Program' },
                            { title: 'L-1', desc: 'Intre-company Transferee' },
                            { title: 'B-1', desc: 'Business Travel' },
                        ].map((visa, idx) => (
                            <div key={idx} className="visa-card">
                                <h3>{visa.title}</h3>
                                <p>{visa.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="advisory-note">
                        <p><strong>Note:</strong> We do not push a single visa. We recommend what actually works for <em>your</em> profile.</p>
                    </div>
                </div>
            </section>

            <section className="process-section">
                <div className="container">
                    <div className="two-col-grid">
                        <div className="col-content">
                            <h2>How We Decide the Right Route</h2>
                            <ul className="checklist">
                                <li><CheckCircle size={20} className="icon-check" /> Education & Marks Analysis</li>
                                <li><CheckCircle size={20} className="icon-check" /> Work Experience Evaluation</li>
                                <li><CheckCircle size={20} className="icon-check" /> Skill Relevance Check</li>
                                <li><CheckCircle size={20} className="icon-check" /> Financial Feasibility Assessment</li>
                                <li><CheckCircle size={20} className="icon-check" /> Long-term Employability</li>
                            </ul>
                        </div>
                        <div className="col-highlight">
                            <h3>Popular Route: F-1 → OPT → H-1B</h3>
                            <ul>
                                <li>Low upfront investment</li>
                                <li>Opportunity to earn while studying</li>
                                <li>Legal U.S. work experience (OPT)</li>
                                <li>Secure H-1B transition later</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <h2>Check Your USA Eligibility</h2>
                    <p>Get a clear assessment and long-term planning, not just visa filing.</p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                        Get Free Assessment
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default USACareerPathways;
