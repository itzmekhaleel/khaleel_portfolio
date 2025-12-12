import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { FiBriefcase, FiX, FiImage, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import experienceCertImg from '../assets/BFSD94009.jpg'

const ExperienceCard = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-1"
                delay={0.3}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Experience</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button
                                onClick={() => setShowModal(true)}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '6px',
                                    color: 'var(--text-secondary)',
                                    padding: '4px 8px',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s',
                                    height: '32px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--card-border)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <FiExternalLink size={12} /> View Certificate
                            </button>
                            <div style={{
                                padding: '8px',
                                background: 'var(--card-border)',
                                borderRadius: '8px',
                                color: 'var(--text-secondary)'
                            }}>
                                <FiBriefcase size={20} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <div style={{
                            minWidth: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'var(--card-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>B</span>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '4px' }}>
                                <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>Software Development Engineer Intern</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', background: 'var(--card-border)', padding: '2px 8px', borderRadius: '4px' }}>01 Aug 2025 – 30 Sep 2025</span>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '500' }}>BlueStock Fintech</p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '18px', margin: 0 }}>
                                <li>Worked on developing and testing RESTful APIs using Java and Spring Boot to support financial data services and backend workflows.</li>
                                <li>Assisted in integrating backend services with a React.js real-time dashboard, ensuring reliable data communication and smooth user experience.</li>
                                <li>Gained practical experience with MySQL, Postman, and Git for version control, API validation, debugging, and feature implementation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SpotlightCard>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.8)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 100,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '24px',
                                padding: '30px',
                                maxWidth: '800px',
                                width: '100%',
                                maxHeight: '85vh',
                                overflowY: 'auto',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                    Internship Certificate - BlueStock Fintech
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '5px', marginLeft: '10px' }}
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div style={{
                                width: '100%',
                                background: 'var(--bg-color)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid var(--card-border)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img
                                    src={experienceCertImg}
                                    alt="Internship Certificate"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ExperienceCard
