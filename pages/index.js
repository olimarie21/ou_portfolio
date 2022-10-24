import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import LandingPage from '../components/LandingPage'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Olivia Underdah</title>
				<link rel='icon' href='/favicon.png' />
				<meta name='title' property='og:title' content='Olivia Underdah'></meta>
				<meta property='og:url' content='www.oliviaunderdah.com' />
				<meta property='og:type' content='Website' />
				<meta name='author' content='Olivia Underdah'></meta>
				<meta
					property='og:description'
					content='Vancouver based Full-stack Developer with a passion for problem solving.'
				/>
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
				<LandingPage />
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

const Main = styled.main`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
`
