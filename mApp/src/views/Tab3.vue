<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ลูกค้า</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-list>
        <ion-item-sliding>
          <ion-item>
            <ion-avatar slot="start">
              <img src="../../public/assets/icon/icon.png" />
            </ion-avatar>
            <ion-label>นางสาวพัชรมณี เกตุขวง</ion-label>
          </ion-item>
          <ion-item-options slot="end">
            <ion-item-option>เพิ่มเติม</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
        <ion-item-sliding>
          <ion-item>
            <ion-avatar slot="start">
              <img src="../../public/assets/icon/icon.png" />
            </ion-avatar>
            <ion-label>นางสาวส้ม เกตุขวง</ion-label>
          </ion-item>
          <ion-item-options slot="end">
            <ion-item-option>เพิ่มเติม</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
        <ion-item-sliding>
          <ion-item>
            <ion-avatar slot="start">
              <img src="../../public/assets/icon/icon.png" />
            </ion-avatar>
            <ion-label>นางสาวน้ำชา เกตุขวง</ion-label>
          </ion-item>
          <ion-item-options slot="end">
            <ion-item-option>เพิ่มเติม</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <ion-list>
        <ion-item>
          <ion-label>ชื่อ - นามสกุล : </ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>เบอร์โทรศัพท์ : </ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>เสียงแจ้งเตือน</ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>GPS</ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label>Radio 1</ion-label>
          <ion-radio slot="start"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Radio 2</ion-label>
          <ion-radio slot="start"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Checkbox 1</ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Checkbox 2</ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonItemOption, IonItemOptions, IonItemSliding, IonAvatar, IonCheckbox, IonRadio, IonToggle, IonInput, IonList, IonItem, IonLabel, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
export default  {
  name: 'Tab3',
  components: { IonItemOption, IonItemOptions, IonItemSliding, IonAvatar, IonCheckbox, IonRadio, IonToggle, IonInput, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>