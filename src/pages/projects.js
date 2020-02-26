import React from "react"
import Layout from "../components/layout"
import Gridpack from '../components/gridpack'
import Gridtile from '../components/gridtile'

const projects = require('../data/projects').default

export default () => (
	<Layout seo={{
		title: "Projects | TRUDIGI"
	}}>
		<Gridpack title="Projects">
			{
				Object.entries(projects).map(([k, v]) => (
					<Gridtile href={`/p/${k}`} key={k}>
						<h5>{v.title}</h5>
					</Gridtile>
				))
			}
		</Gridpack>
	</Layout>
)
