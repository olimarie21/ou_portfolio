import Image from 'next/image'
import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'

const SocialNav = () => {
	return (
		<SocialIcons>
			<ListItem>
				<Image
					src={'/images/linkedin.svg'}
					height={20}
					width={20}
					alt='LinkedIn Logo'
				/>
			</ListItem>
			<ListItem>
				<Image
					src={'/images/linkedin.svg'}
					height={20}
					width={20}
					alt='LinkedIn Logo'
				/>
			</ListItem>
			<ListItem>
				<Image
					src={'/images/linkedin.svg'}
					height={20}
					width={20}
					alt='LinkedIn Logo'
				/>
			</ListItem>
		</SocialIcons>
	)
}

const SocialIcons = styled.ul`
	display: flex;
	gap: 8px;
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

export default SocialNav
