<template>
		<a class="is-flex is-flex-direction-column is-justify-content-center" href="http://instagram.com/gk.muart" target="_blank" rel="noopener"
		><i class="fa-brands fa-instagram"></i
	></a>

</template>

<style lang="scss">

.fa-brands {
	animation: pulse 3s ease alternate infinite;
}

@keyframes pulse {
	0% {
		opacity: 0.4;
	}
	50% {
		opacity: 1;
		color: violet;
	}
	100% {
		opacity: 0.8;
	}
}
</style>
