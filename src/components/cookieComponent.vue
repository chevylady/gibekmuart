<template>
	<template v-if="!showCookie">
		<div class="cookie-box py-3 is-flex is-flex-direction-column is-justify-content-space-evenly is-align-items-center">
			<img src="../assets/cookie.png" alt="cookie icon" class="mt-1 image is-48x48" />
			<p class="is-size-5 is-size-4-desktop has-text-dark has-text-centered">Strona korzysta z ciasteczek!</p>
			<button @click="handleCookies()" class="button my-1 is-info">Akceptuję</button>
			<p class="is-size-6 px-3 mx-1 my-1 has-text-black">
				Ciasteczka są niewielkimi plikami tekstowymi przechowywanymi na urządzeniach użytkowników podczas przeglądania
				strony internetowej. Są one wykorzystywane w celu ułatwienia korzystania z naszej strony, gdyż używamy serwisów
				zewnętrznych.
			</p>
			<button @click="showModal = true" class="button is-small is-danger">
				&rarr; Polityką Prywatności oraz Cookies
			</button>
		</div>
		<template v-if="showModal">
			<div class="modal is-active is-clipped">
				<div class="modal-background"></div>
				<div class="modal-content">
					<div class="has-background-black">
						<section class="section privacy has-text-light pt-1 px-6">
							<h1 class="title has-text-grey mt-3">POLITYKA PRYWATNOŚCI ORAZ COOKIES</h1>
							<h2 class="subtitle mt-3">POLITYKA PRYWATNOŚCI</h2>
							<p class="is-size-6">
								Niniejsza Polityka stanowi podstawową informację o celach, sposobach przetwarzania oraz bezpieczeństwie
								Twoich danych osobowych, jako użytkownika strony: https://gibekmuart.web.app/ (zwanej dalej Stroną).
								Zapoznając się z Polityką prywatności dowiesz się kto jest administratorem Twoich danych osobowych,
								jakie dane osobowe są przez Stronę zbierane, w jakich celach są wykorzystywane oraz jak są chronione.
							</p>
							<ol>
								<p>§1. Informacje podstawowe.</p>
								<li>Administratorem Twoich danych osobowych jest Klaudia Gibek.</li>
								<li>Kontakt z Administratorem jest możliwy za pośrednictwem poczty e-mail: gibartis20@gmail.com</li>
							</ol>
							<ol>
								<p>§2. Zasady przetwarzania danych.</p>
								<li>Administrator przetwarza dane osobowe z poszanowaniem następujących zasad:</li>
								<li>w oparciu o podstawę prawną i zgodnie z prawem (legalizm)</li>
								<li>rzetelnie i uczciwie (rzetelność)</li>
								<li>w sposób przejrzysty dla osoby, której dane dotyczą (transparentność)</li>
								<li>w konkretnych celach i nie „na zapas” (minimalizacja)</li>
								<li>nie więcej niż potrzeba (adekwatność)</li>
								<li>z dbałością o prawidłowość danych (prawidłowość)</li>
								<li>nie dłużej niż potrzeba (czasowość)</li>
								<li>zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo)</li>
							</ol>
							<ol>
								<p>§3. Cele, podstawy prawne i zakres przetwarzania danych.</p>
								<p>Twoje dane będziemy przetwarzać:</p>
								<li>
									w celach kontaktowych, aby udzielić ci odpowiedzi na Twoją wiadomość przesłaną nam bezpośrednio drogą
									e-mailową lub za pośrednictwem formularza na podstawie realizacji prawnie uzasadnionego interesu
									Administratora związanego z koniecznością udzielenia Ci odpowiedzi.
								</li>
							</ol>
							<ol>
								<p>Przetwarzamy Twoje dane w zakresie:</p>
								<li>
									jeśli prześlesz nam wiadomość e-mail to będziemy przetwarzać dane, które będą w niej zawarte.
									Przekazanie nam danych w e-mailu następuje dobrowolnie. W każdym czasie możesz zwrócić się do nas z
									prośbą o usunięcie tych danych.
								</li>
								<li>
									jeśli skorzystać z formularza kontaktowego na naszej stronie to będziemy przetwarzać dane w postaci
									twojego numeru telefonu oraz imienia. Podanie tych danych stanowi warunek udzielenia przez nas
									odpowiedzi na Twoje zapytanie.
								</li>
								<li>
									pozostałe dane, które Administrator przetwarza to adres IP i inne dane zapisywane w plikach cookies.
									To Ty decydujesz w jakim zakresie będziemy mogli wykorzystać pliki cookies z Twoimi danymi.
									Przekazanie nam danych w ten sposób następuje dobrowolnie. W każdym czasie możesz zmienić swoje
									preferencje. Możesz to zrobić w swojej przeglądarce internetowej lub też po usunięciu zapisanych
									plików cookies pochodzących z naszej Strony.
								</li>
								<li>
									jeśli polubisz lub w inny sposób dołączysz do naszego profilu w mediach społecznościowych (np.
									Instagram) będziemy przetwarzać Twoje dane, które podałeś w danym medium i do których będziemy mieli
									dostęp. W celu zakończenia przetwarzania możesz zakończyć subskrypcję naszego profilu.
								</li>
								<li>
									API zewnętrznych partnerów: Nasza strona może korzystać z API (interfejsów programistycznych
									aplikacji) dostarczanych przez zewnętrznych partnerów w celu zintegrowania różnych funkcjonalności,
									takich jak mapy, usługi analityczne, reklamowe czy media społecznościowe. Korzystanie z tych API może
									prowadzić do tworzenia dodatkowych ciasteczek lub korzystania z istniejących ciasteczek w celu
									przetwarzania danych użytkowników. Zewnętrzni partnerzy mogą przechowywać i przetwarzać te dane
									zgodnie z własnymi politykami prywatności.
								</li>
							</ol>
							<ol>
								<p>
									§4. Odbiorcy danych oraz zamiar przekazywania danych do Państwa spoza EOG lub organizacji
									międzynarodowej.
								</p>
								<li>
									jeśli wyraziłeś zgodę na ciasteczka analityczne, Twoje dane zapisane w plikach cookies, będą
									przetwarzane przez podmiot dostarczający oprogramowanie do analizy ruchu naszej stronie (np. Google
									Analytics)
								</li>
								<li>
									Twoje dane nie są przekazywane do Państw spoza EOG lub organizacji międzynarodowych, z wyjątkiem
									partnerów wymienionych poniżej:
									<ul>
										<li>
											1. Google Inc. z siedzibą w USA w zakresie analityki ruchu na stronie w systemie Google Analytics
											oraz dostarczania dodatkowych funkcji (takich jak Google Maps, Google Search Console) związanych z
											prawidłowym funkcjonowaniem strony oraz wyświetlaniem wyników wyszukiwania. Zobacz jak Google
											przetwarza i chroni Twoje dane. Ten dodatek do przeglądarki umożliwi Ci zarządzanie zakresem i
											poziomem dostępu do danych zbieranych przez Google Analytics.
										</li>
										<li>
											2. Google Inc. z siedzibą w USA w zakresie reklam i mierzenia ich skuteczności w systemie Google
											Ads. Zobacz jak Google przetwarza i chroni Twoje dane. Tutaj możesz zarządzać swoimi preferencjami
											i informacjami w systemie reklamowym Google.
										</li>
									</ul>
								</li>
							</ol>
							<ol>
								<p>§5. Termin przechowywania danych.</p>
								<li>
									Twoje dane podane w formularzu kontaktowym czy poprzez email zostaną usunięte z bazy danych najpóźniej
									w dniu wykonania usługi. Nie zbieramy w/w danych w innych celach niż tylko kontakt w celu umówienia
									usługi.
								</li>
							</ol>
							<ol>
								<p>§6. Prawa użytkowników.</p>
								<li>
									W związku z przetwarzaniem Twoich danych przysługują Ci następujące prawa:
									<ul>
										<li>1. dostępu do treści swoich danych oraz</li>
										<li>2. prawo ich sprostowania, usunięcia, ograniczenia przetwarzania,</li>
										<li>3. prawo do przenoszenia danych,</li>
										<li>4. prawo wniesienia sprzeciwu,</li>
										<li>
											5. prawo do cofnięcia zgody na ich przetwarzanie w dowolnym momencie i w dowolnej formie, chyba że
											przetwarzanie Państwa danych odbywa się w celu wykonywania umowy przez Administratora, w celu
											wywiązania się przez Administratora z obowiązków prawnych względem instytucji państwowych lub w
											celu realizacji prawnie uzasadnionych interesów Administratora.
										</li>
										<li>
											6. Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (na adres Urzędu
											Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).
										</li>
										<li>
											7. Więcej informacji w przedmiocie ochrony danych osobowych mogą Państwo otrzymać na stronie
											internetowej Urzędu Ochrony Danych Osobowych: www.uodo.gov.pl
										</li>
									</ul>
								</li>
							</ol>
						</section>
						<section class="has-text-light pt-1 px-6">
							<h2 class="subtitle">POLITYKA COOKIES</h2>
							<ol>
								<p class="is-size-6">§7 Informacja o ciasteczkach</p>
								<li>Na naszej stronie wykorzystujemy ciasteczka (pliki cookies)</li>
								<li>
									Ciasteczka (pliki cookies) są niewielkimi plikami tekstowymi przechowywanymi na urządzeniach
									użytkowników podczas przeglądania strony internetowej. Są one wykorzystywane w celu ułatwienia
									korzystania z naszej strony, poprawienia jakości usług oraz umożliwienia analizy ruchu i zachowań
									użytkowników.
								</li>
								<li>
									Ciasteczka mogą być stałe (trwałe) lub tymczasowe (sesyjne). Stałe ciasteczka są przechowywane na
									urządzeniu użytkownika przez określony czas lub do momentu ich usunięcia przez użytkownika. Tymczasowe
									ciasteczka są usuwane po zamknięciu przeglądarki.
								</li>
								<li>
									Wykorzystujemy ciasteczka własne oraz ciasteczka stron trzecich. Ciasteczka własne są wykorzystywane w
									celu zapewnienia prawidłowego działania strony, personalizacji treści, zapisywania preferencji
									użytkowników oraz analizy statystyk. Ciasteczka stron trzecich są wykorzystywane przez zewnętrzne
									narzędzia analityczne, reklamowe oraz do integracji z mediami społecznościowymi.
								</li>
								<li>
									Użytkownicy mają prawo kontrolować i ograniczać sposób, w jaki ciasteczka są wykorzystywane na naszej
									stronie. Większość przeglądarek internetowych umożliwia zarządzanie plikami cookies, w tym blokowanie,
									ograniczanie lub usuwanie ciasteczek. Szczegółowe informacje na temat zarządzania ciasteczkami można
									znaleźć w ustawieniach przeglądarki użytkownika.
								</li>
								<li>
									Należy pamiętać, że wyłączenie lub ograniczenie ciasteczek może wpłynąć na funkcjonalność strony oraz
									jakość świadczonych usług.
								</li>
								<li>
									Na naszej stronie wykorzystujemy różne rodzaje ciasteczek, aby lepiej dostosować się do potrzeb
									użytkowników i zapewnić optymalne korzystanie ze strony.
								</li>
								<li>
									Ciasteczka techniczne: Są niezbędne do prawidłowego funkcjonowania witryny. Umożliwiają utrzymanie
									sesji użytkownika, obsługę formularzy, zapamiętywanie preferencji oraz zapewnienie bezpieczeństwa
									strony.
								</li>
								<li>
									Ciasteczka marketingowe: Pozwalają na personalizację reklam oraz prowadzenie działań remarketingowych,
									które są dostosowane do zainteresowań i preferencji użytkowników. Służą również do mierzenia
									skuteczności kampanii reklamowych oraz optymalizacji treści reklamowych.
								</li>
								<li>
									Ciasteczka analityczne: Są wykorzystywane do zbierania informacji o sposobie korzystania z witryny
									przez użytkowników, takich jak liczba odwiedzin, strony odwiedzane, czas spędzony na stronie czy
									źródło ruchu. Uzyskane dane pomagają w analizie i optymalizacji strony, poprawiając jej funkcjonowanie
									i dostosowując treści do potrzeb użytkowników.
								</li>
							</ol>
							<ol>
								<p>§8 Dlaczego korzystamy z ciasteczek?</p>
								<li>
									Komfort korzystania ze strony: Ciasteczka (pliki cookies) mogą znacząco wpłynąć na komfort korzystania
									ze strony internetowej.
								</li>
								<li>
									Personalizacja treści: Ciasteczka pozwalają na dostosowanie wyświetlanych treści do preferencji i
									zainteresowań użytkownika, co sprawia, że strona staje się bardziej atrakcyjna i użyteczna.
								</li>
								<li>
									Zapamiętywanie ustawień: Dzięki ciasteczkom strona może zapamiętać wybrane przez użytkownika
									ustawienia, takie jak język, układ czy kolorystyka, co pozwala na szybsze i wygodniejsze korzystanie z
									serwisu.
								</li>
								<li>
									Logowanie: Ciasteczka umożliwiają przechowywanie informacji o zalogowanym użytkowniku, co pozwala na
									łatwe przełączanie się między różnymi sekcjami strony bez konieczności ponownego logowania.
								</li>
								<li>
									Utrzymanie sesji: Dzięki ciasteczkom strona może śledzić aktywność użytkownika na różnych podstronach,
									co pozwala na łatwe wracanie do ostatnio odwiedzanych sekcji lub kontynuowanie niedokończonych
									działań, takich jak wypełnianie formularzy.
								</li>
								<li>
									Optymalizacja wydajności: Ciasteczka mogą być wykorzystane do analizy ruchu i zachowań użytkowników na
									stronie, co pomaga w optymalizacji jej wydajności oraz dostarczaniu treści o wysokiej jakości.
								</li>
								<li>
									Reklamy: Ciasteczka umożliwiają wyświetlanie spersonalizowanych reklam, które są dopasowane do
									zainteresowań i potrzeb użytkownika. Dzięki temu, reklamy są mniej inwazyjne i bardziej adekwatne.
								</li>
								<li>
									Integracja z mediami społecznościowymi: Ciasteczka pozwalają na integrację z serwisami
									społecznościowymi, takimi jak Facebook, Twitter czy Instagram, co umożliwia łatwe udostępnianie treści
									oraz korzystanie z dodatkowych funkcji, takich jak komentowanie czy polubienia.
								</li>
							</ol>
							<ol>
								<p>§9 Funkcje ciasteczek technicznych</p>
								<li>
									Utrzymanie sesji użytkownika: Ciasteczka techniczne umożliwiają utrzymanie sesji użytkownika podczas
									poruszania się po stronie, co pozwala na przechodzenie między różnymi sekcjami witryny bez
									konieczności ponownego logowania czy wprowadzania tych samych informacji.
								</li>
								<li>
									Zapamiętywanie preferencji użytkownika: Dzięki ciasteczkom technicznym strona może przechowywać
									informacje na temat preferencji użytkowników, takie jak wybrany język, wielkość czcionki, ustawienia
									kolorystyczne czy inne elementy personalizacji.
								</li>
								<li>
									Obsługa formularzy: Ciasteczka techniczne wspomagają funkcjonowanie formularzy na stronie, takich jak
									formularze logowania, rejestracji czy kontaktowe, zapewniając prawidłowe przetwarzanie danych
									wprowadzanych przez użytkowników.
								</li>
								<li>
									Optymalizacja wydajności strony: Użycie ciasteczek technicznych umożliwia monitorowanie wydajności
									strony oraz szybkość ładowania poszczególnych elementów, co pozwala na optymalizację i poprawę jakości
									świadczonych usług.
								</li>
								<li>
									Bezpieczeństwo: Ciasteczka techniczne pomagają w zapewnieniu bezpieczeństwa witryny i jej
									użytkowników, na przykład poprzez weryfikację tożsamości użytkowników, wykrywanie prób włamań czy
									ochronę przed atakami typu CSRF (Cross-Site Request Forgery).
								</li>
							</ol>
							<ol>
								<p>§10 Funkcje ciasteczek analitycznych</p>
								<li>
									Pomiar ruchu na stronie: Ciasteczka analityczne pozwalają na monitorowanie liczby odwiedzin,
									unikalnych użytkowników i wyświetleń stron, co daje ogólny obraz popularności i wydajności witryny.
								</li>
								<li>
									Analiza zachowań użytkowników: Dzięki ciasteczkom analitycznym można zbierać informacje o sposobie, w
									jaki użytkownicy poruszają się po stronie, na przykład czas spędzony na poszczególnych podstronach,
									ścieżki nawigacji oraz miejsca, w których opuszczają witrynę.
								</li>
								<li>
									Optymalizacja konwersji: Ciasteczka analityczne pomagają w identyfikowaniu elementów strony, które
									wpływają na skuteczność osiągania celów biznesowych, takich jak rejestracja, złożenie zamówienia czy
									wypełnienie formularza kontaktowego.
								</li>
								<li>
									Segmentacja użytkowników: Użycie ciasteczek analitycznych umożliwia grupowanie użytkowników według
									różnych kryteriów co pozwala na lepsze dostosowanie treści i oferty do potrzeb poszczególnych
									segmentów.
								</li>
								<li>
									Testowanie A/B: Ciasteczka analityczne są wykorzystywane do przeprowadzania testów A/B, które polegają
									na porównaniu dwóch wersji strony internetowej, aby sprawdzić, która z nich lepiej spełnia założone
									cele. Testy te pomagają w optymalizacji wyglądu, funkcjonalności i treści witryny.
								</li>
							</ol>
							<ol>
								<p>§11 Funkcje ciasteczek reklamowych</p>
								<li>
									Spersonalizowane reklamy: Ciasteczka marketingowe umożliwiają wyświetlanie reklam dopasowanych do
									zainteresowań, preferencji i historii przeglądania użytkownika, co sprawia, że są one bardziej
									atrakcyjne i efektywne.
								</li>
								<li>
									Remarketing: Dzięki ciasteczkom marketingowym można śledzić użytkowników, którzy odwiedzili witrynę,
									ale nie dokonali zakupu lub innej akcji, i ponownie kierować do nich reklamy, aby zachęcić do powrotu
									na stronę i finalizacji transakcji.
								</li>
								<li>
									Pomiar skuteczności reklam: Ciasteczka marketingowe pozwalają na monitorowanie wyników kampanii
									reklamowych, takich jak liczba kliknięć, konwersji czy wyświetleń, co umożliwia optymalizację
									strategii marketingowej.
								</li>
								<li>
									Zarządzanie reklamami w wielu kanałach: Użycie ciasteczek marketingowych ułatwia koordynację i
									integrację działań reklamowych prowadzonych w różnych kanałach, takich jak wyszukiwarki, media
									społecznościowe czy strony partnerskie.
								</li>
								<li>
									Testowanie i optymalizacja treści reklamowych: Ciasteczka marketingowe są wykorzystywane do
									przeprowadzania testów A/B oraz innych metod analizy, które pozwalają na ocenę, jakie przekazy,
									formaty czy kreatywności reklamowe są najbardziej skuteczne i angażujące dla użytkowników.
								</li>
							</ol>
						</section>
					</div>
				</div>
				<button @click="showModal = false" class="modal-close is-large" aria-label="close"></button>
			</div>
		</template>
	</template>
</template>
<script setup>
import { ref } from 'vue'

const showCookie = ref(null)
const showModal = ref(false)

const handleCookies = () => {
	localStorage.setItem('cookieAccepted', 'true')
	showCookies()
}
const showCookies = () => {
	showCookie.value = localStorage.getItem('cookieAccepted')
}
showCookies()
</script>
<style lang="scss" scoped>
.cookie-box {
	position: fixed;
	width: 100%;
	height: 50%;
	top: -30em;
	background-color: rgba(255, 172, 186, 0.988);
	animation: showCookies 0.8s 0.5s forwards;
	z-index: 100;
	.button {
		transition: all 0.3s;
		&:hover {
			color: black;
		}
	}
}
.modal {
	z-index: 200;
}
ol p:first-child {
	color: violet;
}
.back {
	transition: all 0.3s;
	&:hover {
		background-color: transparent;
	}
}
@keyframes showCookies {
	from {
		opacity: 0;
		top: -10em;
	}
	to {
		opacity: 1;
		top: 3.5em;
	}
}
</style>
