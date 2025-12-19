import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, BookOpen, TrendingUp } from 'lucide-react';
import './OJTProgram.css';

const OJTProgram = () => {
    return (
        <div className="ojt-page">
            <header className="page-header ojt-header">
                <div className="container">
                    <h1 className="page-title">Start Your Career with <span className="highlight-green">Real Work</span></h1>
                    <p className="page-subtitle">
                        Not classroom training. Real work in a real environment for freshers and career starters.
                    </p>
                </div>
            </header>

            <section className="intro-section">
                <div className="container">
                    <div className="intro-box">
                        <h2>Who This Is For</h2>
                        <div className="target-grid">
                            <div className="target-item">Fresh Graduates</div>
                            <div className="target-item">Career Switchers</div>
                            <div className="target-item">"No Experience" Rejects</div>
                            <div className="target-item">Skill Builders</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-ojt-works">
                <div className="container">
                    <h2>How the OJT Program Works</h2>
                    <div className="steps-row">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Join as Trainee</h3>
                            <p>Start your journey as an official On-Job Trainee.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Live Projects</h3>
                            <p>Head straight into live projects and deliverables.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Learn Tools</h3>
                            <p>Master industry tools, processes, and workflows.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Evaluation</h3>
                            <p>Continuous performance monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="performance-banner">
                <div className="container">
                    <div className="perf-content">
                        <h2>Hiring Is 100% Performance-Based</h2>
                        <ul>
                            <li>No fake experience</li>
                            <li>No guaranteed job promises</li>
                            <li>Only performers move forward</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="container">
                    <h2>Start Building Real Skills</h2>
                    <p>Gain industry exposure and strong resume credibility.</p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                        Apply for OJT Program
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default OJTProgram;
