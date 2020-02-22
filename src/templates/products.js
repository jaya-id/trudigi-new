
import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'

export default ({ pageContext }) => {
	const { product } = pageContext
	return (
	<Layout>
		<Summary>
			<h1>{product.title}</h1>
		</Summary>
	</Layout>
	)
};