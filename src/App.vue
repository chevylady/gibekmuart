<script setup>
import { RouterView } from 'vue-router'
import footerComponent from './components/footerComponent.vue'
import navComponent from './components/navComponent.vue'
import cookieComponent from './components/cookieComponent.vue'
</script>
<template>
	<cookieComponent />
	<navComponent />
	<router-view />
	<footerComponent />
</template>
<style lang="scss">
@import 'bulma/css/bulma.css';

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>
