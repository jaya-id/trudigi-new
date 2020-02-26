import React from "react"
import Layout from "../components/layout"
import Gridpack from '../components/gridpack'
import Gridtile from '../components/gridtile'

const teams = require('../data/teams').default

export default () => (
	<Layout seo={{
		title: "Teams | TRUDIGI"
	}}>
		<Gridpack title="Teams">
			{
				Object.entries(teams).map(([k, v]) => (
					<Gridtile href={`/t/${k}`} key={k}>
						<h5>{v.title}</h5>
					</Gridtile>
				))
			}
		</Gridpack>
	</Layout>
)
