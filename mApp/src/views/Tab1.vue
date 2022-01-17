<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>หน้าหลัก</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     
      <ion-grid>
        <ion-row>
          <ion-col >
            <ion-button color="light" size="small">button1</ion-button>
          </ion-col>
          <ion-col>
            <ion-button color="dark"  expand="block">button2</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button color="tertiary" size="large" expand="full">button3</ion-button>
          </ion-col>
          <ion-col>
            <ion-button color="medium" size="small" shape="round" fill="outline">button4</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonGrid, IonRow, IonCol }
}
</script>