import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Blog from './pages/Blog';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import TagManager from 'react-gtm-module'

const gtmId = import.meta.env.MODE === 'development' ? import.meta.env.VITE_GTM_DEVELOPMENT : import.meta.env.VITE_GTM_PRODUCTION;

const initGTM = () => {
  const tagManagerArgs = {
    gtmId: gtmId
  };

  TagManager.initialize(tagManagerArgs);
}

setupIonicReact();
initGTM();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/blog/:slug" component={Blog} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
