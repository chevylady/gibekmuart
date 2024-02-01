<template>
	<footer class="footer gradient-bg is-flex is-flex-direction-row is-justify-content-center is-align-items-center px-2">
		<p class="is-size-7-mobile has-text-light has-text-weight-semibold">{{ showYear }} Copyright &copy; | All Rights Reserved | Created by Gibek</p>
	</footer>
</template>
<script setup>
const showYear = new Date().getFullYear()
</script>
<style lang="scss">
.footer {
	margin-top: auto;
	height: 3em;
	width: 100vw;
	z-index: 100;
}
</style>
