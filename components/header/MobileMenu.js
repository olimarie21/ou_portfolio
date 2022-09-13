import Image from 'next/image'
import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'
import SocialNav from './SocialNav'

const MobileMenu = () => {
	return (
		<Container>
			<MainMenu>
				<MainItem>
					<a href='#'>Projects</a>
				</MainItem>
				<MainItem>
					<a href='#'>About</a>
				</MainItem>
			</MainMenu>
			<SocialIcons>
				<ListItem>
					<Image
						src={'/images/Vectoremail.svg'}
						height={40}
						width={40}
						alt='LinkedIn Logo'
					/>
				</ListItem>
				<ListItem>
					<Image
						src={'/images/Github-Mark.svg'}
						height={40}
						width={40}
						alt='LinkedIn Logo'
					/>
				</ListItem>
				<ListItem>
					<div className='linkedIn'>
						<Image
							src={'/images/linkedin.svg'}
							height={40}
							width={40}
							alt='LinkedIn Logo'
						/>
					</div>
				</ListItem>
			</SocialIcons>
		</Container>
	)
}

const Container = styled.nav`
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.95);
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	right: 0;
	gap: 40px;
`

const MainMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 32px;
	align-items: center;
	margin: 0;
	padding: 0;
`

const MainItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 22px;
	font-family: ${font};
	font-weight: 500;
	color: ${globalColor.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`

const SocialIcons = styled.ul`
	display: flex;
	gap: 32px;
	margin: 0;
	padding: 0;
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

	.linkedIn {
		background-color: ${globalColor.primary};
		border-radius: 8px;
		height: 40px;
		width: 40px;
	}
`
export default MobileMenu
