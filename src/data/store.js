import { reactive } from 'vue';
export const store = reactive ({
    error:'',
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    endPoint: {
        // name: 'name',
        // type: 'type',
        archetype: 'archetype'
    },
    cardsList:[],
})