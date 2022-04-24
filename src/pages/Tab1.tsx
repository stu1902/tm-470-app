import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState } from 'react';
import './Tab1.css';


const Tab1: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TM470 App Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TM470 App Login Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="TM470 App Login" />
          <IonItem>
              <IonLabel position="floating">Personnel Number</IonLabel>
              <IonInput value={text}></IonInput>
          </IonItem>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
