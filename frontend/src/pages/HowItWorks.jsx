import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="how-page">
            <header className="page-header how-header">
                <div className="container">
                    <h1 className="page-title">How Niche Tech Career Works</h1>
                    <p className="page-subtitle">Clear documentation, timelines, costs, and expectations.</p>
                </div>
            </header>

            <section className="steps-section">
                <div className="container">
                    {[
                        { step: 1, title: 'Profile Evaluation', desc: 'We assess your education, experience, skills, and goals.' },
                        { step: 2, title: 'Right Path Recommendation', desc: 'USA pathway, OJT program, or a phased approach.' },
                        { step: 3, title: 'Structured Execution', desc: 'Clear documentation, timelines, costs, and expectations.' },
                        { step: 4, title: 'Long-Term Career Support', desc: 'We focus on where you will be in 3–5 years.' }
                    ].map((item) => (
                        <div key={item.step} className="process-row">
                            <div className="process-number">Step {item.step}</div>
                            <div className="process-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="philosophy-section">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <div className="philosophy-grid">
                        <div className="phil-item">No false guarantees</div>
                        <div className="phil-item">Transparent communication</div>
                        <div className="phil-item">Multiple career routes</div>
                        <div className="phil-item">Performance over promises</div>
                        <div className="phil-item">Long-term thinking</div>
                    </div>
                    <div className="quote-box">
                        "We believe careers are built, not sold."
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
