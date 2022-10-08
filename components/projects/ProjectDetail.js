import styled from 'styled-components'
import {
	font,
	globalColor,
	H2,
	H4,
	pageMargin,
	Paragraph,
} from '../../styles/Styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import projects from '../../text/projects.json'

const ProjectDetail = ({ project }) => {
	console.log(project)
	return (
		<Container>
			<div className='textContainer'>
				<HeaderContainer>
					<div className='titleContainer'>
						<H2>{project.title}</H2>
						<a href={project.gitLink}>
							<GitHubIcon />
						</a>
					</div>
					<H4 className='categoryH4'>{project.category}</H4>
				</HeaderContainer>

				<div className='imgContainerMobile'>
					<Image
						src={'/images/picbeak_mobile_matchview.jpg'}
						alt={'image'}
						layout='fill'
						objectFit='cover'
						quality={100}
					/>
				</div>

				<TechStack>
					<H4>Tech</H4>
					<Paragraph>{project.tech.join(', ')}</Paragraph>
				</TechStack>

				<AboutSection>
					<H4>About the Project</H4>
					{project.longDesc.map((para, i) => (
						<Paragraph key={i}>
							{para}
							<br></br>
							<br></br>
						</Paragraph>
					))}
				</AboutSection>
			</div>
			<div className='imgContainerDesktop'>
				<Image
					src={'/images/picbeak_mobile_matchview.jpg'}
					alt={'image'}
					layout='fill'
					objectFit='cover'
					quality={100}
				/>
			</div>
		</Container>
	)
}

export async function getStaticProps({ params }) {
	const projectID = params.projectID
	const res = projects.find((project) => project.slug === projectID)
	return {
		props: {
			project: res[0],
		},
	}
}

const marginRight = '10vw'

const Container = styled.div`
	display: flex;
	position: relative;
	margin-top: 5%;
	margin-bottom: 5%;

	@media screen and (min-width: 600px) {
		flex-direction: row;
	}

	.imgContainerDesktop {
		display: none;

		@media screen and (min-width: 600px) {
			display: block;
			width: 60%;
			height: 30rem;
			position: relative;
			top: 0;
			left: 0;
			border-radius: 40px 0px 0px 40px;
			overflow: hidden;
		}
	}

	.textContainer {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 600px) {
			width: 60%;
		}

		h4 {
			margin-bottom: 2%;
		}

		.categoryH4 {
			margin-bottom: 0;
		}

		.imgContainerMobile {
			width: 100%;
			height: 16rem;
			position: relative;
			top: 0;
			left: 0;
			border-radius: 40px 0px 0px 40px;
			margin-left: 10%;
			overflow: hidden;

			@media screen and (min-width: 600px) {
				display: none;
			}
		}
	}
`

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: ${pageMargin};
	margin-right: ${marginRight};
	margin-bottom: 4%;

	.titleContainer {
		display: flex;
		align-items: center;
		gap: 8px;

		a svg {
			color: ${globalColor.darkText};
		}
	}
`

const TechStack = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${pageMargin};
	margin-top: 4%;
	margin-bottom: 4%;

	@media screen and (min-width: 600px) {
		margin-top: 0;
	}
`

const AboutSection = styled.div`
	margin: ${pageMargin};
`
export default ProjectDetail
