import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonText, IonList, IonButton, IonButtons, IonMenuButton, IonMenu } from '@ionic/react';
import { menuController } from '@ionic/core';
import Experience from '../components/Experience';
import Tools from '../components/Tools';
import Skills from '../components/Skills';
import Frameworks from '../components/Frameworks';
import './Home.css'
import ContactInfo from '../components/Contact';
import Projects from '../components/Projects';

const HomePage = () => {

  const scrollToSection = async (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    await menuController.close();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mark Gray - Product Leader</IonTitle>
          <IonButtons slot="start" className="ion-hide-md-up">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonButtons slot="end" className="ion-hide-md-down">
            <IonButton onClick={() => scrollToSection('contact')}>Contact</IonButton>
            <IonButton onClick={() => scrollToSection('about')}>About Me</IonButton>
            <IonButton onClick={() => scrollToSection('skills')}>Skills</IonButton>
            <IonButton onClick={() => scrollToSection('frameworks')}>Frameworks</IonButton>
            <IonButton onClick={() => scrollToSection('experience')}>Experience</IonButton>
            <IonButton onClick={() => scrollToSection('tools')}>Tools</IonButton>
            <IonButton onClick={() => scrollToSection('blog')}>Blog</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu contentId="main-content" side="start" className="ion-hide-md-up">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button onClick={() => scrollToSection('contact')}>Contact</IonItem>
            <IonItem button onClick={() => scrollToSection('about')}>About Me</IonItem>
            <IonItem button onClick={() => scrollToSection('skills')}>Skills</IonItem>
            <IonItem button onClick={() => scrollToSection('frameworks')}>Frameworks</IonItem>
            <IonItem button onClick={() => scrollToSection('experience')}>Experience</IonItem>
            <IonItem button onClick={() => scrollToSection('tools')}>Tools</IonItem>
            <IonItem button onClick={() => scrollToSection('blog')}>Blog</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonContent className="ion-padding" id="main-content">
        <div id='contact' />
        <ContactInfo />
        <IonItem lines="none" id="about">
          <IonList>
            <IonTitle className="section-header">About Me</IonTitle>
            <IonText className='section-blurb'>
              I’ve spent the last 10 years defining the missions, strategies and success metrics for impactful
              product verticals and individual cross-functional squads. I am happiest in a player-coach role where I can 
              be close enough to the action to feel the buzz of shipping something that moves the needle, whilst building 
              a team that has the skills, processes and culture to do it consistently themselves. <br /><br />
              I built this site myself to showcase my product and web development skills and it's still very much a work in progress
              so go easy on the judgement.  
            </IonText>
          </IonList>
        </IonItem>
        <IonItem lines='none' id="skills">
          <IonList>
            <IonTitle className="section-header">Skills</IonTitle>
            <IonText className='section-blurb'>
              Below is a non-exhaustive list of the skills I have gained through ten years of shipping products, some of which even had an impact on the business!
            </IonText>
            <Skills />
          </IonList>
        </IonItem>
        <IonItem lines="none" id="frameworks">
          <IonList>
            <IonTitle className="section-header">Frameworks</IonTitle>
            <IonText className='section-blurb'>
              These are some of the frameworks that I have used to help focus my teams' time and resources on the most important problems to solve.
              I'm not a huge framework fan as they are, by their very nature, made to be generally good enough rather than perfect for your exact situation.
              But I have still found value in using these.  
            </IonText>
            <Frameworks />
          </IonList>
        </IonItem>
        <IonItem lines='none' id="experience">
          <IonList>
            <IonTitle className="section-header">Professional Experience</IonTitle>
            <IonText className='section-blurb'>
            10 years across B2B and B2C startups and scaleups. Initially in the gaming industry (gambling when you're not trying hard to make it sound softer)
            and then more recently moving into EdTech. I'm not going back to gambling, I like working on products that are making the world a slightly better place!
            Expand each to read a bit more about the products I worked on and the impact I was able to have.
            </IonText>
            <Experience  />
          </IonList>
        </IonItem>
        <IonItem lines='none' id='tools'>
          <IonList>
            <IonTitle className="section-header">Tools</IonTitle>
            <IonText className='section-blurb'>
            Over the years I've used various tools in my day to day work as Product Manager. Honestly, listing these feels somewhat ridiculous
            because it's not exactly a badge of honour to say you know how to use JIRA well, but it's important for some people.
            </IonText>
            <Tools />
          </IonList>
        </IonItem>
        <IonItem lines='none' id='projects'>
          <IonList>
            <IonTitle className="section-header">Projects</IonTitle>
            <IonText className='section-blurb'>
              When I first started working as a PM I took an interest in the technical side of things. I taught myself how to code and 
              created various little projects to sharpen my skills.
            </IonText>
            <Projects />
          </IonList>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

function useIonMenuToggle() {
  throw new Error('Function not implemented.');
}

