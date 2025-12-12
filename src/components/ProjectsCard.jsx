import React, { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { FiExternalLink, FiFolder, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsCard = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Mechanic Web Application",
            subtitle: "Java Full Stack",
            description: "Java Full Stack app for product browsing & order management.",
            tags: ["Java", "Spring Boot", "ReactJS", "MySQL"],
            date: "March 2025 – June 2025",
            details: [
                "Developed a full-stack web application using Java, Spring Boot, React.js, and MySQL to support product browsing, cart functionality, and order management.",
                "Implemented secure JWT-based authentication and role-based access control to manage customer and admin access.",
                "Integrated REST APIs with a responsive React.js frontend, improving usability and ensuring smooth end-to-end workflows."
            ],
            link: "https://github.com/itzmekhaleel/mechanic_website"
        },
        {
            title: "Personal Portfolio",
            subtitle: "React.js",
            description: "Responsive portfolio showcasing projects & skills.",
            tags: ["ReactJS", "HTML", "CSS"],
            date: "September 2024",
            details: [
                "Built a responsive personal portfolio using React.js, HTML, and CSS to showcase projects and skills.",
                "Implemented reusable components and state management in React to improve code structure and maintainability.",
                "Ensured cross-browser compatibility and mobile responsiveness for a consistent user experience across devices."
            ],
            link: "#"
        }
    ];

    return (
        <>
            <SpotlightCard
                colSpan="col-span-2"
                rowSpan="row-span-1"
                delay={0.4}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Projects</h3>
                        <div style={{
                            padding: '8px',
                            background: 'var(--card-border)',
                            borderRadius: '8px',
                            color: 'var(--text-secondary)'
                        }}>
                            <FiFolder size={20} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                        {projects.map((project, index) => (
                            <div key={index} style={{
                                padding: '16px',
                                background: 'var(--card-border)',
                                borderRadius: '12px',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                    <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)' }}>{project.title}</h4>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                            onClick={() => setSelectedProject(project)}
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
                                            <FiExternalLink size={12} /> View More
                                        </button>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.4' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-primary)',
                                            background: 'var(--bg-color)',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            border: '1px solid var(--card-border)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SpotlightCard>

            <AnimatePresence>
                {selectedProject && (
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
                        onClick={() => setSelectedProject(null)}
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
                                maxWidth: '700px',
                                width: '100%',
                                maxHeight: '85vh',
                                overflowY: 'auto',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                <div>
                                    <h2 style={{ fontSize: '1.4rem', margin: 0, color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                        {selectedProject.title}
                                    </h2>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                                        {selectedProject.subtitle}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '5px', marginLeft: '10px' }}
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div style={{
                                display: 'inline-block',
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                background: 'var(--card-border)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                marginBottom: '20px'
                            }}>
                                {selectedProject.date}
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Key Contributions</h4>
                                <ul style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                                    {selectedProject.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '10px' }}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                {selectedProject.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--text-primary)',
                                        background: 'var(--bg-color)',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        border: '1px solid var(--card-border)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {selectedProject.link && selectedProject.link !== '#' && (
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 20px',
                                        background: 'var(--accent-color)',
                                        color: 'var(--bg-color)',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        transition: 'transform 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <FiExternalLink size={16} /> View on GitHub
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ProjectsCard
