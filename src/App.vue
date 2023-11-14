<template>
  <HeaderComponent/>
  <main>
    <div class="container">
      <SelectionComponent
      @filter-archetype="setParams"
      />
      <div class="whiteBg p-5 container-fluid">
        <div class="row row-cols-5 gx-3">
        <div class="col-12">
          <div class="blackBg py-3 px-3">
            <div class="text-white">Found {{ store.cardsList.length }} cards</div>
          </div>
        </div>
          <div class="my-card my-3" v-for="card in store.cardsList" :key="card.id">
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
import SelectionComponent from './components/SelectionComponent.vue';
import {store} from './data/store';
import axios from 'axios';
export default{
  name: 'App',
  components:{
    HeaderComponent,
    CardComponent,
    SelectionComponent,
  },
  data(){
    return{
      store,
      params : {
        num: 100,
        offset:0,
      },
    }
  },
  methods:{
    setParams(search) {
      console.log(search);
      if (search) {
        this.params = {
          archetype: search,
        }
      } else {
        this.params = {
          archetype: 'all',
        };
      }
      this.getCardsInfo();
    },

    getCardsInfo(){
      const url = store.apiUrl + store.endPoint;
      axios.get(url, { params: this.params }).then((res)=>{
        store.cardsList = res.data.data;
        console.log(store.cardsList);
      }).catch((error)=>{
        console.log(error);
      });
    },
  },
  created(){
    this.getCardsInfo();
  }
}
</script>

<style lang="scss" scoped>
  
</style>
