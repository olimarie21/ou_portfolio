import react from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import ProjectItem from './ProjectItem'
import { globalColor, H2, font } from '../styles/Styles'
import projects from '../text/projects.json'

const ProjectSlider = (props) => {
	console.log(projects)
	return (
		<Container>
			<H2 className='projectHeader'>Projects</H2>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={36}
				centeredSlides={true}
				loop={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				scrollbar={{ draggable: true }}>
				{projects.map((project, i) => (
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
		margin-left: 34px;
		text-align: left;
		margin-top: 50px;
		margin-bottom: 36px;

		@media screen and (min-width: 750px) {
			margin-left: 10vw;
		}
	}
`

export default ProjectSlider
