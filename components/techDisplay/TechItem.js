import Image from 'next/image'
import styled from 'styled-components'
import { globalColor } from '../../styles/Styles'

const TechItem = (props) => {
	const { icon, alt, onClick } = props

	return (
		<Container>
			<ImgContainer onClick={onClick}>
				<Image
					src={icon}
					layout='fill'
					objectFit='contain'
					quality={100}
					alt={alt}
				/>
			</ImgContainer>
		</Container>
	)
}

const Container = styled.button`
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${globalColor.primaryLight};
	border-radius: 100px;
	height: 5rem;
	width: 5rem;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	:hover {
		transform: scale(1.2);
	}

	@media screen and (max-width: 450px) {
		:hover {
			background: ${globalColor.lightText};
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
		}
	}
`

const ImgContainer = styled.div`
	position: relative;
	margin: 5%;
	height: 50%;
	width: 80%;
`

export default TechItem
