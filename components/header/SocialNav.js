import styled from 'styled-components'
import { globalColor, font } from '../../styles/Styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const SocialNav = () => {
	return (
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
	)
}

const SocialIcons = styled.ul`
	display: flex;
	gap: 24px;
	height: 30px;
	margin: 0;
	padding: 0 0 0 16px;
	z-index: 10;
`

const ListItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
	// font-size: 20px;
	font-family: ${font};
	font-weight: 600;
	color: ${globalColor.primary};
	display: flex;

	a {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			height: 30px;
			width: 30px;
		}

		:hover {
			transform: scale(1.1);
		}
	}
`

export default SocialNav
