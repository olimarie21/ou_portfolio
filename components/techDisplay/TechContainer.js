import styled from 'styled-components'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import TechItem from './TechItem'
import { H2, pageMargin } from '../../styles/Styles'
import 'swiper/css'
import 'swiper/css/navigation'
import { useState, useEffect } from 'react'

const TechContainer = (props) => {
	const { icons, onClick } = props
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	return (
		<Container>
			<H2 className='projectHeader'>Filter by Tech</H2>
			<List>
				{domLoaded && (
					<Swiper
						slidesPerView={'auto'}
						spaceBetween={36}
						loop={true}
						loopedSlides={10}
						modules={[Pagination]}>
						{icons.map((icon, i) => (
							<SwiperSlide key={i}>
								<TechItem
									icon={icon.link}
									alt={icon.alt}
									onClick={() => onClick(icon.alt)}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</List>
		</Container>
	)
}

const Container = styled.div`
	span {
		font-size: 12px;
		font-weight: 500;
	}

	.projectHeader {
		margin: ${pageMargin};
		text-align: left;
		margin-top: 50px;
		margin-bottom: 36px;
	}
`

const List = styled.div`
	.swiper {
		overflow: hidden;
	}

	margin: 0 0 0 10%;
	.swiper-wrapper {
	}
	.swiper-slide {
		display: flex;
		flex-shrink: 1;
		justify-content: center;
		align-items: center;
		height: 7rem;
		margin: 0;
	}

	display: flex;
	gap: 2%;
	justify-content: space-between;
`

export default TechContainer
