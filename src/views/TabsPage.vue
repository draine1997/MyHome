<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        
        <ion-tab-button tab="tab-my-home" href="/tabs/tab-my-home">
          <ion-icon :icon="homeSharp" />
          <ion-label>My Home</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab-tasks" href="/tabs/tab-tasks">
          <ion-icon :icon="listSharp" />
          <ion-label>Tasks</ion-label>
        </ion-tab-button>
          
        
        <ion-tab-button tab="tab-me" href="/tabs/tab-me">
          <ion-icon :icon="personCircleSharp" />
          <ion-label>Me</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { personCircleSharp, listSharp, homeSharp } from 'ionicons/icons';

export default {
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      personCircleSharp, 
      listSharp, 
      homeSharp,
    }
  }
}
</script>
<style>
ion-tab-bar {
  box-shadow: 0px 0px 10px #e9e9e9
}
</style>