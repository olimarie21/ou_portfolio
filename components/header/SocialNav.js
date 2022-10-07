import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const SocialNav = () => {
	return (
		<SocialIcons>
			<ListItem>
				<EmailIcon />
			</ListItem>
			<ListItem>
				<GitHubIcon />
			</ListItem>
			<ListItem>
				<LinkedInIcon />
			</ListItem>
		</SocialIcons>
	)
}

const SocialIcons = styled.ul`
	display: flex;
	gap: 16px;
	height: 30px;
	margin: 0;
	padding: 0 0 0 16px;
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

export default SocialNav
