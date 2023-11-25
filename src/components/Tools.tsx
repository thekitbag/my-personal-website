import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import tools from '../data/tools.json';
import './Tools.css'

const Tools: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                {tools.map((tool, index) => (
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

export default Tools
