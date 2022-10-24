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
				<meta name='description' content='Full-stack developer' />
				<link rel='icon' href='/favicon.png' />
				<meta property='og:url' content='www.oliviaunderdah.com' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Olivia Underdah' />
				<meta
					property='og:description'
					content='Vancouver based Full-stack Developer'
				/>
				<meta property='og:image' content='/sitePreviewOU.png' />
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
