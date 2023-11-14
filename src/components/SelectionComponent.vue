<template>
    <div>
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
            <option value="alien">Alien</option>
            <option value="-Eyes Dragon">Eyes Dragon</option>
            <option value="@Ignister">Ignister</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            textSearch: ''
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