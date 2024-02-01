<template>
	<section class="section pb-0 has-background-black is-flex is-flex-direction-column is-align-items-center is-clipped">
		<h1 class="subtitle mt-5 py-2 has-text-light is-uppercase has-text-centered">formularz kontaktowy</h1>
		<div class="form is-flex is-flex-direction-column is-align-items-center">
			<div class="field">
				<label class="label has-text-light" for="name">Imię i nazwisko</label>
				<div class="control wider">
					<input
						class="input has-background-dark has-text-light"
						type="text"
						name="name"
						v-model="personalData"
						maxlength="30"
						:style="{ border: personalData ? '.1em solid DarkOliveGreen' : '' }" />
				</div>
			</div>
			<div class="field">
				<label class="label has-text-light" for="option">Wybierz opcję</label>
				<div class="control">
					<div class="select">
						<select
							v-model="selected"
							:value="''"
							class="wider has-background-dark has-text-light"
							:style="{ border: selected ? '.1em solid DarkOliveGreen' : '' }">
							<option value="">-wybierz-</option>
							<option value="z dojazdem">z dojazdem</option>
							<option value="stacjonarnie">stacjonarnie</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field">
				<label class="label has-text-light" for="option">Wybierz usługę</label>
				<div class="control">
					<div class="select">
						<select
							v-model="pick"
							class="wider has-background-dark has-text-light"
							:style="{ border: pick ? '.1em solid DarkOliveGreen' : '' }">
							<option value="">-wybierz-</option>
							<option value="makijaż okazjonalny">makijaż okazjonalny</option>
							<option value="makijaż artystyczny">makijaż naturalny</option>
							<option value="face-painting">face-painting</option>
						</select>
					</div>
				</div>
			</div>
			<div class="field control">
				<label class="label has-text-light" for="date">Wybierz datę wykonania usługi</label>
				<input
					type="date"
					name="date"
					v-bind:min="date"
					max="2025-12-31"
					v-model="dateVal"
					class="wider has-background-dark"
					:style="{ border: dateVal ? '.1em solid DarkOliveGreen' : '' }" />
			</div>
			<div class="field control">
				<label class="label has-text-light" for="phone">Twój numer telefonu</label>
				<input
					type="tel"
					name="phone"
					v-model="phoneNumber"
					placeholder="+48123456789"
					class="wider"
					:style="{ border: phoneNumber.length === digitsVal && invalidNumber ? '.1em solid DarkOliveGreen' : '' }" />
			</div>
			<div class="field">
				<label class="label has-text-light" for="message">Wiadomość</label>
				<div class="control message">
					<textarea
						v-model="textArea"
						class="textarea has-background-dark has-text-light"
						name="message"
						rows="3"
						placeholder="Opisz szczegóły min. 10 znaków"
						:style="{ border: textArea.length > 10 ? '.1em solid DarkOliveGreen' : '' }"></textarea>
				</div>
			</div>
			<div class="field">
				<div class="control is-flex">
					<label class="checkbox mr-2 my-auto" for="conditions">
						<input type="checkbox" v-model="conditions" />
					</label>
					<p class="is-size-6 has-text-light">
						Akceptuję<router-link to="/conditions" class="navbar-item has-text-info">regulamin</router-link>
					</p>
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button @click=";[checkPhone(), send()]" class="button is-info has-text-dark">Wyślij</button>
				</div>
				<div class="control">
					<button @click="clearForm" class="button is-grey has-text-dark">Wyczyść</button>
				</div>
			</div>
		</div>
		<img
			src="https://cdn.pixabay.com/photo/2013/07/12/19/29/audrey-hepburn-154881_1280.png"
			alt="cosmetics graphic"
			class="img-item mt-4" />
	</section>
	<div class="modal" :class="{ 'is-active': showModal }">
		<div class="modal-background"></div>
		<div class="modal-content has-background-dark py-4 px-4">
			<p class="py-4 px-4 is-size-5 has-text-primary">Wiadomość wysłana. Odpowiem do 24h!</p>
		</div>
		<button @click="showModal = false" class="modal-close is-large" aria-label="close"></button>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreQuerries } from '../store/storeQuerries'

window.scrollTo(0, 0)
const storeQuerries = useStoreQuerries()

const date = new Date().toISOString().substr(0, 10)
const selected = ref('')
const personalData = ref('')
const textArea = ref('')
const dateVal = ref('')
const pick = ref('')
const phoneNumber = ref('')
let digitsVal = 12
let conditions = ref(false)
const Regexp = new RegExp('^[+]{1}[0-9]{11}$')
let invalidNumber = ref(true)

const showErrorInput = ref(false)
let showModal = ref(false)

function checkPhone() {
	if (Regexp.test(phoneNumber.value)) {
		invalidNumber.value = false
	} else {
		invalidNumber.value = true
	}
}
const send = () => {
	if (
		pick.value !== '' &&
		personalData.value &&
		selected.value !== '' &&
		textArea.value.length > 10 &&
		dateVal.value &&
		phoneNumber.value.length === digitsVal &&
		Regexp.test(phoneNumber.value) &&
		conditions.value === true
	) {
		submit()
		showModal.value = true
		showErrorInput = false
	} else if (
		pick.value === '' ||
		!personalData.value ||
		selected.value === '' ||
		textArea.value.length < 10 ||
		!dateVal.value ||
		phoneNumber.value.length !== digitsVal ||
		Regexp.test(!phoneNumber.value) ||
		conditions.value === false
	) {
		alert('UPS! coś jest źle uzupełnione')
	}
}
const clearForm = () => {
	selected.value = ''
	personalData.value = ''
	textArea.value = ''
	dateVal.value = ''
	pick.value = ''
	phoneNumber.value = ''
	conditions.value = false
}
const submit = () => {
	storeQuerries.addMessage(
		textArea.value,
		personalData.value,
		selected.value,
		pick.value,
		dateVal.value,
		phoneNumber.value,
		conditions.value
	)
	clearForm()
}
</script>
<style lang="scss" scoped>
.section {
	min-height: 100vh;
	font-family: 'Montserrat', 'sans-serif';
	input,
	.control,
	.select {
		border-radius: 0.2em;
		overflow: hidden;
		.colorForCorrect {
			border: none;
			// border: solid 0.1em DarkOliveGreen;
		}
		.colorForIncorrect {
			border: solid 0.1em crimson;
		}
	}
	.wider {
		height: 2.5em;
		font-size: 1rem;
	}
	.wider,
	.message {
		width: 15em;
	}
}
.navbar-item {
	display: inline;
	transition: all 0.3s;
	&:hover {
		background-color: transparent;
		color: violet !important;
	}
}
.img-item {
	height: 7em;
	width: auto;
	background-image: url('https://cdn.pixabay.com/photo/2017/08/08/16/06/cosmetics-2611803_1280.png');
}
@media (min-width: 992px) {
	.form {
		width: 40vw;
		.wider, .message {
			width: 20em;
		}
	}
	.img-item {
		height: 12em;
	}
}
</style>
