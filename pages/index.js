import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import LandingPage from '../components/LandingPage'
import ProjectSlider from '../components/projects/ProjectSlider'
import TechContainer from '../components/techDisplay/TechContainer'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Olivia Underdah</title>
				<meta name='description' content='Full-stack developer' />
				<link rel='icon' href='/favicon.ico' />
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
