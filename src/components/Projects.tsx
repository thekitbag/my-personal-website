import React from 'react';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonChip, IonText } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';
import projects from '../data/projects.json';


const Projects: React.FC = () => {
    return (
      <IonGrid>
        <IonRow>
          {projects.map((project, index) => (
            <IonCol size-xs="12" size-sm="6" size-md="4" key={index}>
              <IonCard className='card-component'>
                <IonCardHeader>
                  <IonCardTitle>{project.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="card-content">
                  <IonText>{project.description}</IonText>
                  <div className="tech-chip-container">
                    {project.technologies.map((tech, techIndex) => (
                      <IonChip key={techIndex}>{tech}</IonChip>
                    ))}
                  </div>
                  <div className="button-container">
                    <IonButton expand="block" href={project.codeUrl} target="_blank" className="view-code-button">
                      <IonIcon slot="start" icon={logoGithub} />
                      View Code
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    );
  };
  
  export default Projects;
  

