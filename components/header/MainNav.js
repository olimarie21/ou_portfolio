import Image from 'next/image'
import styled from 'styled-components'
import SocialNav from './SocialNav'
import { globalColor, H1, font } from '../../styles/Styles'

const MainNav = () => {
	return (
		<Nav>
			<ImageContainer>
				<HeaderImg src={'/images/secondary_bg.svg'} alt='background image' />
			</ImageContainer>
			<Container>
				<MainMenu>
					<ListItem>
						<a href='#'>Projects</a>
					</ListItem>
					<ListItem>
						<a href='#'>About</a>
					</ListItem>
				</MainMenu>

				<SocialNav />
			</Container>
		</Nav>
	)
}

const HeaderImg = styled.img`
	width: 100vw;
	object-fit: cover;
`

const ImageContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	margin: 0;
	padding: 0;
`

const Nav = styled.div`
	width: 100vw;
	position: absolute;
	right: 0;
	top: 0;
`

const Container = styled.nav`
	display: none;
	@media screen and (min-width: 1200px) {
		display: flex;
		justify-content: end;
		gap: 16px;
		align-items: start;
		position: absolute;
		top: 0;
		right: 168px;
		padding-top: 64px;
	}
`

const MainMenu = styled.ul`
	display: flex;
	gap: 12px;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	margin: 0;
`

const ListItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 16px;
	font-family: ${font};
	font-weight: 600;
	color: ${globalColor.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`

export default MainNav
