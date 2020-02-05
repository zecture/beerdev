<template>
 <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          CW
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="right" side="right" behavior="desktop" elevated>
      <q-item v-bind:key="item" v-for="item in store.items">
       {{ item }}
          
      </q-item>  
      <q-separator />  
      <q-item>
        <p><b>Total: {{store.totalAmount}}</b></p>
      </q-item>  
      
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import LayoutStoreModule from './LayoutStoreModule';

@Component
export default class MyLayout extends Vue {
  store = getModule(LayoutStoreModule);

  get leftDrawerOpen() {
    return this.store.leftDrawerOpen;
  }

  set leftDrawerOpen(value: boolean) {
    this.store.setLeftDrawerOpen(value);
  }
}
</script>
