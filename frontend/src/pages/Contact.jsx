import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: 'USA'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will evaluate your profile and get back to you.');
        // In a real app, send to backend
    };

    return (
        <div className="contact-page">
            <header className="page-header contact-header">
                <div className="container">
                    <h1 className="page-title">Let’s Evaluate Your Profile</h1>
                    <p className="page-subtitle">Not sure which path fits you? Get a free initial profile evaluation.</p>
                </div>
            </header>

            <section className="contact-content">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <h2>Who Should Contact Us</h2>
                        <ul>
                            <li>Anyone planning to move to the USA</li>
                            <li>Freshers struggling to get hired</li>
                            <li>Professionals stuck due to visa or experience gaps</li>
                            <li>Career switchers looking for structured growth</li>
                        </ul>
                        <div className="email-box">
                            <p>Email: <strong>info@nichetechcareer.com</strong></p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Get Free Profile Evaluation</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Career Goal</label>
                                <select name="goal" onChange={handleChange}>
                                    <option value="USA">Move to USA</option>
                                    <option value="OJT">OJT Program (India)</option>
                                    <option value="BOTH">Both / Unsure</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit for Evaluation</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
