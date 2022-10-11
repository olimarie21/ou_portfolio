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
	return (
		<Container>
			<div className='textContainer'>
				<HeaderContainer>
					<div className='titleContainer'>
						{project.siteLink != null ? (
							<a href={project.siteLink} target='_blank' rel='noreferrer'>
								<H2>{project.title}</H2>
							</a>
						) : (
							<H2>{project.title}</H2>
						)}

						<a href={project.gitLink} target='_blank' rel='noreferrer'>
							<GitHubIcon />
						</a>
					</div>
					<H4 className='categoryH4'>{project.category}</H4>
					{project.proposal ? (
						<button className='proposalBtn'>View proposal</button>
					) : null}
				</HeaderContainer>

				<div className='imgContainerMobile'>
					<Image
						src={project.image.length > 1 ? project.image[1] : project.image[0]}
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

const Container = styled.div`
	position: relative;
	margin-top: 5%;

	.textContainer {
		display: grid;
		grid-template-rows: auto auto auto auto;
		grid-template-columns: 58% 42%;

		@media screen and (min-width: 1300px) {
			grid-template-columns: 45% 55%;
		}

		h4 {
			margin-bottom: 2%;
		}

		.categoryH4 {
			margin-bottom: 0;
		}

		.imgContainerMobile {
			grid-column: span 2;
			height: 16rem;
			position: relative;
			top: 0;
			left: 0;
			border-radius: 0px 40px 40px 0px;
			margin-right: 10%;
			overflow: hidden;

			@media screen and (min-width: 600px) {
				height: 20rem;
			}

			@media screen and (min-width: 1100px) {
				grid-column: 2 / 3;
				grid-row: span 4;
				margin-right: 0;
				height: 100%;
				border-radius: 40px 0px 0px 40px;
			}
		}
	}
`

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: ${pageMargin};
	margin-bottom: 4%;
	grid-column: span 2;

	.proposalBtn {
		border: none;
		font-weight: 500;
		color: ${globalColor.darkText};
		font-family: ${font};
		background: ${globalColor.primaryLight};
		border-radius: 12px;
		padding: 8px;
		margin-top: 2%;
		box-shadow: 0px 3px 3px rgb(0 0 0 / 15%);
		cursor: pointer;

		:hover {
			background: ${globalColor.primary};
			color: ${globalColor.lightText};
		}
	}

	@media screen and (min-width: 1100px) {
		margin-right: 5%;
		grid-column: span 1;
	}

	.titleContainer {
		display: flex;
		align-items: center;
		gap: 8px;

		a h2:hover {
			color: ${globalColor.primary};
		}

		a svg {
			color: ${globalColor.darkText};

			:hover {
				color: ${globalColor.primary};
				transform: scale(1.1);
			}
		}
	}
`

const TechStack = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${pageMargin};
	margin-top: 4%;
	margin-bottom: 4%;
	grid-column: span 2;

	@media screen and (min-width: 1100px) {
		margin-right: 6%;
		grid-column: span 1;
		margin-top: 0;
	}
`

const AboutSection = styled.div`
	grid-column: span 2;
	margin: ${pageMargin};
	margin-bottom: 0;

	@media screen and (min-width: 1100px) {
		grid-column: span 1;
		margin-right: 6%;
	}
`
export default ProjectDetail
