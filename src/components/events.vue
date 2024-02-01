<script setup>
import { useEventsPhotos } from '../store/EventsPhotos.js';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const storeEvents = useEventsPhotos();
const breakpoints = {

  200: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  400: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  576: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
  992: {
    itemsToShow: 4,
    snapAlign: 'center',
  }
  }
</script>

<template>
	<div class="carousel-container">

		<Carousel :autoplay="3500" :items-to-show="1" :wrap-around="true" alt="zdjęcie" :breakpoints="breakpoints">
	   <Slide v-for="img in storeEvents.events" :key="img">
		 <img
				:src="`../img/eventsImgs/${img}`"
				class="carousel-img"/>
	   </Slide>
	 </Carousel>

	</div>

</template>

<style lang="scss" scoped>

.carousel-container{
	height: 15em;
	left: 0;
	right: 0;
	.carousel-img {
		height: 15em;
	}
	img{
		width: 18em;
		object-fit:cover;
	}
}
@media (min-width: 576px) {
	.carousel-container{
	height: 18em;
	.carousel-img {
	height: 18em;
	}
	img{
		width: 20em;
	}
}
}
@media (min-width: 992px) {
	.carousel-container{
	height: 25em;
	.carousel-img {
	height: 25em;
	}
	img{
		width: 35em;
	}
}
}
</style>
