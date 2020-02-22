
import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'

export default ({ pageContext }) => {
	const { team } = pageContext
	return (
	<Layout>
		<Summary>
			<h1>{team.title}</h1>
		</Summary>
	</Layout>
	)
};