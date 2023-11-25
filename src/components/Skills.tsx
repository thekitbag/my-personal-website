import React from 'react';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import skills from '../data/skills.json';


const Skills: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                {skills.map((tool, index) => (
                    <IonCol size="1.5" key={index}>
                        <IonCard>
                            <IonCardContent>
                                <IonImg src={tool.imageUrl} style={{ height: '50px', marginBottom: '10px' }} />
                                <div className="tool-card-title">{tool.name}</div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Skills;
