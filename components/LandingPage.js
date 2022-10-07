import { useEffect, useState } from 'react'
import projects from '../text/projects.json'
import ProjectSlider from './projects/ProjectSlider'
import TechContainer from './techDisplay/TechContainer'
import icons from '../text/icons.json'

const LandingPage = () => {
	const [projectDisplay, setProjects] = useState(projects)
	const [techSelection, setTech] = useState(null)
	const [techItemSelected, setTechItemSelected] = useState(false)

	const setTechSelection = (tech) => {
		setTech(tech)
		setTechItemSelected(true)
		console.log('tech selected')
	}

	const clearFilter = () => {
		setTech(null)
		setProjects(projects)
		setTechItemSelected(false)
		console.log('filter cleared')
	}

	useEffect(() => {
		const updateProjects = () => {
			if (techSelection === 'Firebase') {
				const regex = new RegExp('Firebase (Firestore|Auth|Admin)', 'g')

				setProjects(projects.filter((project) => regex.test(project.tech)))
				return
			}

			if (techSelection != null && techSelection != 'Firebase') {
				setProjects(
					projects.filter((project) => project.tech.includes(techSelection))
				)

				return
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
