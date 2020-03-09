
import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'

export default ({ pageContext }) => {
	const { project } = pageContext
	return (
	<Layout seo={{
		title: project.title
	}}>
		<section className="hero-summary">
			<div className="hero-content">
				<img className="full" src="/images/header-minibank.png"></img>
			</div>
		</section>
		<Summary>
			<h1>{project.title}</h1>
			<div>{project.content}</div>
		</Summary>
	</Layout>
	)
};