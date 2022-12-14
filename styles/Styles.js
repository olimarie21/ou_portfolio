import styled from 'styled-components'

export const globalColor = {
	primary: 'rgba(4, 88, 94, 1)',
	darkText: 'rgba(63, 63, 63, 1)',
	lightText: 'rgba(255, 255, 255, 1)',
	primaryLight: 'rgba(221, 245, 246, 1)',
}

export const font = 'Poppins, sans-serif'

export const pageMargin = '0 10vw 5vh 10vw'

export const H1 = styled.h1`
	font-weight: 900;
	color: ${globalColor.lightText};
	margin: 0;
	padding: 0;
	font-family: ${font};
	font-size: 2rem;
	line-height: 32px;
`

export const H2 = styled.h2`
	font-weight: 700;
	font-size: 1.7rem;
	color: ${globalColor.darkText};
	font-family: ${font};
	margin: 0;
`

export const H3 = styled.h3`
	font-weight: 800;
	font-size: 1.4rem;
	line-height: 30px;
	color: ${globalColor.primary};
	font-family: ${font};
	margin: 0;
`

export const H4 = styled.h4`
	font-weight: 700;
	font-size: 1.15rem;
	color: ${globalColor.darkText};
	font-family: ${font};
	margin: 0;
`

export const H4_light = styled.h4`
	font-weight: 700;
	font-size: 1.15rem;
	color: ${globalColor.lightText};
	font-family: ${font};
	margin: 0;
`

export const Paragraph = styled.p`
	font-weight: 400;
	font-size: 0.94rem;
	line-height: 21px;
	color: ${globalColor.darkText};
	font-family: ${font};
	margin: 0;
`
