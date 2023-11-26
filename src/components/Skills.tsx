import React from 'react';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import skills from '../data/skills.json';
import './Skills.css'


const Skills: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                {skills.map((tool, index) => (
                    <IonCol size-xs="12" size-sm="4" size-md="2" key={index}>
                        <IonCard className='card-component skill-card'>
                            <IonCardContent>
                                <IonImg src={tool.imageUrl} style={{ height: '50px', marginBottom: '10px' }} />
                                <div className="skill-card-title">{tool.name}</div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Skills;
