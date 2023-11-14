import { reactive } from 'vue';
export const store = reactive ({
    error:'',
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint:{
        cardinfo:'cardinfo.php',
        archetypes:'archetypes.php'
    },
    archetypesList:'',
    cardsList:[],
})