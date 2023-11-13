<template>
    <figure><img :src="img" :alt="name + 'image'"></figure>
    <div class="text-white">{{ name }}</div>
    <div>{{ archetype }}</div>
</template>

<script>
export default{
    name:'CardComponent',
    props:{
        img:String,
        name:String,
        archetype:String,
    }
}
</script>

<style lang="scss" scoped>
    
</style>
