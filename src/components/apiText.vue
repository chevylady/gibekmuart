<script setup>
import axios from 'axios';
import { ref } from 'vue';
const quotes = ref('');
axios.get('https://type.fit/api/quotes')
    .then(response => {  
        quotes.value = response.data[Math.round(Math.random() * response.data.length)].text
    })
</script>
<template>
<h4 class="mt-4 pt-3 is-size-6 is-size-5-desktop">"{{ quotes }}"</h4>
</template>
<style lang="scss" scoped>
h4{
    font-family: 'Montserrat', 'sans-serif';
}
</style>
