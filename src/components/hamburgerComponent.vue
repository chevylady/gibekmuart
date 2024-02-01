<script setup>
import { ref } from 'vue'
import { useActiveStates } from '../store/ActiveStates'
import { onClickOutside } from '@vueuse/core'
import instaBtnComponent from './instaBtnComponent.vue'

const store2 = useActiveStates()

const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(
	navbarMenuRef,
	() => {
		store2.activeHamburger = false
	},
	{
		ignore: [navbarBurgerRef],
	}
)
</script>
<template>
	<div class="navbar-mobile is-flex is-flex-direction-row is-justify-content-space-evenly is-align-items-center">
		<p class="navTitle is-size-4 is-hidden-desktop has-text-light">LazyParrot</p>
		<div class="navbar-brand">
			<button
				@click="store2.activeHamburger = !store2.activeHamburger"
				class="navbar-burger"
				:class="{ 'is-active': store2.activeHamburger }"
				ref="navbarBurgerRef"
				aria-label="menu"
				aria-expanded="false">
				<span class="has-text-light" aria-hidden="true"></span>
				<span class="has-text-light" aria-hidden="true"></span>
				<span class="has-text-light" aria-hidden="true"></span>
			</button>
		</div>
	</div>
	<div
		class="nav-mobile pr-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
		:class="{ active: store2.activeHamburger }"
		ref="navbarMenuRef">
		<img src="../assets/favicon.png" class="image is-64x64" />
		<router-link to="/" @click="store2.activeHamburger = false" class="navbar-item mx-3 my-3 has-text-light is-size-4"
			>Strona główna</router-link
		>
		<router-link
			to="/gallery"
			@click="store2.activeHamburger = false"
			class="navbar-item mx-3 my-3 has-text-light is-size-4"
			>Galeria</router-link
		>
		<router-link
			to="/contact"
			@click="store2.activeHamburger = false"
			class="navbar-item mx-3 my-3 has-text-light is-size-4"
			>Kontakt</router-link
		>
		<div class="is-size-1"><instaBtnComponent /></div>
		
	</div>
</template>
<style lang="scss" scoped>
.nav-mobile {
	position: absolute;
	right: 0;
	min-height: 100svh;
	background-color: #cf556def;
	transform: translateX(100%);
	transition: transform 0.2s;
	&.active {
		transform: translateX(0);
	}
	.navbar-item{
		transition: all 0.3s;
		&:hover{
			background-color: transparent;
			color: rgb(43, 32, 62) !important;
		}
	}
}
.navTitle {
	padding-left: 0.3em;
		letter-spacing: 0.3em;
}
.navbar-burger span{
			height: 0.2em;
}

</style>
