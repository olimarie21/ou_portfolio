import { useState } from 'react'
import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'
import MainNav from './MainNav'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const openMenu = () => {
		const hamburger = document.querySelector('.button')
		hamburger.classList.toggle('is-opened')

		setShowMenu(!showMenu)
	}

	return (
		<Heading>
			<MainNav />
			<MobileIcon onClick={openMenu} className={'button'}>
				<svg className='hamburger'>
					<line
						strokeLinecap='round'
						x1='0'
						y1='50%'
						x2='100%'
						y2='50%'
						className='hamburger-bar hamburger-bar-top'
					/>
					<line
						strokeLinecap='round'
						x1='0'
						y1='50%'
						x2='100%'
						y2='50%'
						className='hamburger-bar hamburger-bar-mid'
					/>
					<line
						strokeLinecap='round'
						x1='0'
						y1='50%'
						x2='100%'
						y2='50%'
						className='hamburger-bar hamburger-bar-bottom'
					/>
				</svg>
			</MobileIcon>
			<TextContainer>
				<Link href={'/'}>
					<Text>
						<H1>Hi, I&apos;m Olivia.</H1>
						<Headline>full-stack developer</Headline>
					</Text>
				</Link>
			</TextContainer>
			{showMenu ? <MobileMenu /> : null}
		</Heading>
	)
}

const Heading = styled.header`
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
	height: 160px;

	@media screen and (min-width: 750px) {
		height: 274px;
	}

	.is-opened .hamburger .hamburger-bar-top {
		transform: rotate(45deg);
	}

	.is-opened .hamburger .hamburger-bar-mid {
		transform: scaleX(0.1);
	}

	.is-opened .hamburger .hamburger-bar-bottom {
		transform: rotate(-45deg);
	}
`

const MobileIcon = styled.button`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 5vh;
	right: 8vw;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
	z-index: 105;

	.hamburger {
		width: 30px;
		height: 30px;
		cursor: pointer;

		.hamburger-bar {
			transition-property: transform;
			transition-duration: 0.3s;
			transform-origin: center;
			stroke: ${globalColor.primary};
			stroke-width: 10%;
		}

		.hamburger-bar-top {
			transform: translateY(-40%);
		}

		.hamburger-bar-bottom {
			transform: translateY(40%);
		}
	}

	@media screen and (min-width: 750px) {
		top: 8vh;
		right: 12vh;
	}

	@media screen and (min-width: 1200px) {
		display: none;
	}
`

const TextContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background: url('/images/primary_bg_mobile.svg') no-repeat;
	background-size: contain;
	height: 26vh;
	width: 300px;
	min-width: 300px;
	min-height: 156px;
	cursor: pointer;

	@media screen and (min-width: 750px) {
		background: url('/images/primary_bg.svg') no-repeat;
		background-size: contain;
		min-width: 32vw;
		height: 32vh;
		min-width: 600px;
	}
`

const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	margin-left: 10vw;
	text-align: left;
	margin-top: 5vh;

	@media screen and (min-width: 750px) {
		margin-top: 8vh;
		margin-left: 10vw;
	}
`

const Headline = styled.p`
	font-weight: 300;
	font-size: 14px;
	color: ${globalColor.lightText};
	margin: 0;
	padding: 0;
	font-family: ${font};

	@media screen and (min-width: 750px) {
		font-size: 16px;
	}
`

export default Header
