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
                        <IonCol size-xs="12" size-sm={isExpanded ? "12" : "6"} key={index}>
                            <IonCard className= {`experience-card card-component ${isExpanded ? 'expanded' : ''}`} onClick={() => toggleExpand(experience.company)}>
                                <div className='card-header'>
                                    <IonImg src={experience.logoUrl} className='company-logo' />
                                    <IonCardHeader>
                                        <IonCardTitle>{experience.role} - {experience.company}</IonCardTitle>
                                        <IonCardSubtitle className='duration'>{experience.duration}</IonCardSubtitle>
                                        <p className='company-type'>{typedExperience.company_type}</p>
                                    </IonCardHeader>
                                    <IonIcon icon={isExpanded ? chevronUpOutline : chevronDownOutline} className='expand-icon' />
                                </div>
                                {isExpanded && (
                                    <IonCardContent>
                                        <div className='tags-container'>
                                            {typedExperience.tags.map(tag => <IonChip key={tag}>{tag}</IonChip>)}
                                        </div>
                                        <p className='intro'>{typedExperience.intro}</p>
                                        <IonList>
                                            {typedExperience.bullets.map((bullet, index) => (
                                                <IonItem key={index}>{bullet}</IonItem>
                                            ))}
                                        </IonList>
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
