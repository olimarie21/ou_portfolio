import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Header from '../components/header/Header'
import ProjectItem from '../components/ProjectItem'

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
				<ProjectItem />
			</Main>
		</Container>
	)
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
`

const Main = styled.main`
	margin: 0;
	padding: 0;
`
