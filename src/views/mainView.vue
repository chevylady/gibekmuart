<template>
		<section class="section main has-text-light has-text-centered header mt-6">
			<h1 class="is-size-3 mt-1 is-hidden-touch">LazyParrot</h1>
			<h2 class="is-size-3 mt-1"><span class="has-text-danger">~ Makeup & Art</span> portfolio</h2>		
			<apiText />
		</section>
		<section class="section about pb-1">
			<div class="bg"></div>
			<div class="wrapper">
				<h3 class="title has-text-grey-light">O mnie</h3>
				<contentText><slot name="content"></slot></contentText>
				<div class="py-5">
					<events />
				</div>
			</div>
		</section>
</template>
<script setup>
import apiText from '../components/apiText.vue'
import events from '../components/events.vue'
import contentText from '../components/contentText.vue'

window.scrollTo(0, 0)
</script>
<style lang="scss">
.main, .about .bg{
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.main {
	height: 15em;
	background-image: url('../assets/colorSmall.jpg');
	h1 {
		font-family: 'Yatra One', serif;
	}
}
.about {
	position: relative;
	background: linear-gradient(to bottom,  rgba(0, 0, 0, 1) 20%, rgb(36, 36, 36, 0) );
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 99%;
		opacity: 0.1;
		background-image: url('../assets/paintSmall.png');

	}
}
@media (min-width: 1400px){
	.about{
		.wrapper{
			margin: 0 auto;
			width: 70vw;
		}
	}
}
</style>
