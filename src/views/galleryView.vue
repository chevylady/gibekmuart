<template>
	<section class="section has-background-black">
		<div class="columns is-multiline is-centered mt-6">
			<div v-for="img in store1.photos" class="img-box my-2 mx-2 column is-one-quarter">
				<img :src="`../img/makeups/${img}`" :key="img" :alt="store1.photoDesc" class="image" ref="el" />
			</div>
		</div>
		<div @click="scrollToTop" class="arrowUp has-background-grey is-flex is-justify-content-center is-align-items-center">
			<i class="fa-solid fa-arrow-up is-size-1"></i>
		</div>
	</section>
</template>
<script setup>
import { usePhotoStore } from '../store/PhotoStore.js'
import { ref, onMounted } from 'vue'

window.scrollTo(0, 0)
const store1 = usePhotoStore()
const el = ref()
onMounted(() => {
	const allImages = document.querySelectorAll('.image')
	let delayTime = 0
	allImages.forEach(item => {
		item.classList.add('animatedImg')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
})
const scrollToTop = () =>{
	window.scrollTo(0, 0)
}
</script>
<style lang="scss" scoped>
.section {
	position: relative;
	.image {
		border-radius: 0.5em;
		opacity: 0;
	}
	.animatedImg {
		animation: animationImg 0.5s forwards;
	}
	.arrowUp {
		position: absolute;
		bottom: 0.5em;
		right: 0.5em;
		height: 5em;
		width: 5em;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
		.fa-arrow-up {
			animation: goUp 2s infinite;
		}
	}
}
@keyframes animationImg {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes goUp {
	from {
		transform: translateY(50%);
	}
	to {
		transform: translateY(-40%);
	}
}
</style>
