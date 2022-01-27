<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>My Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <div class="block">Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt amet quas assumenda</div>
          </ion-col>
          <ion-col size="6">
            <div class="block">Hi</div>
          </ion-col>
          <ion-col size="6">
            <div class="block">Hi</div>
          </ion-col>
          <ion-col size="6">
            <div class="block">Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sunt amet quas assumenda, sint nostrum  temporibus sequi voluptatum exercitationem deleniti.</div>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default  {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonGrid, IonRow }
}
</script>
<style>
.block {background: var(--ion-color-custom-blue-darker); color: white; padding: 15px; border-radius: 7px; height: 100%;}
</style>