<template>
  <div>
    <h1>List Product</h1>
    <input type="text" v-model="keySearch" />
    <input type="number" v-model="priceValue" />
    <button @click="handleSearch">Search</button>
    <h1>productName: {{ route.query.productName }}</h1>
    <h1>price: {{ route.query.price }}</h1>
    <h3>productName: {{ result.productName }}</h3>
    <h3>price: {{ result.price }}</h3>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();

const result= computed(()=>{
   return{  
        productName: route.query.productName,
        price: route.query.price,
    };
});

const router=useRouter();
const keySearch = ref('')
const priceValue =ref(0)
const handleSearch=()=>{
    router.push({
        path: "/list-product",
        query: {productName: keySearch.value, price: priceValue.value},
    });
console.log(route.query);

};
</script>

<style></style>
