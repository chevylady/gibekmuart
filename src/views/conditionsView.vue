<template>
	<div class="section mt-3 has-background-black">
		<router-link to="/contact" class="navbar-item back has-text-light"
			><p class="mt-5 has-text-danger">&larr; Powrót</p></router-link
		>
		<h2 class="mt-3 subtitle">Regulamin</h2>
		<div class="px-5 mb-1">
			<ol class="has-text-grey-light">
				<li>
					2-3 dni przed umówioną usługą należy wykonać peeling twarzy oraz ust i dbać o nawodnienie skóry - wpływa to na
					trwałość makijażu. Im skóra jest w lepszej kondycji tym lepszy efekt i współpraca z kosmetykami.
				</li>
				<li>Płatność za makijaż następuje najpóźniej w dniu wykonania. Kosz makijażu 100-140zł zależy od ustaleń.</li>
				<li>
					Dane przekazane w formularzu wykorzystywane są wyłącznie do kontaktu i nie przechowywane po wykonaniu usługi.
				</li>
				<li>Makijaż wykonywany jest wyłącznie kosmetykami makijażystki. Wyjątkiem są alergie skórne.</li>
				<li>Dojazd do miejsca wykonania makijażu jest dodatkowo płatny - koszt paliwa ok 2zł/1km</li>
			</ol>
		</div>
	</div>
</template>
<script setup>
window.scrollTo(0, 0)
</script>
<style lang="scss" scoped>
.section {
	min-height: 100vh;
	.back {
		transition: all 0.3s;
		&:hover {
			background-color: transparent;
			color: rgb(247, 182, 247) !important;
		}
	}
	ol {
		font-family: 'Montserrat', 'sans-serif';
	}
}
</style>
