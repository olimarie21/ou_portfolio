import Footer from '../components/Footer'
import Head from 'next/head'
import Header from '../components/header/Header'
import styled from 'styled-components'
import { H2, Paragraph, globalColor } from '../styles/Styles'
import JobDetail from '../components/Experience/JobDetail'
import experience from '../public/data/experience.json'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const Experience = () => {
	return (
		<Container>
			<Head>
				<title>Olivia Underdah - Professional Experience</title>
				<link rel='icon' href='/favicon.png' />
				<meta name='title' property='og:title' content='Olivia Underdah'></meta>
				<meta property='og:url' content='www.oliviaunderdah.com' />
				<meta property='og:type' content='Website' />
				<meta name='author' content='Olivia Underdah'></meta>
				<meta
					name='image'
					property='og:image'
					content='https://res.cloudinary.com/scave2021/image/upload/v1666632904/portfolio/ou_portfolio_desktop_wbciok.png'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
			</Head>
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
						<span>
							Tech stack <ArrowForwardRoundedIcon />
						</span>
						JavaScript | React | React Native | REST APIs | GraphQL | Node.js |
						Express.js | MongoDB | Next.js | Java | WordPress
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

			span {
				display: flex;
				align-items: center;
				font-weight: bold;

				svg {
					color: ${globalColor.darkText};
					height: 18px;
					width: 18px;
					padding: 0 4px;
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
