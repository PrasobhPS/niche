import React from 'react';
import { Link } from 'react-router-dom';
import { Check, UserCheck, Map, FileCode, MonitorPlay } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="how-page">
            <section className="how-hero section-padding text-center">
                <div className="container">
                    <h1 className="hero-title animate-fade-in">How Niche Tech <span className="text-highlight">Works</span></h1>
                    <p className="hero-subtitle animate-fade-in">Step-by-step guidance. Transparent execution. Long-term support.</p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section-padding pt-0">
                <div className="container">
                    <div className="timeline">
                        {[
                            {
                                icon: <UserCheck />,
                                title: "Step 1: Profile Evaluation",
                                desc: "We assess your education, experience, skills, and goals."
                            },
                            {
                                icon: <Map />,
                                title: "Step 2: Right Path Recommendation",
                                desc: "USA pathway, OJT program, or a phased approach (OJT → USA)."
                            },
                            {
                                icon: <FileCode />,
                                title: "Step 3: Structured Execution",
                                desc: "Clear documentation, timelines, costs, and expectations."
                            },
                            {
                                icon: <MonitorPlay />,
                                title: "Step 4: Long-Term Career Support",
                                desc: "We focus on where you will be in 3–5 years, not just the next step."
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-icon">{step.icon}</div>
                                <div className="timeline-content glass-panel">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-darker">
                <div className="container">
                    <div className="split-layout">
                        <div className="split-text">
                            <h2 className="section-title">Why Choose Us?</h2>
                            <p className="mb-4 text-muted description-text">
                                We believe careers are built, not sold.
                            </p>
                            <Link to="/contact" className="btn btn-gradient big-btn">
                                Get Your Evaluation
                            </Link>
                        </div>
                        <div className="split-grid">
                            <div className="feature-simple">
                                <Check className="text-highlight" />
                                <span>No false guarantees</span>
                            </div>
                            <div className="feature-simple">
                                <Check className="text-highlight" />
                                <span>Transparent communication</span>
                            </div>
                            <div className="feature-simple">
                                <Check className="text-highlight" />
                                <span>Multiple career routes</span>
                            </div>
                            <div className="feature-simple">
                                <Check className="text-highlight" />
                                <span>Performance over promises</span>
                            </div>
                            <div className="feature-simple">
                                <Check className="text-highlight" />
                                <span>Long-term thinking</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
