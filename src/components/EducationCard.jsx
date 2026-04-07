import React from 'react'
import SpotlightCard from './SpotlightCard'
import { FiBook, FiAward } from 'react-icons/fi'

const EducationCard = () => {
    return (
        <SpotlightCard
            colSpan="col-span-2"
            rowSpan="row-span-1"
            delay={0.3}
        >
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Education</h3>
                    <div style={{
                        padding: '8px',
                        background: 'var(--card-border)',
                        borderRadius: '8px',
                        color: 'var(--text-secondary)'
                    }}>
                        <FiBook size={20} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>B.Tech in CSE</h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>Narasaraopeta Engineering College</p>
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-secondary)',
                                background: 'var(--card-border)',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                2022 - Present
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: '#22c55e',
                            background: 'rgba(34, 197, 94, 0.1)',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <FiAward size={14} />
                            CGPA: 7.5
                        </span>
                    </div>

                    <div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>Key Coursework</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {["Data Structure and Algorithms", "Data Base Management System", "Object Oriented Programming", "Operating System"].map((course, index) => (
                                <span key={index} style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-primary)',
                                    background: 'var(--card-border)',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    border: '1px solid transparent',
                                    transition: 'all 0.2s'
                                }}>
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    )
}

export default EducationCard
