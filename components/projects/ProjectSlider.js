import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import ProjectItem from './ProjectItem'
import { globalColor, H2, pageMargin } from '../../styles/Styles'
import projects from '../../text/projects.json'
import { useState, useEffect } from 'react'

const ProjectSlider = () => {
	const [projectDisplay, setProjects] = useState(projects)
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	return (
		<Container>
			<H2 className='projectHeader'>Projects</H2>
			{domLoaded && (
				<Swiper
					slidesPerView={1}
					breakpoints={{
						450: {
							slidesPerView: 'auto',
						},
						1600: {
							slidesPerView: 4.5,
						},
					}}
					spaceBetween={36}
					centeredSlides={true}
					loop={true}
					modules={[Navigation]}>
					{projectDisplay.map((project, i) => (
						<SwiperSlide key={i}>
							<ProjectItem
								title={project.title}
								gitLink={project.gitLink}
								shortDesc={project.shortDesc}
								tech={project.tech}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Container>
	)
}

const Container = styled.div`
	.swiper {
		overflow: hidden;
		height: 420px;
	}

	.swiper-slide {
		flex-shrink: 1;
	}

	.projectHeader {
		text-align: left;
		margin: ${pageMargin};
		margin-top: 50px;
	}
`

export default ProjectSlider
