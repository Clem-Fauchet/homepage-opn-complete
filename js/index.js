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
	imageCocktail.style.backgroundImage = `url(${urlImage})`

	const cloneCocktail = document
		.querySelector('.cocktails-item')
		.cloneNode(true)
	document.getElementById('cocktails').appendChild(cloneCocktail)
}

Cocktail('../assets/img/blog/cocktail-2.png')
Cocktail('../assets/img/blog/cocktail-3.png')
Cocktail('../assets/img/blog/cocktail-4.png')

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
	const argument = document.querySelectorAll('.argument')
	const dots = document.querySelectorAll('.btn')

	/* ARGUMENT CIBLE */
	const arg1 = document.querySelector('.arg_1')
	const arg2 = document.querySelector('.arg_2')
	const arg3 = document.querySelector('.arg_3')
	const arg4 = document.querySelector('.arg_4')
	const arg5 = document.querySelector('.arg_5')
	const arg6 = document.querySelector('.arg_6')

	//argument selection
	argument.forEach((arg, indexArg) => {
		arg.setAttribute('data-numarg', indexArg)
		const argData = arg.getAttribute('dataset')

		//position de chaque argument
		let initialPosition = 100
		arg.style.transform = `translateX(calc(${initialPosition}% * ${indexArg}))`

		//Argument position string (//brut number)
		let argPositionValue = arg.style
			.getPropertyValue('transform')
			.match(/(-?[0-9\.]+)/g)
			.toString()

		//dot selection
		let activeDotNum = 0 //dot numero 1 class active index 0

		dots.forEach((dot, indexDot) => {
			dot.setAttribute('data-numdot', indexDot)

			dot.addEventListener('click', (e) => {
				let clickedDotNum = e.target.dataset.numdot

				if (clickedDotNum == activeDotNum) {
					//si active dot do nothing
					return
				} else if (clickedDotNum >= activeDotNum) {
					//change les dots actifs
					dots[activeDotNum].classList.remove('active')
					dots[clickedDotNum].classList.add('active')
					activeDotNum = clickedDotNum

					//change position
					let newArgPosition = (arg.style.transform = `translateX(calc(${argPositionValue}% - (${initialPosition}% * ${clickedDotNum})))`)
				} else {
					//change les dots actifs
					dots[activeDotNum].classList.remove('active')
					dots[clickedDotNum].classList.add('active')
					activeDotNum = clickedDotNum

					//change position
					let newArgPosition = (arg.style.transform = `translateX(calc(${argPositionValue}% + (-${initialPosition}% * ${clickedDotNum})))`)
				}
			})
		})
	})
}

/***** FUNCTION MOBILE CALL ******/
const app = () => {
	let viewportWidth = window.innerWidth || document.documentElement.clientWidth

	navMobile()

	if (viewportWidth < 991) {
		navCarousel()
	}
}

app()
