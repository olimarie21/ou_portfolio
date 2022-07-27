import react from 'react'
import styled from 'styled-components'
import { globalColor, H1, font } from '../styles/Styles'

const Header = () => {
	return (
		<Heading>
			<H1>Hi, I&apos;m Olivia.</H1>
			<Headline>full-stack developer</Headline>
		</Heading>
	)
}

const Heading = styled.header`
	display: flex;
	background: url('/images/mobileHeaderOverlay.svg') no-repeat center center;
	background-size: auto;
	background-color: ${globalColor.primary};
	border-radius: 0px 0px 18px 18px;
	height: 200px;
	width: 90%;
	max-width: 600px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media screen and (min-width: 400px) {
		background-size: cover;
	}
	@media screen and (min-width: 800px) {
		max-width: 1000px;
	}
`

const Headline = styled.p`
	font-weight: 300;
	font-size: 16px;
	line-height: 24px;
	color: ${globalColor.lightText};
	margin: 0;
	margin-top: 4px;
	font-family: ${font};
`

export default Header
