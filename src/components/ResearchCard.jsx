import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { FiTrendingUp, FiX, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import certificateImg from '../assets/Shaik Mohammad Khaleel.jpg'

const ResearchCard = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-1"
                delay={0.4}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Research Publication</h3>
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
                                    height: '36px'
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
                                <FiExternalLink size={12} /> View More
                            </button>
                            <div style={{
                                padding: '8px',
                                background: 'var(--card-border)',
                                borderRadius: '8px',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <FiTrendingUp size={20} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                        <div>
                            <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                Neuro-Diagnosis: A YOLO-Inspired Pipeline...
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '12px' }}>
                                IEEE International Conference on Innovate for Humanitarian (ICIH), 2025
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: 'auto' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>91.4%</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Precision</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>88.6%</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recall</span>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>93.4%</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>mAP(mean average precision)</span>
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
                                <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                    Neuro-Diagnosis: A YOLO-Inspired Pipeline for Automated Tumor Boundary Extraction and MRI-Based Classification and Segmentation
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '5px', marginLeft: '10px' }}
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '20px', fontStyle: 'italic' }}>
                                IEEE International Conference on Innovate for Humanitarian: Tech Solutions for Global Challenges (ICIH), 2025 — Presented
                            </p>

                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '10px' }}>Key Contributions</h4>
                                <ul style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '20px' }}>
                                    <li>Designed and implemented an automated tumor detection and segmentation pipeline using Python and Flask, enabling real-time MRI upload, inference, and visualization.</li>
                                    <li>Engineered a complete end-to-end system integrating YOLOv8, OpenCV, and SQLite, supporting secure user authentication and interactive diagnostic results.</li>
                                    <li>Achieved strong benchmarking performance (mAP 93.4%, Precision 91.4%, Recall 88.6%), validating system reliability and outperforming prior YOLO architectures.</li>
                                </ul>
                            </div>


                            <div>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '15px' }}>Certificate of Presentation</h4>
                                <div style={{
                                    width: '100%',
                                    background: 'var(--bg-color)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--card-border)'
                                }}>
                                    <img
                                        src={certificateImg}
                                        alt="Certificate of Presentation"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ResearchCard
