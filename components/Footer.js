import styled from 'styled-components'
import { globalColor, H4_light, font } from '../styles/Styles'

const Footer = () => {
	return (
		<Container>
			<H4_light className={'text'}>Get in touch</H4_light>
		</Container>
	)
}

export default Footer

const Container = styled.div`
	background: url('/images/footer.svg') no-repeat;
	background-size: cover;
	width: 100vw;
	height: 150px;
	margin-top: 5%;
	position: relative;

	.text {
		position: absolute;
		top: 60%;
		left: 10vw;
	}
`
