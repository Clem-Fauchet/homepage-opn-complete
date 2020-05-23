/******* PC CLONAGE ITEMS BLOG  *********/
const Article = () => {
	const cloneArticle = document.querySelector('.article-item').cloneNode(true)
	document.getElementById('article').appendChild(cloneArticle)
}

Article()
Article()
Article()

const Cocktail = (urlImage) => {
	let imageCocktail = document.querySelector('.img-cocktail')
	imageCocktail.style.backgroundImage = 'url(' + urlImage + ')'

	const cloneCocktail = document
		.querySelector('.cocktails-item')
		.cloneNode(true)
	document.getElementById('cocktails').appendChild(cloneCocktail)
}

Cocktail('../assets/img/blog/cocktail-2.png')
Cocktail('../assets/img/blog/cocktail-3.png')
Cocktail('../assets/img/blog/cocktail-4.png')
// Cocktail('../assets/img/blog/cocktail-1.png')

/*****PC NAVIGATION ANIMATION ****/
const attributeFocusNav = () => {
	const linkFocus = document.getElementById('current')
	linkFocus.focus()
	linkFocus.style.outline = 'none'
}

/***** FUNCTION PC CALL ******/
const appPC = () => {
	attributeFocusNav()
}

appPC()

/*****************************************************************/

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
	const slider = document.querySelectorAll('.grid-container-video')
	const dots = document.querySelectorAll('.btn')

	let activeDotNum = 0 //dot avec class active

	dots.forEach((dot, index) => {
		let dataDot = dot.setAttribute('data-num', index) //error undefined

		dot.addEventListener('click', (e) => {
			let clickedDotNum = e.target.dataset.num
			if (clickedDotNum == activeDotNum) {
				//si active dot do nothing
				return
			} else {
				dots[activeDotNum].classList.remove('active')
				dots[clickedDotNum].classList.add('active')

				console.log(index)
				console.log(dataDot)

				// let pixelsToMove = -100 //translate gauche à droite
				// slider.style.transform =
				// 	'translateX(' + pixelsToMove + ' % * ' + index + ')'
			}
		})
	})
}

/***** FUNCTION MOBILE CALL ******/
const app = () => {
	navMobile()
	navCarousel()
}

app()
