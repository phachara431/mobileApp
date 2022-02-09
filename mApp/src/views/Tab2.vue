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
        <ion-col v-for="data of dataProduct" :key="data.id">
          <ion-card>
            <ion-card-header>
              <ion-card-title>{{ data.product_name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              รหัสสินค้า {{ data.product_id }}
            </ion-card-content>
            <ion-card-content>
              <ion-button size="small" @click="buy(data.product_id)"
                >ราคา {{ data.product_price }}</ion-button
              >
              <ion-button size="small" color="danger" @click="del(data._id)"
                >ลบ</ion-button
              >
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
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
    IonCol,
  },
  setup() {
    return {
      add,
    };
  },
  data() {
    return {
      dataProduct: "",
    };
  },
  async created() {
    this.allProduct();
  },
  methods: {
    async del(id){
      const alert = await alertController.create({
        header: "ยืนยันการลบข้อมูลสินค้า",
        buttons: [
          {
            text: "ยืนยัน",
            handler: async () => {
              console.log("ยืนยัน " + id);
              await axios.delete("http://localhost:3000/mongo/products/" + id)
              this.allProduct();
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
    async allProduct() {
      try {
        const res = await axios.get("http://localhost:3000/mongo/products");
        this.dataProduct = res.data;
        // console.log("allProduct")
        // console.log(this.dataProduct);
      } catch (error) {
        console.log(error);
      }
    },
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
            handler: async (data) => {
              if (data.product_id && data.product_name && data.product_price) {
                // console.log("product_id : " + data.product_id);
                // console.log("product_name : " + data.product_name);
                // console.log("product_price : " + data.product_price);
                await axios
                  .post("http://localhost:3000/mongo/products", data)
                  .then(function (res) {
                    console.log(res.data.message);
                  });
                  this.allProduct();
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
    async buy(id) {
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
    async success(text) {
      const alert = await alertController.create({
        header: "สำเร็จ",
        message: text,
        buttons: ["OK"],
      });
      await alert.present();
    },
  },
};
</script>