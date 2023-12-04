import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonText, IonList } from '@ionic/react';
import Experience from '../components/Experience';
import Tools from '../components/Tools';
import Skills from '../components/Skills';
import Frameworks from '../components/Frameworks';
import './Home.css'
import ContactInfo from '../components/Contact';


const HomePage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mark Gray - Product Leader</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ContactInfo />
        <IonItem lines="none">
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
        <IonItem lines='none'>
          <IonList>
            <IonTitle className="section-header">Skills</IonTitle>
            <IonText className='section-blurb'>
              Below is a non-exhaustive list of the skills I have gained through ten years of shipping products, some of which even had an impact on the business!
            </IonText>
            <Skills />
          </IonList>
        </IonItem>
        <IonItem lines="none">
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
        <IonItem lines='none'>
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
        <IonItem lines='none'>
          <IonList>
            <IonTitle className="section-header">Tools</IonTitle>
            <IonText className='section-blurb'>
            Over the years I've used various tools in my day to day work as Product Manager. Honestly, listing these feels somewhat ridiculous
            because it's not exactly a badge of honour to say you know how to use JIRA well, but it's important for some people.
            </IonText>
            <Tools />
          </IonList>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
