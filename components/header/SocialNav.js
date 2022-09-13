import Image from 'next/image'
import styled from 'styled-components'
import { globalColor, H1, font } from '../../styles/Styles'

const SocialNav = () => {
	return (
		<SocialIcons>
			<ListItem>
				<Image
					src={'/images/Vectoremail.svg'}
					height={20}
					width={20}
					alt='LinkedIn Logo'
				/>
			</ListItem>
			<ListItem>
				<Image
					src={'/images/Github-Mark.svg'}
					height={20}
					width={20}
					alt='LinkedIn Logo'
				/>
			</ListItem>
			<ListItem>
				<div className='linkedIn'>
					<Image
						src={'/images/linkedin.svg'}
						height={20}
						width={20}
						alt='LinkedIn Logo'
					/>
				</div>
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

	.linkedIn {
		background-color: ${globalColor.primary};
		border-radius: 8px;
		height: 20px;
		width: 20px;
	}
`

export default SocialNav
