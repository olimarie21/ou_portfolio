import Footer from '../components/Footer'
import Header from '../components/header/Header'
import styled from 'styled-components'
import { H2, Paragraph, globalColor } from '../styles/Styles'
import JobDetail from '../components/Experience/JobDetail'
import experience from '../text/experience.json'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const Experience = () => {
	return (
		<Container>
			<Header />
			<Main>
				<H2>Experience</H2>
				<div className='experienceIntro'>
					<Paragraph>
						I&apos;m a full-stack developer with a passion for problem solving.
						My experience in marketing and design has given me an eye for
						detail, a collaborative mindset, and the ability to think creatively
						about technical solutions. I am an adaptable self-starter and am
						focused on developing high-quality, efficient, and streamlined web
						and mobile applications. I&apos;m ready to take on my next challenge
						in the tech world!
					</Paragraph>
					<Paragraph className='techStack'>
						<strong>
							Tech stack <ArrowForwardRoundedIcon />
						</strong>
						JavaScript | React | React Native | REST APIs | GraphQL | Node.js |
						Express.js | MongoDB | Next.js | Java
					</Paragraph>
				</div>

				<div className='jobs'>
					{experience.map((item, i) => (
						<JobDetail key={i} experience={item} />
					))}
				</div>
			</Main>
			<Footer />
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
`

const Main = styled.div`
	margin: 4vh 10vw;
	padding: 0;
	display: flex;
	flex-direction: column;

	.experienceIntro,
	.jobs {
		display: flex;
		flex-direction: column;
		background: ${globalColor.primaryLight};
		height: 100%;
		padding: 1.5rem;
		border-radius: 24px;
		margin: 2vh 0 1vh 0;
		align-items: start;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

		.techStack {
			display: flex;
			flex-direction: column;
			align-items: start;
			margin-top: 12px;

			strong {
				display: flex;
				align-items: center;

				svg {
					color: ${globalColor.darkText};
				}
			}

			@media screen and (min-width: 1200px) {
				flex-direction: row;
				align-items: center;
			}
		}
	}

	.jobs {
		background: white;
		padding-top: 0.5rem;
	}
`

export default Experience
