import React, { useState, useEffect } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captcha, setCaptcha] = useState({ q: '', a: 0 });
    const [userCaptcha, setUserCaptcha] = useState('');
    const [status, setStatus] = useState('');

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({
            q: `What is ${num1} + ${num2}?`,
            a: num1 + num2
        });
        setUserCaptcha('');
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(userCaptcha) !== captcha.a) {
            setStatus('Incorrect captcha. Please try again.');
            generateCaptcha();
            return;
        }
        // In a real app, you'd send this to a backend
        console.log('Form submitted:', formData);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        generateCaptcha();
    };

    return (
        <section className="section" id="contact" style={{ paddingBottom: '5rem' }}>
            <h2 className="section-header">CONTACT US</h2>
            <div className="section-content" style={{ maxWidth: '600px', margin: '2rem auto' }}>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="captcha-container">
                        <label>{captcha.q}</label>
                        <input
                            type="number"
                            placeholder="Answer"
                            value={userCaptcha}
                            onChange={(e) => setUserCaptcha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{
                        marginTop: '1rem',
                        padding: '0.8rem 2rem',
                        background: '#d20000',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: '"Doto", sans-serif',
                        fontSize: '1rem',
                        transition: 'background 0.3s ease'
                    }}>
                        Send Message
                    </button>
                    {status && <p style={{ marginTop: '1rem', color: status.includes('success') ? '#4caf50' : '#f44336' }}>{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
