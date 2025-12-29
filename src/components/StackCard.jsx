import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { motion, AnimatePresence } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaGitAlt, FaCode, FaLaptopCode, FaServer, FaTerminal, FaDatabase, FaExchangeAlt } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiPostman, SiApachekafka, SiSpring, SiIntellijidea, SiEclipseide } from 'react-icons/si'
import { FiX, FiGrid, FiLayers, FiCpu, FiDatabase, FiSmartphone } from 'react-icons/fi'

const StackCard = () => {
    const [showFullStack, setShowFullStack] = useState(false);

    // Marquee shows a mix of top skills
    const marqueeIcons = [
        { Icon: FaJava, name: "Java" },
        { Icon: SiSpringboot, name: "Spring Boot" },
        { Icon: SiApachekafka, name: "Kafka" },
        { Icon: FaReact, name: "ReactJS" },
        { Icon: SiMysql, name: "MySQL" },
        { Icon: FaPython, name: "Python" },
        { Icon: FaGitAlt, name: "Git" },
        { Icon: SiMongodb, name: "MongoDB" },
    ];

    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { Icon: FaJava, name: "Java" },
                { Icon: FaPython, name: "Python" },
                { Icon: FaCode, name: "C" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { Icon: FaServer, name: "Core Java" },
                { Icon: SiSpringboot, name: "Spring Boot" },
                { Icon: SiSpring, name: "Spring" },
                { Icon: FaCode, name: "REST APIs" },
                { Icon: FiLayers, name: "Spring Data JPA" },
            ]
        },
        {
            title: "Messaging",
            skills: [
                { Icon: SiApachekafka, name: "Apache Kafka" },
                { Icon: FaExchangeAlt, name: "Message Queuing" },
            ]
        },
        {
            title: "Frontend",
            skills: [
                { Icon: SiHtml5, name: "HTML" },
                { Icon: SiCss3, name: "CSS" },
                { Icon: SiJavascript, name: "JavaScript" },
                { Icon: FaReact, name: "ReactJS" },
            ]
        },
        {
            title: "Databases",
            skills: [
                { Icon: SiMysql, name: "MySQL" },
                { Icon: SiMongodb, name: "MongoDB" },
                { Icon: FiDatabase, name: "H2 (SQL)" },
            ]
        },
        {
            title: "Dev Tools",
            skills: [
                { Icon: FaGitAlt, name: "Git" },
                { Icon: FaLaptopCode, name: "Maven" },
                { Icon: SiPostman, name: "Postman" },
                { Icon: FaLaptopCode, name: "VS Code" },
                { Icon: SiEclipseide, name: "Eclipse" },
                { Icon: SiIntellijidea, name: "IntelliJ" },
            ]
        },
        {
            title: "Concepts",
            skills: [
                { Icon: FiLayers, name: "OOPs" },
                { Icon: FiCpu, name: "DSA" },
                { Icon: FiDatabase, name: "DBMS" },
                { Icon: FiLayers, name: "Microservices" },
                { Icon: FaExchangeAlt, name: "Event-Driven" },
            ]
        }
    ];

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-1"
                delay={0.1}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>Tech Stack</h3>
                    <button
                        onClick={() => setShowFullStack(true)}
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
                        <FiGrid size={12} /> View All
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '20px',
                    marginTop: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}>
                    <motion.div
                        style={{ display: 'flex', gap: '40px' }}
                        animate={{ x: [0, -600] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    >
                        {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((item, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minWidth: '60px' }}>
                                <div style={{
                                    padding: '10px',
                                    background: 'var(--card-border)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--card-border)'
                                }}>
                                    <item.Icon size={28} color="var(--text-secondary)" />
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{item.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </SpotlightCard>

            <AnimatePresence>
                {showFullStack && (
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
                        onClick={() => setShowFullStack(false)}
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Technical Skills</h2>
                                <button
                                    onClick={() => setShowFullStack(false)}
                                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '5px' }}
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                {skillCategories.map((category, catIndex) => (
                                    <div key={catIndex}>
                                        <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '15px', borderBottom: '1px solid var(--card-border)', paddingBottom: '5px' }}>
                                            {category.title}
                                        </h4>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                                            gap: '15px'
                                        }}>
                                            {category.skills.map((item, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '15px',
                                                    background: 'var(--bg-color)',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--card-border)',
                                                    transition: 'background 0.2s'
                                                }}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--card-border)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-color)'}
                                                >
                                                    <item.Icon size={28} color="var(--text-primary)" />
                                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default StackCard
