import React from 'react';
import { Mail, Send, Linkedin, HelpCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero section-padding text-center">
                <div className="container">
                    <h1 className="hero-title animate-fade-in">Let’s Evaluate <span className="text-highlight">Your Profile</span></h1>
                    <p className="hero-subtitle animate-fade-in">
                        Not sure which path fits you? We offer a free initial profile evaluation to help you decide.
                    </p>
                </div>
            </section>

            <section className="section-padding pt-0">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info Column */}
                        <div className="contact-info">
                            <div className="glass-panel p-4 mb-4">
                                <h3>Who Should Contact Us</h3>
                                <ul className="check-list mt-3">
                                    <li>Anyone planning to move to the USA</li>
                                    <li>Freshers struggling to get hired</li>
                                    <li>Professionals stuck due to visa/experience gaps</li>
                                    <li>Career switchers looking for structured growth</li>
                                </ul>
                            </div>

                            <div className="glass-panel p-4">
                                <h3>What to Share</h3>
                                <ul className="dot-list mt-3">
                                    <li>Resume or LinkedIn profile</li>
                                    <li>Education details</li>
                                    <li>Work experience (if any)</li>
                                    <li>Career goal (India / USA / both)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="contact-form-wrapper glass-panel p-5">
                            <h2 className="mb-4">Get Free Profile Evaluation</h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Current Status</label>
                                    <select className="form-input">
                                        <option>Student / Fresher</option>
                                        <option>Working Professional</option>
                                        <option>Career Switcher</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message / Query</label>
                                    <textarea rows="4" placeholder="Tell us about your goals..." className="form-input"></textarea>
                                </div>
                                <button type="submit" className="btn btn-gradient w-100">
                                    Submit Request <Send size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>

                            <div className="email-direct mt-4 text-center">
                                <p className="text-muted mb-2">Or email us directly at:</p>
                                <a href="mailto:info@nichetechcareer.com" className="email-link">
                                    <Mail size={18} /> info@nichetechcareer.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
