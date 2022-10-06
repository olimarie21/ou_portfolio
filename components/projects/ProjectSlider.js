import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
import ProjectItem from './ProjectItem'
import { globalColor, H2, pageMargin } from '../../styles/Styles'

const ProjectSlider = (props) => {
	const { projects, setProjects, techItemSelected } = props

	return (
		<Container>
			<H2 className='projectHeader'>
				Projects {techItemSelected ? <button>clear filter</button> : null}
			</H2>
			<Swiper
				slidesPerView={1}
				slidesOffsetBefore={'30%'}
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
				// loop={true}
				modules={[Navigation]}>
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
	span {
		font-size: 12px;
		font-weight: 500;
	}
	.swiper {
		overflow: hidden;
		height: 420px;
	}

	.swiper-slide {
		flex-shrink: 1;
		max-width: 316px;
	}

	.projectHeader {
		text-align: left;
		margin: ${pageMargin};
		margin-top: 50px;
	}
`

export default ProjectSlider
