<template>
  <div>
    <h1>value: {{ route.query.name }}</h1>
    <input type="text" v-model="inputValue">
    <button @click="handleSearch">search</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router=useRouter();
const route=useRoute();
const inputValue=ref('')
const handleSearch=()=>{
     router.push({
        path: "/search",
        query: {name: inputValue.value}
     })
}
</script>

<style>

</style>