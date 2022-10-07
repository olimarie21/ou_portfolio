import styled from 'styled-components'
import { globalColor, font } from '../../styles/Styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const MobileMenu = () => {
	return (
		<Container>
			{/* Temporarily remove nav items */}
			{/* <MainMenu>
				<MainItem>
					<a href='#'>Projects</a>
				</MainItem>
				<MainItem>
					<a href='#'>About</a>
				</MainItem>
			</MainMenu> */}
			<SocialIcons>
				<ListItem>
					<a
						href='mailto:olivia.underdah@gmail.com'
						target='_blank'
						rel='noreferrer'>
						<EmailIcon />
					</a>
				</ListItem>
				<ListItem>
					<a
						href='https://github.com/olimarie21'
						target='_blank'
						rel='noreferrer'>
						<GitHubIcon />
					</a>
				</ListItem>
				<ListItem>
					<a
						href='https://www.linkedin.com/in/oliviaunderdah/'
						target='_blank'
						rel='noreferrer'>
						<LinkedInIcon />
					</a>
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
	flex-direction: column;
	gap: 62px;
	margin: 0;
	padding: 0;
`

const ListItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
	// font-size: 16px;
	font-family: ${font};
	font-weight: 600;
	color: ${globalColor.primary};
	// display: flex;

	a {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			height: 40px;
			width: 40px;
		}
	}
`
export default MobileMenu
