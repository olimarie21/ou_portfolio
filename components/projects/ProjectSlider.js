import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay } from 'swiper'
import ProjectItem from './ProjectItem'
import {
	font,
	globalColor,
	H2,
	pageMargin,
	Paragraph,
} from '../../styles/Styles'
import FilterListOffIcon from '@mui/icons-material/FilterListOff'

const ProjectSlider = (props) => {
	const { projects, tech, setProjects, techItemSelected, clearFilter } = props
	SwiperCore.use([Autoplay])

	return (
		<Container>
			<HeaderContainer>
				<H2 className='projectHeader'>
					Projects{' '}
					{techItemSelected ? (
						<BtnClearFilter onClick={clearFilter}>
							<FilterListOffIcon />
						</BtnClearFilter>
					) : null}
				</H2>
				{techItemSelected ? (
					<Paragraph>
						<strong>Tech:</strong> {tech}
					</Paragraph>
				) : null}
			</HeaderContainer>
			<Swiper
				centeredSlides={true}
				spaceBetween={44}
				// modules={[FreeMode]}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 'auto',
					},
					450: {
						slidesPerView: 'auto',
						centeredSlides: false,
						autoplay: false,
					},
					1000: {
						slidesPerView: 'auto',
						centeredSlides: false,
						autoplay: false,
					},
					1600: {
						slidesPerView: 4,
						centeredSlides: false,
						autoplay: false,
					},
				}}>
				{projects.map((project, i) => (
					<SwiperSlide key={i}>
						<ProjectItem
							title={project.title}
							gitLink={project.gitLink}
							shortDesc={project.shortDesc}
							tech={project.tech}
							slug={project.slug}
							imgSrc={project.image}
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

	@media screen and (min-width: 450px) {
		.swiper-slide:first-child {
			margin-left: 10vw;
		}

		.swiper-slide:last-of-type {
			margin-right: 10%;
		}
	}

	.projectHeader {
		text-align: left;
		display: flex;
		align-items: center;
		gap: 20px;
	}
`
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: ${pageMargin};
	margin-top: 50px;

	p {
		margin-top: 4px;
	}
`

const BtnClearFilter = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${globalColor.primaryLight};
	border: none;
	color: ${globalColor.darkText};
	width: 36px;
	height: 36px;
	border-radius: 100px;
	font-family: ${font};
	font-weight: 500;
	line-height: 16px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	:hover {
		color: ${globalColor.lightText};
		background: ${globalColor.primary};
	}
`

export default ProjectSlider
