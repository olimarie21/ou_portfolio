import Image from 'next/image'
import styled from 'styled-components'
import SocialNav from './SocialNav'
import { globalColor, font } from '../../styles/Styles'

const MainNav = () => {
	return (
		<Nav>
			<Container>
				{/* Temporarily remove nav items */}
				{/* <MainMenu>
					<ListItem>
						<a href='#'>Projects</a>
					</ListItem>
					<ListItem>
						<a href='#'>About</a>
					</ListItem>
				</MainMenu> */}

				<SocialNav />
			</Container>
			<div className='accent'>
				<Image
					src={'/images/accent_profile.svg'}
					alt='accent'
					width={220}
					height={220}
				/>
			</div>
		</Nav>
	)
}

const Nav = styled.div`
	width: 100vw;
	position: absolute;
	right: 0;
	top: 0;

	.accent {
		display: none;
		position: absolute;
		right: 0;
		top: 0;

		@media screen and (min-width: 1200px) {
			display: block;
		}
	}
`

const Container = styled.nav`
	display: none;
	@media screen and (min-width: 1200px) {
		display: flex;
		justify-content: end;
		gap: 20px;
		align-items: start;
		position: absolute;
		top: 0;
		right: 12vw;
		padding-top: 8vh;
	}
`

const MainMenu = styled.ul`
	display: flex;
	gap: 32px;
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
	font-weight: 500;
	color: ${globalColor.primary};
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		font-weight: 600;
		transform: scale(1.1);
	}
`

export default MainNav
