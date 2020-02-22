
import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'

export default ({ pageContext }) => {
	const { member } = pageContext
	return (
	<Layout>
		<Summary>
			<h1>{member.name}</h1>
		</Summary>
	</Layout>
	)
};