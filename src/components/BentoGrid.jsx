import React from 'react'
import ProfileCard from './ProfileCard'
import StackCard from './StackCard'
import ResearchCard from './ResearchCard'
import ExperienceCard from './ExperienceCard'
import ProjectsCard from './ProjectsCard'
import ConnectCard from './ConnectCard'
import EducationCard from './EducationCard'
import CertificationsCard from './CertificationsCard'

const BentoGrid = () => {
    return (
        <div className="bento-grid">
            {/* Row 1 & 2 Left: Profile */}
            <ProfileCard />

            {/* Row 1 Right: Stack */}
            <StackCard />

            {/* Row 2 Right: Research */}
            <ResearchCard />

            {/* Row 3: Experience & Projects */}
            <ExperienceCard />
            <ProjectsCard />

            {/* Row 4: Education & Certifications */}
            <EducationCard />
            <CertificationsCard />

            {/* Row 5: Connect */}
            <ConnectCard delay={0.6} />
        </div>
    )
}

export default BentoGrid
