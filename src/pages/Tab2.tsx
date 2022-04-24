import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TM470 App Setup Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TM470 App Setup Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="TM470 App Setup Page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
