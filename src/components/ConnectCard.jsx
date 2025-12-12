import React from 'react'
import SpotlightCard from './SpotlightCard'
import { FiLinkedin, FiGithub, FiMail, FiCode } from 'react-icons/fi'

const ConnectCard = ({ delay }) => {
    const socialLinks = [
        { icon: FiLinkedin, name: "LinkedIn", username: "shaik-mohammad-khaleel", link: "https://www.linkedin.com/in/shaik-mohammad-khaleel-173534289/", color: "#0077b5" },
        { icon: FiGithub, name: "GitHub", username: "itzmekhaleel", link: "https://github.com/itzmekhaleel", color: "var(--text-primary)" },
        { icon: FiCode, name: "LeetCode", username: "KhaleelShaik", link: "https://leetcode.com/u/KhaleelShaik/", color: "#ffa116" },
        { icon: FiMail, name: "Email", username: "khaleelshaik7040", link: "mailto:khaleelshaik7040@gmail.com", color: "#ea4335" },
    ];

    return (
        <SpotlightCard
            colSpan="col-span-4"
            rowSpan="row-span-1"
            delay={delay}
            id="contact"
        >
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '20px' }}>Let's Connect</h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                minWidth: '140px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px',
                                borderRadius: '12px',
                                background: 'var(--card-border)',
                                transition: 'transform 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                padding: '8px',
                                background: 'var(--bg-color)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <item.icon size={20} color={item.color} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.name}</p>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.username}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SpotlightCard>
    )
}

export default ConnectCard
