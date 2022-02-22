<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ข่าวสาร</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card v-for="(news, i) in this.dataNews" :key="i">
        <img :src="news.urlToImage" />
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>{{ news.title }}</ion-label>
          <ion-button :href="news.url" fill="outline" slot="end"
            >View</ion-button
          >
        </ion-item>

        <ion-card-content>
          {{ news.description }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { pin } from "ionicons/icons";
import axios from "axios";

export default {
  name: "News",
  components: {
    IonCard,
    IonCardContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  setup() {
    return { pin };
  },
  data() {
    return {
      dataNews: null,
    };
  },
  mounted() {
    this.loadNews();
  },
  methods: {
    async loadNews() {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=th&apiKey=3ca8bdceff3a4d309c60fdfa94f37b08"
      );
      this.dataNews = res.data.articles;
      console.log(this.dataNews);
    },
  },
};
</script>