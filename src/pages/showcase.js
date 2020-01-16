import React from "react"
import Layout from "../components/layout"
import Summary from '../components/summary'
import Data from '../data/showcase'

export default () => (
	<Layout>
		<Summary>
			<h1>Showcase</h1>
			<p>Contoh hasil pengerjaan oleh member TRUDIGI dalam berbagai bidang</p>
		</Summary>
		{
			Data.map(x => (
				<Summary key={x.title}>
					<h2>{x.title}</h2>
					<div className="row">
					{
						x.items.map(y => (
							<div key={y.title} className="col-md-6 col-xl-3">
								<img src={y.image} alt="" className="w-100"/>
								<small className="d-block text-muted text-center mt-2">{y.title}</small>
							</div>
						))
					}
					</div>
				</Summary>
			))
		}
	</Layout>
)
