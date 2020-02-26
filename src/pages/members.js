import React from "react"
import Layout from "../components/layout"
import Gridpack from '../components/gridpack'
import Gridtile from '../components/gridtile'

const members = require('../data/members').default

export default () => (
	<Layout seo={{
		title: "Members | TRUDIGI"
	}}>
		<Gridpack title="Members">
			{
				Object.entries(members).map(([k, v]) => (
					<Gridtile href={`/m/${k}`} key={k}>
						<h5>{v.name}</h5>
					</Gridtile>
				))
			}
		</Gridpack>
	</Layout>
)
