import Image from 'next/image'
import react from 'react'
import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'
import MainNav from './MainNav'

const Header = () => {
	return (
		<Heading>
			<MainNav />
			<MobileIcon>
				<Image
					src='/images/hamburger_menu.svg'
					width={30}
					height={30}
					alt={'Menu Icon'}
				/>
			</MobileIcon>
			<TextContainer>
				<Text>
					<H1>Hi, I&apos;m Olivia.</H1>
					<Headline>full-stack developer</Headline>
				</Text>
			</TextContainer>
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
`

const MobileIcon = styled.div`
	position: absolute;
	top: 5vh;
	right: 34px;

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
	margin-left: 34px;
	text-align: left;
	margin-top: 38px;

	@media screen and (min-width: 750px) {
		margin-top: 64px;
		margin-left: 150px;
	}
`

const Headline = styled.p`
	font-weight: 300;
	font-size: 14px;
	// line-height: 24px;
	color: ${globalColor.lightText};
	margin: 0;
	margin-top: 0px;
	padding: 0;
	font-family: ${font};

	@media screen and (min-width: 750px) {
		font-size: 16px;
	}
`

export default Header
