import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

import frameworks from '../data/frameworks.json';


const Frameworks: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                {frameworks.map((tool, index) => (
                    <IonCol size="3" key={index}>
                        <IonCard>
                            <IonCardContent>
                                <IonImg src={tool.imageUrl} style={{ height: '80px', marginBottom: '10px' }} />
                                <div className="tool-card-title">{tool.name}</div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Frameworks;
