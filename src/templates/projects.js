
import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'

export default ({ pageContext }) => {
	const { project } = pageContext
	return (
	<Layout>
		<Summary>
			<h1>{project.title}</h1>
		</Summary>
	</Layout>
	)
};