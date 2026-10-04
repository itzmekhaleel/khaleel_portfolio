import React from 'react'
import SpotlightCard from './SpotlightCard'
import { FiLinkedin, FiGithub, FiMail, FiCode } from 'react-icons/fi'

const ConnectCard = ({ delay }) => {
    const socialLinks = [
        { icon: FiLinkedin, name: "LinkedIn", username: "Shaik Mohammad Khaleel", link: "https://www.linkedin.com/in/shaik-mohammad-khaleel-173534289/", color: "#0077b5" },
        { icon: FiGithub, name: "GitHub", username: "itzmekhaleel", link: "https://github.com/itzmekhaleel", color: "var(--text-primary)" },
        { icon: FiCode, name: "LeetCode", username: "Shaik Khaleel", link: "https://leetcode.com/u/KhaleelShaik/", color: "#ffa116" },
        { icon: FiCode, name: "GeeksforGeeks", username: "Shaik Khaleel", link: "https://www.geeksforgeeks.org/profile/khaleelshaik?tab=activity", color: "#ffa116" },
        { icon: FiMail, name: "Email", username: "khaleelshaik7040@gmail.com", link: "mailto:khaleelshaik7040@gmail.com", color: "#ea4335" },
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

                <div className="connect-links">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`connect-link connect-link--${item.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div className="connect-link__icon">
                                <item.icon size={20} color={item.color} />
                            </div>
                            <div className="connect-link__text">
                                <p className="connect-link__name">{item.name}</p>
                                <span className="connect-link__username">{item.username}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </SpotlightCard>
    )
}

export default ConnectCard
