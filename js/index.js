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

Cocktail('./assets/img/blog/cocktail-2.png')
Cocktail('./assets/img/blog/cocktail-3.png')
Cocktail('./assets/img/blog/cocktail-4.png')

/*****PC NAVIGATION ANIMATION ****/
const attributeFocusNav = () => {
	const linkFocus = document.getElementById('current')
	linkFocus.focus()
	linkFocus.style.outline = 'none'
}

//STICKY BAR
const scrollBar = () => {
	const stickyBar = document.getElementById('sticky-bar')

	window.addEventListener('scroll', () => {
		const offset = window.pageYOffset
		offset > 900
			? stickyBar.classList.add('on')
			: stickyBar.classList.remove('on')
	})
}

//APP ANIMATION
const selection = () => {
	const previousBtn = document.getElementById('previous')
	const nextBtn = document.getElementById('next')

	const containerSelection = document.querySelectorAll('.container-selection')

	//attribution container dataset
	containerSelection.forEach((container, indexContainer) => {
		container.setAttribute('data-numselection', indexContainer)
		const containerData = container.getAttribute('data-numselection')

		let i = 0

		nextBtn.addEventListener('click', (e) => {
			if (i < 3) {
				i++

				containerSelection[i - 1].classList.remove('current-slide')
				containerSelection[i].classList.add('current-slide')

				console.log(i)
			} else {
				return
			}
		})

		previousBtn.addEventListener('click', (e) => {
			if (i > 0) {
				i--

				containerSelection[i + 1].classList.remove('current-slide')
				containerSelection[i].classList.add('current-slide')

				console.log(i)
			} else {
				return
			}
		})
	})
}

/***** FUNCTION PC CALL ******/
const appPC = () => {
	scrollBar()
	attributeFocusNav()
	selection()
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

//BLOG ANIMATION
const blogCarousel = () => {
	const argument = document.querySelectorAll('.argument')
	const dots = document.querySelectorAll('.btn')

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

//APP ANIMATION

const appOpen = () => {
	const iconPlus = document.querySelectorAll('.icon-plus')
	const appSelection = document.querySelectorAll('.app-selection')
	const titleSelection = document.querySelectorAll('.title-selection')

	iconPlus.forEach((icon, indexIcon) => {
		icon.setAttribute('data-numicon', indexIcon)

		icon.addEventListener('click', (e) => {
			let clickedIcon = e.target.dataset.numicon

			appSelection[clickedIcon].classList.toggle('open')

			iconPlus[clickedIcon].classList.toggle('open')

			titleSelection[clickedIcon].classList.toggle('open')
		})
	})
}

/***** FUNCTION MOBILE CALL ******/
const app = () => {
	let viewportWidth = window.innerWidth

	navMobile()

	if (viewportWidth <= 991) {
		blogCarousel()
		appOpen()
	}
}

app()
