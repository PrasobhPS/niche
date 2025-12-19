import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Play, Plane, GraduationCap, Briefcase, Users, Phone, Mail } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Building <span className="italic-text">Careers,</span><br />
                            Breaking <span className="italic-text">Barriers</span>
                        </h1>
                        <p className="hero-description">
                            Connecting underrepresented professionals with global opportunities.
                            Insights, and networks needed to build thriving tech careers.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/success-stories" className="btn btn-dark">
                                VIEW SUCCESS STORIES <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Background Overlay Gradient is handled in CSS */}
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container stats-container">
                    <div className="stat-item">
                        <h3 className="stat-number">130+</h3>
                        <p className="stat-label">TOP EXPERTS</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">1500+</h3>
                        <p className="stat-label">HAPPY CLIENTS</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">2150+</h3>
                        <p className="stat-label">SUCCESSFUL PROJECTS</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">16+</h3>
                        <p className="stat-label">COUNTRIES</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            World Class Services For<br />
                            Crafting Your <span className="underline-text">Global Success</span>
                        </h2>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon"><Plane size={32} color="#6D28D9" /></div>
                            <h3>USA Pathways</h3>
                            <p>Comprehensive visa strategies for H1B, L1, and O1 applicants. Designed for ambitious tech talent.</p>
                            <Link to="/usa-pathways" className="learn-more">ViEW MORE <ArrowRight size={14} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><GraduationCap size={32} color="#6D28D9" /></div>
                            <h3>OJT Program</h3>
                            <p>Intensive on-the-job training modules that bridge the gap between academic theory and practice.</p>
                            <Link to="/ojt-program" className="learn-more">ViEW MORE <ArrowRight size={14} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Briefcase size={32} color="#EC4899" /></div>
                            <h3>Job Placement</h3>
                            <p>Direct connections to our network of 500+ tech partners actively hiring skilled professionals.</p>
                            <Link to="/contact" className="learn-more">ViEW MORE <ArrowRight size={14} /></Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon"><Users size={32} color="#FFD700" /></div>
                            <h3>Community Access</h3>
                            <p>Join an exclusive network of peers and mentors for guidance, networking, and career support.</p>
                            <Link to="/community" className="learn-more">ViEW MORE <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners-section">
                <div className="container text-center">
                    <p className="partners-subtitle">Happy Clients</p>
                    <h2 className="partners-title">Our Network of Trusted Brands</h2>

                    <div className="partners-grid">
                        <div className="partner-logo">InterStellar</div>
                        <div className="partner-logo">TechCannon</div>
                        <div className="partner-logo">DATAFLOW</div>
                        <div className="partner-logo">NextGen</div>
                        <div className="partner-logo">CloudSys</div>
                        <div className="partner-logo">BlockChain</div>
                        <div className="partner-logo">CODEC</div>
                        <div className="partner-logo">Nexus</div>
                        <div className="partner-logo">Velvet</div>
                        <div className="partner-logo">LaunchPad</div>
                    </div>

                    <div className="partners-action">
                        <button className="btn-outline-dark">SEE ALL CLIENTS</button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <p className="section-eyebrow">Voices of Success:</p>
                        <h2 className="section-title">Tales from Our Esteemed Clientele</h2>
                        <p className="section-subtext">Excellent career guidance is our foundation.</p>
                    </div>

                    <div className="testimonials-grid">
                        {/* 1. Rating Card */}
                        <div className="testi-card rating-card">
                            <h3 className="rating-score">4.9</h3>
                            <p className="rating-label">Avg. Review</p>
                            <div className="stars">
                                <Star size={16} fill="#FFD700" stroke="none" />
                                <Star size={16} fill="#FFD700" stroke="none" />
                                <Star size={16} fill="#FFD700" stroke="none" />
                                <Star size={16} fill="#FFD700" stroke="none" />
                                <Star size={16} fill="#FFD700" stroke="none" />
                            </div>
                        </div>

                        {/* 2. Portrait Card (Vanessa) */}
                        <div className="testi-card portrait-card portrait-1">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Vanessa" className="testi-img" />
                            <div className="testi-overlay">
                                <div className="testi-info">
                                    <h4>Vanessa Moore</h4>
                                    <p>PRODUCT MANAGER @ VENUS</p>
                                </div>
                                <button className="play-btn"><Play size={16} fill="#FFF" /></button>
                            </div>
                        </div>

                        {/* 3. Text Card */}
                        <div className="testi-card text-card">
                            <div className="stars">
                                <Star size={14} fill="#FFD700" stroke="none" />
                                <Star size={14} fill="#FFD700" stroke="none" />
                                <Star size={14} fill="#FFD700" stroke="none" />
                                <Star size={14} fill="#FFD700" stroke="none" />
                                <Star size={14} fill="#FFD700" stroke="none" />
                            </div>
                            <p className="quote">"Niche Tech is always available to help. Incredibly focused, efficient, and trustworthy when dealing with visa and job seeking needs."</p>
                            <div className="author">
                                <span className="author-name">Kiara Tims</span>
                            </div>
                        </div>

                        {/* 4. Quote Card */}
                        <div className="testi-card quote-only-card">
                            <div className="quote-icon">“</div>
                            <p className="quote-text">"The OJT program was a game changer. I went from theoretical knowledge to practical application in weeks."</p>
                            <Link to="/stories" className="text-link">Watch Stories</Link>
                        </div>

                        {/* 5. Portrait Card (Lana) */}
                        <div className="testi-card portrait-card portrait-2">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lana" className="testi-img" />
                            <div className="testi-overlay">
                                <div className="testi-info">
                                    <h4>Lana Takahashi</h4>
                                    <div className="stars-mini">★★★★★</div>
                                </div>
                                <button className="play-btn"><Play size={16} fill="#FFF" /></button>
                            </div>
                        </div>

                        {/* 6. Happy Clients Card */}
                        <div className="testi-card clients-card">
                            <h3>Happy Clients</h3>
                            <p>ETHICS, INNOVATION, AND DEDICATION</p>
                            <ArrowRight size={24} color="#FFF" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Form Section */}
            <section className="cta-form-section">
                <div className="container form-container">
                    <div className="cta-left">
                        <h2 className="cta-heading"><span style={{ fontSize: '1.5em' }}>🚀</span> START NOW!</h2>
                        <h3 className="cta-subheading">Let's Get Your Career Moving</h3>
                        <div className="contact-info">
                            <p><Mail size={16} /> support@nichetech.com</p>
                            <p><Phone size={16} /> +1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="cta-right">
                        <form className="quick-form">
                            <div className="form-row">
                                <input type="text" placeholder="Name *" className="form-input" />
                                <input type="text" placeholder="Phone +1 *" className="form-input" />
                            </div>
                            <input type="email" placeholder="Email *" className="form-input" />
                            <button type="button" className="submit-btn">SUBMIT REQUEST</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
