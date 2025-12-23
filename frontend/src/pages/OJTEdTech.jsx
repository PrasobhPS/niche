import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, Zap, AlertTriangle, CheckSquare } from 'lucide-react';
import './OJTEdTech.css';

const OJTEdTech = () => {
    return (
        <div className="edtech-page">
            <section className="edtech-hero section-padding">
                <div className="container">
                    <span className="badge highlight mb-3">Active Recruitment</span>
                    <h1 className="hero-title">On-Job Trainee (OJT) – <span className="text-highlight">EdTech Project</span></h1>
                    <p className="hero-subtitle">
                        We are building a 30-member team for our EdTech product. This opportunity is not for everyone.
                    </p>
                </div>
            </section>

            <div className="container section-padding pt-0">
                <div className="warning-box mb-5">
                    <AlertTriangle size={24} className="warning-icon" />
                    <p><strong>Please Note:</strong> This is NOT a classroom program. If you are looking for shortcuts, certificates, or guaranteed placement—this is not for you.</p>
                </div>

                <div className="details-grid">
                    {/* Left Column: Process & Info */}
                    <div className="details-content">
                        <div className="info-block mb-5">
                            <h2>Selection Process</h2>
                            <ul className="custom-list">
                                <li>All applicants must clear a basic entrance assessment.</li>
                                <li>Only shortlisted candidates will be invited to join.</li>
                                <li>Selection is based on aptitude, problem-solving, and mindset.</li>
                            </ul>
                        </div>

                        <div className="info-block mb-5">
                            <h2>What Makes This Different</h2>
                            <p className="mb-3 text-muted">You will be treated as a core team member, not a trainee.</p>
                            <div className="features-list">
                                <div className="feature-row">
                                    <Users size={20} className="text-highlight" />
                                    <span>Work directly with senior professionals.</span>
                                </div>
                                <div className="feature-row">
                                    <CheckSquare size={20} className="text-highlight" />
                                    <span>Deliver real tasks while learning on the job.</span>
                                </div>
                                <div className="feature-row">
                                    <Zap size={20} className="text-highlight" />
                                    <span>Hands-on exposure to industry-grade tools & AI.</span>
                                </div>
                                <div className="feature-row">
                                    <Code size={20} className="text-highlight" />
                                    <span>Attend team meetings, planning, and code reviews.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="details-sidebar">
                        <div className="glass-panel p-4 sticky-card">
                            <h3>Performance Based Hiring</h3>
                            <hr className="divider" />
                            <ul className="sidebar-list">
                                <li>No fake experience</li>
                                <li>No guaranteed job offers</li>
                                <li>Top performers hired based on contribution</li>
                            </ul>
                            <div className="mt-4">
                                <Link to="/contact" className="btn btn-gradient w-100">
                                    👉 Apply Now
                                </Link>
                                <p className="text-small text-center mt-2 text-muted">
                                    Apply only if you’re ready to perform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OJTEdTech;
