import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { FiBriefcase, FiX, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import experienceCertImg from '../assets/BFSD94009.jpg'
import jpMorganCertImg from '../assets/JP Morgan certificate.jpg'
import blueStockLogo from '../assets/bluestock.jpeg'
import jpMorganLogo from '../assets/jpmorganchase_logo.jpeg'

const ExperienceCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', img: null });

    const openModal = (title, img) => {
        setModalContent({ title, img });
        setShowModal(true);
    };

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-2"
                delay={0.3}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Experience</h3>
                        <div style={{
                            padding: '8px',
                            background: 'var(--card-border)',
                            borderRadius: '8px',
                            color: 'var(--text-secondary)'
                        }}>
                            <FiBriefcase size={20} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
                        {/* JPMC Experience */}
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{
                                minWidth: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--card-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                overflow: 'hidden'
                            }}>
                                <img src={jpMorganLogo} alt="JPMorganChase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '4px' }}>
                                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>Software Engineering Job Simulation</h4>
                                    <button
                                        onClick={() => openModal('Software Engineering Job Simulation - JPMorganChase', jpMorganCertImg)}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid var(--card-border)',
                                            borderRadius: '6px',
                                            color: 'var(--text-secondary)',
                                            padding: '4px 8px',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            transition: 'all 0.2s'
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
                                        <FiExternalLink size={10} />View Certificate
                                    </button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, fontWeight: '500' }}>JPMorganChase (Via Forage) - Virtual Internship</p>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', background: 'var(--card-border)', padding: '2px 8px', borderRadius: '4px' }}>Dec 2025</span>
                                </div>
                                <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', paddingLeft: '18px', margin: 0 }}>
                                    <li>Built a backend Spring Boot microservice simulating real-world financial transaction processing.</li>
                                    <li>Integrated Apache Kafka for message queuing and consumption of high-volume transaction events.</li>
                                    <li>Implemented transaction validation and persistence using Java, Spring Data JPA, and an H2 SQL database.</li>
                                    <li>Developed REST APIs using the Spring Framework to query user balances and return JSON responses.</li>
                                    <li>Validated system behavior using Maven build tools, test suites, and embedded Kafka testing.</li>
                                </ul>
                            </div>
                        </div>

                        {/* BlueStock Experience */}
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{
                                minWidth: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--card-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                overflow: 'hidden'
                            }}>
                                <img src={blueStockLogo} alt="BlueStock Fintech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '4px' }}>
                                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)' }}>Software Development Engineer Intern</h4>
                                    <button
                                        onClick={() => openModal('Internship Certificate - BlueStock Fintech', experienceCertImg)}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid var(--card-border)',
                                            borderRadius: '6px',
                                            color: 'var(--text-secondary)',
                                            padding: '4px 8px',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            transition: 'all 0.2s'
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
                                        <FiExternalLink size={10} />View Certificate
                                    </button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, fontWeight: '500' }}>BlueStock Fintech</p>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', background: 'var(--card-border)', padding: '2px 8px', borderRadius: '4px' }}>Aug 2025 – Sep 2025</span>
                                </div>
                                <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', paddingLeft: '18px', margin: 0 }}>
                                    <li>Worked on developing and testing RESTful APIs using Java and Spring Boot.</li>
                                    <li>Assisted in integrating backend services with a React.js real-time dashboard.</li>
                                    <li>Gained practical experience with MySQL, Postman, and Git for version control.</li>
                                </ul>
                            </div>
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
                                    {modalContent.title}
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
                                    src={modalContent.img}
                                    alt="Certificate"
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
