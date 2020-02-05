<template>
  <div  class="full-width row wrap justify-center items-start content-center q-gutter-x-xs q-gutter-y-lg">
  
  <div class="col-sm-6 col-md-4">
    <modalTest></modalTest>
    
  </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import LayoutStoreModule from '../layouts/LayoutStoreModule';



@Component
export default class PageIndex extends Vue {
  store = getModule(LayoutStoreModule);
  data () {
    return {
      drawer: true
    }
  }

  get item() {
    console.log('es');  
    return console.log(this.store.items);
  }



}
</script>
