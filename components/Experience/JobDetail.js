import styled from 'styled-components'
import { font, H2, H3, H4, Paragraph, globalColor } from '../../styles/Styles'

const JobDetail = (props) => {
	const { experience } = props
	const { title, company, location, dates, description } = experience

	return (
		<Job>
			<H4>{title}</H4>
			<Paragraph>
				{company} | <i>{location}</i>
			</Paragraph>
			<p id='date'>{dates}</p>
			<Description>
				{description.map((item, i) => (
					<li key={i}>
						<span id='listMarker'></span>
						{item}
					</li>
				))}
			</Description>
		</Job>
	)
}

const Job = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2vh 0 1vh 0;

	h4 {
		color: ${globalColor.primary};
	}

	#date {
		font: 12px ${font};
		color: ${globalColor.darkText};
		margin: 4px 0;
		padding: 0;
	}
`

const Description = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li {
		color: ${globalColor.darkText};
		font: 14px ${font};
		margin: 6px 0;
		display: flex;

		#listMarker {
			min-width: 3px;
			margin-right: 12px;
			background: ${globalColor.primaryLight};
			border-radius: 4px;
		}
	}
`

export default JobDetail
