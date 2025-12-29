import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { FiAward, FiX, FiImage, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import problemSolvingImg from '../assets/problem_solving_hackerrank.jpg'
import dsaImg from '../assets/Data Structure and Algorithms using Java (1)_page-0001.jpg'

const CertificationsCard = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        { name: "Problem Solving (Intermediate) - HackerRank", image: problemSolvingImg },
        { name: "Data Structure and Algorithms Using Java - NPTEL", image: dsaImg },
        { name: "Java Full Stack with AI - DataValley", image: null },
        
    ];

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-1"
                delay={0.35}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Certifications</h3>
                        <div style={{
                            padding: '8px',
                            background: 'var(--card-border)',
                            borderRadius: '8px',
                            color: 'var(--text-secondary)'
                        }}>
                            <FiAward size={20} />
                        </div>
                    </div>

                    <div style={{ overflowY: 'auto', flex: 1, paddingRight: '5px' }}>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            {certifications.map((cert, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSelectedCert(cert)}
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.4',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        cursor: 'pointer',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        transition: 'background 0.2s',
                                        border: '1px solid transparent'
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
                                    <span style={{
                                        minWidth: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        background: 'var(--accent-color)',
                                        flexShrink: 0
                                    }}></span>
                                    <span style={{ flex: 1 }}>{cert.name}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCert(cert);
                                        }}
                                        style={{
                                            background: 'transparent',
                                            border: '1px solid var(--card-border)',
                                            borderRadius: '6px',
                                            color: 'var(--text-secondary)',
                                            padding: '2px 8px',
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                            transition: 'all 0.2s',
                                            marginLeft: '8px'
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
                                        <FiExternalLink size={10} /> View Certificate
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SpotlightCard>

            <AnimatePresence>
                {selectedCert && (
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
                        onClick={() => setSelectedCert(null)}
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
                                    {selectedCert.name}
                                </h2>
                                <button
                                    onClick={() => setSelectedCert(null)}
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
                                {selectedCert.image ? (
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.name}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                ) : (
                                    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}>
                                        <FiImage size={40} style={{ marginBottom: '10px' }} />
                                        <span>Certificate Image Placeholder</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default CertificationsCard
