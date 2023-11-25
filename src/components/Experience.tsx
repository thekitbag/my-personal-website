import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import experiences from '../data/experiences.json';
import './Experience.css'

const Experience: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggleExpand = (company: string) => {
        if (expanded === company) {
            setExpanded(null);
        } else {
            setExpanded(company);
        }
    };

    return (
        <IonGrid>
            <IonRow>
                {experiences.map((experience, index) => (
                    <IonCol size="6" key={index}>
                        <IonCard onClick={() => toggleExpand(experience.company)}>
                            <div className='ion-padding' style={{ display: 'flex', alignItems: 'center' }}>
                                <IonImg src={experience.logoUrl} style={{ width: '80px', height: '100%', objectFit: 'contain' }} />
                                <IonCardHeader>
                                    <IonCardTitle>{experience.company} — {experience.role}</IonCardTitle>
                                    <IonCardSubtitle>{experience.duration}</IonCardSubtitle>
                                </IonCardHeader>
                            </div>
                            {expanded === experience.company && (
                                <IonCardContent>
                                    {experience.description}
                                </IonCardContent>
                            )}
                            <IonIcon icon={expanded === experience.company ? chevronUpOutline : chevronDownOutline} style={{ position: 'absolute', top: '10px', right: '10px' }} />
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Experience;
