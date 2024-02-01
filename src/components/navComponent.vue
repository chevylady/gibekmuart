<template>
	<nav class="navbar gradient-bg is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-menu">
			<div
				class="navbar gradient-bg is-size-4 is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
				<img src="../assets/favicon.png" class="image is-48x48" />
				<router-link to="/" class="navbar-item mx-3 has-text-light">Strona główna</router-link>
				<router-link to="/gallery" class="navbar-item mx-3 has-text-light">Galeria</router-link>
				<router-link to="/contact" class="navbar-item mx-3 has-text-light">Kontakt</router-link>
				<div class="is-size-2"><instaBtnComponent /></div>
			</div>
		</div>
		<hamburgerComponent />
	</nav>
</template>
<script setup>
import hamburgerComponent from './hamburgerComponent.vue'
import instaBtnComponent from './instaBtnComponent.vue'

</script>
<style lang="scss" scoped>
.navbar {
	height: 2.5em;
	width: 100%;
	font-family: 'Yatra One', 'serif';
	.navbar-item {
		transition: all 0.3s;
		background-color: transparent !important;
		&:hover {
			color: rgb(43, 32, 62) !important;
		}
	}
}

</style>
