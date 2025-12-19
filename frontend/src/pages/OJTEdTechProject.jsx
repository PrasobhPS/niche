import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Code, Cpu, CheckSquare, AlertTriangle } from 'lucide-react';
import './OJTEdTechProject.css';

const OJTEdTechProject = () => {
    return (
        <div className="edtech-page">
            <header className="page-header edtech-header">
                <div className="container">
                    <h1 className="page-title">On-Job Trainee (OJT) – <span className="highlight-orange">EdTech Project</span></h1>
                    <p className="page-subtitle">
                        Building a 30-member team for our EdTech product.
                        <br /><strong>Selection is based on aptitude, problem-solving, and learning mindset.</strong>
                    </p>
                </div>
            </header>

            <section className="selection-notice">
                <div className="container">
                    <div className="notice-box">
                        <AlertTriangle className="notice-icon" size={32} />
                        <p>Please note: this opportunity is not for everyone. All applicants must clear a basic entrance assessment.</p>
                    </div>
                </div>
            </section>

            <section className="difference-section">
                <div className="container">
                    <h2>What Makes This OJT Different?</h2>
                    <p className="section-desc">This is not a classroom program. If selected:</p>

                    <div className="difference-grid">
                        <div className="diff-card">
                            <Users size={32} className="diff-icon" />
                            <h3>Core Team Member</h3>
                            <p>You will be treated as a core team member, not a trainee.</p>
                        </div>
                        <div className="diff-card">
                            <CheckSquare size={32} className="diff-icon" />
                            <h3>Real deliverables</h3>
                            <p>You will deliver real tasks while learning on the job.</p>
                        </div>
                        <div className="diff-card">
                            <Code size={32} className="diff-icon" />
                            <h3>Industry Tools</h3>
                            <p>Hands-on exposure to industry-grade tools used in real projects.</p>
                        </div>
                        <div className="diff-card">
                            <Cpu size={32} className="diff-icon" />
                            <h3>AI Technologies</h3>
                            <p>Work with AI technologies currently used in production.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="performance-terms">
                <div className="container">
                    <h2>Performance-Based Hiring</h2>
                    <div className="terms-list">
                        <div className="term-item">
                            <h3>Continuous Evaluation</h3>
                            <p>Performance will be continuously monitored.</p>
                        </div>
                        <div className="term-item">
                            <h3>No Guarantees</h3>
                            <p>There are no guaranteed job offers. Only performers move forward.</p>
                        </div>
                        <div className="term-item">
                            <h3>Meritocracy</h3>
                            <p>Top performers will be hired based purely on contribution and ownership.</p>
                        </div>
                    </div>

                    <div className="warning-text">
                        <p>If you are looking for shortcuts, certificates, or guaranteed placement—this is <strong>not</strong> the right program.</p>
                    </div>

                    <Link to="/contact" className="btn btn-primary btn-large">
                        👉 Apply (Only if you are ready to perform)
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default OJTEdTechProject;
