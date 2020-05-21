/******* PC CLONAGE ITEMS BLOG  *********/
const Article = () => {
	const cloneArticle = document.querySelector('.article-item').cloneNode(true)
	document.getElementById('article').appendChild(cloneArticle)
}

Article()
Article()
Article()

const Cocktail = () => {
	const cloneCocktail = document
		.querySelector('.cocktails-item')
		.cloneNode(true)
	document.getElementById('cocktails').appendChild(cloneCocktail)
}

Cocktail()
Cocktail()
Cocktail()

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

/*****MOBILE CAROUSEL ANIMATION ****/

const navCarousel = () => {
	const slider = document.querySelectorAll('.argument')
	const dots = document.querySelectorAll('.btn')

	let activeDotNum = 0

	dots.forEach((dot, index) => {
		dot.setAttribute('data-num', index)

		dot.addEventListener('click', (e) => {
			let clickedDotNum = e.target.dataset.num

			if (clickedDotNum == activeDotNum) {
				return
			} else {
				let pixelsToMove = -100
				dots[activeDotNum].classList.remove('active')
				dots[clickedDotNum].classList.add('active')
				slider.style.transform =
					'translateX(' + pixelsToMove + ' % * ' + index + ')' /// PROBLEME ITEM SVG
			}
		})
	})
}

/***** FUNCTION CALL ******/
const app = () => {
	navMobile()
	navCarousel()
}

app()
