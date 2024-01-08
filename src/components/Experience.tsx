import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonChip, IonList, IonItem, IonIcon, IonGrid, IonRow, IonCol, IonCardSubtitle } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import experiences from '../data/experiences.json';

import './Experience.css';

interface ExperienceData {
    role: string;
    company: string;
    company_type: string;
    tags: string[];
    intro: string;
    bullets: string[];
    logoUrl: string;
    duration: string;
  }
  
  

const Experience: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (company: string) => {
        setExpanded(expanded === company ? null : company);
    };

    return (
        <IonGrid>
            <IonRow>
                {experiences.map((experience, index) => {
                    const typedExperience = experience as unknown as ExperienceData;
                    const isExpanded = expanded === typedExperience.company;
                    return (
                        <IonCol size="12" key={index}>
                            <IonCard className={`experience-card card-component ${isExpanded ? 'expanded' : ''}`} onClick={() => toggleExpand(experience.company)}>
                                <IonImg src={experience.logoUrl} className='company-logo' />
                                <IonCardHeader>
                                    <IonCardTitle>{experience.role} - {experience.company}</IonCardTitle>
                                    <IonCardSubtitle className='duration'>{experience.duration}</IonCardSubtitle>
                                    <p className='company-type'>{typedExperience.company_type}</p>
                                </IonCardHeader>       
                                <IonCardContent className={`${isExpanded ? 'hidden' : ''}`}>
                                    <div className='tags-container'>
                                        {typedExperience.tags.map(tag => <IonChip key={tag}>{tag}</IonChip>)}
                                    </div>
                                    <p className='intro'>{typedExperience.intro}</p>
                                    <IonItem className="experience-bullet">{typedExperience.bullets[0].slice(0,160) + "..."}</IonItem>
                                    <IonIcon icon={chevronDownOutline} size="large" />
                                </IonCardContent>
                                {isExpanded && (
                                    <IonCardContent>
                                        <div className='tags-container'>
                                            {typedExperience.tags.map(tag => <IonChip key={tag}>{tag}</IonChip>)}
                                        </div>
                                        <p className='intro'>{typedExperience.intro}</p>
                                        <IonList lines='none'>
                                            {typedExperience.bullets.map((bullet, index) => (
                                                <IonItem className="experience-bullet" key={index}>{bullet}</IonItem>
                                            ))}
                                        </IonList>
                                        <IonIcon icon={chevronUpOutline} size="large" />
                                    </IonCardContent>
                                )}
                            </IonCard>
                        </IonCol>
                    );
                })}
            </IonRow>
        </IonGrid>
    );
};

export default Experience;
