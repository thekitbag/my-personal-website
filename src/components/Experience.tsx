import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import experiences from '../data/experiences.json';
import './Experience.css';

const Experience: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (company: string) => {
        setExpanded(expanded === company ? null : company);
    };

    return (
        <IonGrid>
            <IonRow>
                {experiences.map((experience, index) => {
                    const isExpanded = expanded === experience.company;
                    return (
                        <IonCol size-xs="12" size-sm={isExpanded ? "12" : "4"} key={index}>
                            <IonCard className={`experience-card ${isExpanded ? 'expanded' : ''}`} onClick={() => toggleExpand(experience.company)}>
                                <div className='card-header'>
                                    <IonImg src={experience.logoUrl} className='company-logo' />
                                    <IonCardHeader>
                                        <IonCardTitle>{experience.company} — {experience.role}</IonCardTitle>
                                        <IonCardSubtitle>{experience.duration}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonIcon icon={isExpanded ? chevronUpOutline : chevronDownOutline} className='expand-icon' />
                                </div>
                                {isExpanded && (
                                    <IonCardContent>
                                        {experience.description}
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
