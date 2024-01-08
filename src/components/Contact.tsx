import React from 'react';
import { IonCard, IonCardContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { mailOutline, callOutline, logoLinkedin, logoGithub, logoTwitter } from 'ionicons/icons';

const ContactInfo: React.FC = () => {
    // Define your contact information
    const email = 'markfaradaygray@gmail.com';
    const linkedInUrl = 'https://linkedin.com/in/mark-faraday-gray';
    const githubUrl = 'https://github.com/thekitbag';
    const twitterUrl = 'https://twitter.com/MarkFaradayGray'

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const handleLinkedInClick = () => {
        window.open(linkedInUrl, '_blank');
    };

    const handleGithubClick = () => {
        window.open(githubUrl, '_blank');
    };

    const handleTwitterClick = () => {
        window.open(twitterUrl, '_blank');
    };

    return (
        <IonCard>
            <IonCardContent className='contact-card'>
                <IonItem lines="none" button onClick={handleEmailClick}>
                    <IonIcon icon={mailOutline} slot="start" />
                    <IonLabel>{email}</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handleLinkedInClick}>
                    <IonIcon icon={logoLinkedin} slot="start" />
                    <IonLabel>LinkedIn</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handleTwitterClick}>
                    <IonIcon icon={logoTwitter} slot="start" />
                    <IonLabel>Twitter</IonLabel>
                </IonItem>
                <IonItem lines="none" button onClick={handleGithubClick}>
                    <IonIcon icon={logoGithub} slot="start" />
                    <IonLabel>GitHub</IonLabel>
                </IonItem>
            </IonCardContent>
        </IonCard>
    );
};

export default ContactInfo;
