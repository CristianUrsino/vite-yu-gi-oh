<template>
    <div>
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData" placeholder="choice" class="my-4">
            <option v-for="(archetype,index) in store.archetypesList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
    name: 'SearchBar',
    data() {
        return {
            textSearch: '',
            store
        }
    },
    methods: {
        passData() {
            this.$emit('filterArchetype', this.textSearch);
        }
    }
}
</script>

<style lang="scss" scoped></style>