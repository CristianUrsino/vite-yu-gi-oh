<template>
  <HeaderComponent/>
  <main>
    <div class="container">
      <select class="m-3 px-2 py-1 rounded">
        <option value="">alien</option>
      </select>
      <div class="whiteBg p-5 container-fluid">
        <div class="px-2 py-3 blackBg">
          <div class="text-white">Found {{ store.cardsList.length }} cards</div>
        </div>
        <div class="row row-cols-5 gx-3">
          <div class="my-card" v-for="card in store.cardsList" :key="card.id">
            <CardComponent
            :img="card.card_images[0].image_url"
            :name="card.name"
            :archetype="card.archetype"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import CardComponent from './components/CardComponent.vue'
import {store} from './data/store';
import axios from 'axios';
export default{
  name: 'App',
  components:{
    HeaderComponent,
    CardComponent,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCardsInfo(){
      const url = store.apiUrl + store.endPoint.archetype + '=' + 'alien';
      axios.get(url).then((res)=>{
        store.cardsList = res.data.data;
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
