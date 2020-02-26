import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"

const products = require('../data/products').default

export default () => (
	<Layout>
		{
			Object.entries(products).map(([k, v]) => (
				<Hero img={`/images/products-icon/${k}.svg`} key={k}>
					<h5>{v.title}</h5>
					<a href={`/s/${k}`} className="btn btn-lg btn-primary">Selengkapnya</a>
				</Hero>
			))
		}
	</Layout>
)
