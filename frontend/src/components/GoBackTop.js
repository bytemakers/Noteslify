import React, { useEffect, useState } from 'react'

const GoBackTop = () => {
	const [showBackToTopBtn, setShowBackToTopBtn] = useState(false)

	const handleShowBackToTopBtn = () => {
		setShowBackToTopBtn(window.pageYOffset > 600)
	}

	const handleScrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		window.addEventListener('scroll', handleShowBackToTopBtn)

		return () => window.removeEventListener('scroll', handleShowBackToTopBtn)
	}, [])

	return (
		<button
			className={showBackToTopBtn ? 'goTopBtn' : 'goTopBtnHidden'}
			type='button'
			onClick={handleScrollUp}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				width='24'
				height='24'>
				<path fill='none' d='M0 0h24v24H0z' />
				<path
					d='M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z'
					fill='currentColor'
				/>
			</svg>
		</button>
	)
}
export default GoBackTop
