import Image from 'next/image'
import styled from 'styled-components'
import { globalColor, H2, H3, H4, Paragraph, font } from '../../styles/Styles'

const ProjectItem = (props) => {
	const { title, gitLink, shortDesc, tech } = props

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
			<DescContainer>
				<div className='titleContainer'>
					<H3>{title}</H3>

					<a href={gitLink}>
						<Image
							src={'/images/Github-Mark.svg'}
							height={20}
							width={20}
							alt='Github Logo'
						/>
					</a>
				</div>
				<Paragraph>{shortDesc}</Paragraph>

				<div className='projectDetailDisplay'>
					<H4>Tech Stack</H4>
					<p>{tech.join(', ')}</p>

					<button onClick={() => console.log('click')}>
						Ready to learn more?
					</button>
				</div>
			</DescContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	height: 342px;
	min-width: 316px;
	position: relative;
	margin: 0;
	border-radius: 90px;
`

const BGImg = styled.div`
	border-radius: 90px 90px 0px 0px;
	position: relative;
	height: 90%;
	width: 100%;
	overflow: hidden;
`

const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	max-width: 100%;
	background: ${globalColor.lightText};
	border-radius: 40px;
	position: absolute;
	bottom: 0;
	padding: 12px 24px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;

	.projectDetailDisplay {
		display: none;

		p {
			font-size: 12px;
			font-weight: 400;
			font-family: ${font};
			color: ${globalColor.darkText};
		}

		button {
			border: none;
			background: ${globalColor.primary};
			color: ${globalColor.lightText};
			font-size: 14px;
			font-weight: 600;
			font-family: ${font};
			height: 40px;
			border-radius: 18px;
			margin-bottom: 12%;
			cursor: pointer;
		}
	}

	:hover {
		transition: 0.5s ease-in-out;
		height: 100%;
		border-radius: 90px 90px 40px 40px;
		padding: 0 12%;
		// border: 0.5px solid ${globalColor.primary};

		.projectDetailDisplay {
			display: flex;
			flex-direction: column;
			margin-top: 10%;

			H4 {
				margin-bottom: 8px;
				padding: 0;
			}

			p {
				margin: 0 0 12% 0;
				padding: 0;
			}
		}

		.titleContainer {
			margin-top: 62px;
		}
	}

	.titleContainer {
		display: flex;
		gap: 12px;
		justify-content: start;
		align-items: center;
	}
`

export default ProjectItem
