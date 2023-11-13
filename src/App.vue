<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import {store} from './data/store';
import axios from 'axios';
export default{
  name: 'App',
  components:{
    HeaderComponent
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCardsInfo(){
      const url = store.apiUrl + store.endPoint.archetype + '=' + 'alien';
      // console.log(url);
      axios.get(url).then((res)=>{
        store.cardsList = res.data;
        console.log(store.cardsList);
      })
    },
    
  },
  created(){
    this.getCardsInfo();
  }
}
</script>

<style lang="scss" scoped>
  
</style>
