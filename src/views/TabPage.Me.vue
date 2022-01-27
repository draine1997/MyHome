<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Me</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Me</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="me">
      <ion-icon :icon="personCircleSharp" ></ion-icon>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/vue';
import { personCircleSharp } from 'ionicons/icons';

export default  {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon },
  setup() {
    return {
      personCircleSharp, 
    }
  }
}
</script>
<style>
.me ion-icon {
  font-size: 128px;
}
</style>