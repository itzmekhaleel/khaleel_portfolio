import React from 'react'
import ProfileCard from './ProfileCard'
import StackCard from './StackCard'
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

            {/* Row 2 Right: Education */}
            <EducationCard />


            {/* Row 3 & 4 Left: Experience */}
            <ExperienceCard />

            {/* Row 3 & 4 Right: Projects & Certifications */}
            <ProjectsCard />
            <CertificationsCard />

            {/* Row 5: Connect */}
            <ConnectCard delay={0.6} />
        </div>
    )
}

export default BentoGrid
