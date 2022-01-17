<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>สินค้า</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="addProduct">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 1</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 1 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(1)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 2</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 2 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(2)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 3</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 3 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(3)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 4</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 4 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(4)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 5</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 5 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(5)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>สินค้า 6</ion-card-title>
              </ion-card-header>
              <ion-card-content> รายละเอียด สินค้า 6 </ion-card-content>
              <ion-card-content>
                <ion-button size="small" @click="buy(6)">สั่งซื้อ</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from "axios";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  alertController,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  name: "Tab2",
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    return {
      add,
    };
  },
  methods: {
    async addProduct() {
      const alert = await alertController.create({
        header: "เพิ่มข้อมูลสินค้า",
        inputs: [
          {
            placeholder: "กรอกรหัสสินค้า",
            name: "product_id",
          },
          {
            placeholder: "กรอกชื่อสินค้า",
            name: "product_name",
          },
          {
            placeholder: "กรอกราคาสินค้า",
            name: "product_price",
            type: "number",
          },
        ],
        buttons: [
          {
            text: "ยืนยัน",
            handler: (data) => {
              if (data.product_id && data.product_name && data.product_price) {
                 console.log("product_id : " + data.product_id);
                 console.log("product_name : " + data.product_name);
                 console.log("product_price : " + data.product_price);
               
               axios.post("http://localhost:3000/mongo/products", data).then(function(res){
                  console.log(res.data.message);
                });
              } else {
                console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
                this.checkinput();
              }
            },
          },
          {
            text: "ยกเลิก",
            handler: () => {
              console.log("ยกเลิก");
            },
          },
        ],
      });
      await alert.present();
    },
    async buy(id: number) {
      const alert = await alertController.create({
        header: "ยืนยันการสั่งซื้อ",
        message: `สินค้ารหัส : ${id}`,
        buttons: [
          {
            text: "ยืนยัน",
            handler: () => {
              console.log("ยืนยัน " + id);
            },
          },
          {
            text: "ยกเลิก",
            handler: () => {
              console.log("ยกเลิก");
            },
          },
        ],
      });
      await alert.present();
    },
    async checkinput() {
      const alert = await alertController.create({
        header: "คำเตือน",
        message: "กรุณากรอกข้อมูลให้ครบถ้วน",
        buttons: ["OK"],
      });
      await alert.present();
    },
    async success(text: string) {
      const alert = await alertController.create({
        header: "สำเร็จ",
        message: text,
        buttons: ["OK"],
      });
      await alert.present()
    },
  },
}
</script>