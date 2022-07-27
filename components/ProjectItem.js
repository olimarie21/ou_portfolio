import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { globalColor, H2, H3, H4, Paragraph, font } from '../styles/Styles'

const ProjectItem = () => {
	return (
		<Container>
			<BGImg>
				<Image
					src={'/images/picbeak_mobile_matchview.jpg'}
					alt={'image'}
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</BGImg>
			<DescContainter>
				<H3>Courte</H3>
				<Paragraph>
					A mobile application that facilitates the use and sharing of tennis
					courts.
				</Paragraph>
			</DescContainter>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	height: 342px;
	width: 316px;
	border-radius: 18px;
	position: relative;
	margin-top: 20px;
`

const BGImg = styled.div`
	border-radius: 18px;
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
`

const DescContainter = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	max-width: 100%;
	background: ${globalColor.lightText};
	border-radius: 18px;
	position: absolute;
	bottom: 0;
	padding: 12px 24px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default ProjectItem
