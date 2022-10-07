import { useEffect, useState } from 'react'
import projects from '../text/projects.json'
import ProjectSlider from './projects/ProjectSlider'
import TechContainer from './techDisplay/TechContainer'
import icons from '../text/icons.json'

const LandingPage = () => {
	const [projectDisplay, setProjects] = useState(projects)
	const [techSelection, setTech] = useState(null)
	const [domLoaded, setDomLoaded] = useState(false)
	const [techItemSelected, setTechItemSelected] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	const setTechSelection = (tech) => {
		setTech(tech)
		setTechItemSelected(true)
		console.log(techSelection)
	}

	const clearFilter = () => {
		setTech(null)
		setProjects(projects)
		setTechItemSelected(false)
		console.log('filter cleared')
	}

	useEffect(() => {
		const updateProjects = () => {
			if (techSelection != null) {
				setProjects(
					projects.filter((project) => project.tech.includes(techSelection))
				)
			}
		}
		updateProjects()
	}, [techSelection])

	return (
		<>
			<ProjectSlider
				techItemSelected={techItemSelected}
				setProjects={setProjects}
				projects={projectDisplay}
				clearFilter={clearFilter}
			/>
			<TechContainer icons={icons} onClick={setTechSelection} />
		</>
	)
}

export default LandingPage
