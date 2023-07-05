const headerEl = document.querySelector('.header')

const isScrolling = () => {
	const windowPosition = window.scrollY > 50
	headerEl.classList.toggle('header--active', windowPosition)
}

window.addEventListener('scroll', isScrolling)

const bodyEl = document.body
			const barEl = document.querySelector('.bar')
			const updateBar = () => {
				let scrollPos =
					(window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100
				barEl.style.width = `${scrollPos}%`
				requestAnimationFrame(updateBar)
			}
			updateBar()