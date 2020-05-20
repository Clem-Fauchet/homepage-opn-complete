/*****MOBILE NAVIGATION ANIMATION ****/

const navMobile = () => {
	const burger = document.querySelector('.burger')
	const header = document.querySelector('header')
	const coverText = document.querySelector('.cover-text')
	const navLinksLeft = document.querySelectorAll('.left-nav li')
	const navLinksRight = document.querySelectorAll('.right-link li')

	burger.addEventListener('click', () => {
		header.classList.toggle('mobile')
		coverText.classList.toggle('hidden')

		/* ANIMATION LINK LEFT/RIGHT */
		navLinksLeft.forEach((link, index) => {
			link.style.animation = `linkSlide 0.7s ease forwards ${index / 4}s`
		})
		navLinksRight.forEach((link, index) => {
			link.style.animation = `linkSlide 0.6s ease forwards ${index / 4}s`
		})

		burger.classList.toggle('cross')
	})
}

const app = () => {
	navMobile()
}

app()
