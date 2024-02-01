<template #content>
	<h3 class="aboutme has-text-grey-light is-size-6 is-size-4-desktop">
		Witaj na mojej stronie poświęconej malowaniu - jednemu z moich ulubionych hobby od wielu lat. Otrzymując w 2020 roku
		dyplom ukończenia profesjonalnego kursu makijażowego odkryłam, że moja malarska ręka znakomicie sprawdza się również
		w makijażach okazjonalnych, artystycznych, sesyjnych, a nawet body-paintingu! Dla mnie jest to wspaniała forma
		relaksu i wyciszenia. W Galerii znajdziesz najlepsze prace z ostatnich lat a śledząc instagram masz dostęp również
		do relacji.
		<span>Potrzebujesz mnie?&#128521;</span> - zadaj pytanie przez
		<router-link to="/contact" class="navbar-item has-text-danger py-0 px-0">formularz</router-link> lub wyślij wiadomość na
		<a href="http://instagram.com/gk.muart" target="_blank" rel="noopener"><i class="fa-brands fa-instagram is-size-4"></i></a>
	</h3>
	<p class="has-text-grey">Autor: Klaudia</p>
</template>
<style lang="scss" scoped>
.aboutme {
	font-family: 'Montserrat', sans-serif;
	.navbar-item{
		display: inline;
		transition: all .3s;
		&:hover{
			background-color: transparent;
		}
	}
}
</style>
