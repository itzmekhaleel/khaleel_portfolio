import React from 'react'
import SpotlightCard from './SpotlightCard'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import profilePic from '../assets/1000060953.jpg'

const ProfileCard = () => {
    return (
        <SpotlightCard
            colSpan="col-span-2"
            rowSpan="row-span-2"
            className="profile-card"
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        marginBottom: '20px',
                        overflow: 'hidden',
                        border: '2px solid var(--card-border)'
                    }}>
                        <img
                            src={profilePic}
                            alt="Shaik Mohammad Khaleel"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <h1 style={{ fontSize: '2rem', lineHeight: '1.1', marginBottom: '8px', letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>Shaik Mohammad Khaleel</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '12px' }}>Computer Science Engineering Student</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <FiMapPin /> Narasaraopet, Andhra Pradesh, India
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <FiPhone /> +91 8341160898
                        </div>
                    </div>
                </div>
                <div style={{
                    padding: '6px 12px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '20px',
                    color: '#4ade80',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                        <motion.span
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: '#4ade80' }}
                        ></motion.span>
                        <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }}></span>
                    </span>
                    Open to Work
                </div>
            </div>

            <div style={{ marginTop: 'auto' }}>
                <p style={{ marginBottom: '25px', maxWidth: '100%', fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    I am a motivated Computer Science and Engineering student with strong foundations in Data Structures and
                    Algorithms, OOPs, and backend development using Java, Spring Boot, and MySQL. Hands-on experience building RESTful services and event-driven systems. Seeking an entry-level software engineering role to contribute
                    to scalable, high-impact applications while continuously learning and growing.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <a href="https://drive.google.com/file/d/17OqQebAWwY2C_2xORqS03kWik7JP-lgn/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{
                        padding: '10px 20px',
                        background: 'var(--accent-color)',
                        color: 'var(--bg-color)',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Download Resume
                    </a>
                    <a href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                            padding: '10px 20px',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--card-border)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </SpotlightCard>
    )
}

export default ProfileCard
