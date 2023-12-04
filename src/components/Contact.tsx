import React from 'react';
import { IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { mailOutline, callOutline, logoLinkedin, logoGithub } from 'ionicons/icons';

const ContactInfo: React.FC = () => {
    // Define your contact information
    const email = 'markfaradaygray@gmail.com';
    const phoneNumber = '+447872944542';
    const linkedInUrl = 'https://linkedin.com/in/mark-faraday-gray';
    const githubUrl = 'https://github.com/thekitbag';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleLinkedInClick = () => {
        window.open(linkedInUrl, '_blank');
    };

    const handleGithubClick = () => {
        window.open(githubUrl, '_blank');
    };

    return (
        <IonCard>
            <IonCardContent>
                <IonItem lines="none" button onClick={handleEmailClick}>
                    <IonIcon icon={mailOutline} slot="start" />
                    <IonLabel>{email}</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handlePhoneClick}>
                    <IonIcon icon={callOutline} slot="start" />
                    <IonLabel>{phoneNumber}</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handleLinkedInClick}>
                    <IonIcon icon={logoLinkedin} slot="start" />
                    <IonLabel>LinkedIn Profile</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handleGithubClick}>
                    <IonIcon icon={logoGithub} slot="start" />
                    <IonLabel>GitHub Profile</IonLabel>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
};

export default ContactInfo;
