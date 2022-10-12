import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import ProjectDetail from '../components/projects/ProjectDetail'
import projects from '../text/projects.json'

export default function Project({ project }) {
	return (
		<Container>
			<Head>
				<title>Olivia Underdah</title>
				<meta name='description' content='Full-stack developer' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header />
			<Main>
				<ProjectDetail project={project} />
			</Main>
			<Footer />
		</Container>
	)
}

export async function getStaticPaths() {
	const pages = projects

	const paths = pages.map((project) => {
		const projectID = project.slug
		return {
			params: {
				projectID,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const projectID = params.projectID
	const res = projects.find((project) => project.slug === projectID)
	return {
		props: {
			project: res,
		},
	}
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
