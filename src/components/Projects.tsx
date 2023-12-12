import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip, IonImg } from '@ionic/react';
import projects from '../data/projects.json';

const Projects: React.FC = () => {
    return (
        <IonGrid>
            <IonRow>
                {projects.map((project, index) => (
                    <IonCol size-xs="12" size-sm="6" size-md="4" key={index}>
                        <IonCard className='project-card'>
                            <IonCardHeader>
                                <IonCardTitle>{project.title}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p>Intended User: {project.user}</p>
                                <p>{project.description}</p>
                                <p>
                                    Code: <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Repository</a>
                                </p>
                                {project.technologies.map((tech, techIndex) => (
                                    <IonChip key={techIndex}>{tech}</IonChip>
                                ))}
                                <IonImg src={project.imageUrl} />
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    );
};

export default Projects;
