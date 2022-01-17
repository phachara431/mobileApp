<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>หน้าหลัก</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="cart" />
          <ion-label>สินค้า</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="person" />
          <ion-label>ลูกค้า</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="News" href="/tabs/News">
          <ion-icon :icon="newspaper" />
          <ion-label>ข่าวสาร</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="Setting" href="/tabs/Setting">
          <ion-icon :icon="settings" />
          <ion-label>ตั้งค่า</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { cart, person, home, newspaper,settings, } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      cart, 
      person, 
      home,
      newspaper,
      settings
    }
  }
}
</script>