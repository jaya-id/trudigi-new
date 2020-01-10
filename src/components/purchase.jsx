import React, { useState } from "react"
import Summary from "./summary"
import Layout from "./layout"
import Hero from "./hero"

export default ({ data }) => {
	const [level, setLevel] = useState(0);
	const model = data.models[level];
	return <Layout>
		<Summary>
		<h1>{data.title}</h1>
		<p>{data.summary}</p>
		</Summary>
		<div className="text-center sticky-top bg-light p-3">
		<div className="d-flex mb-2 container mx-auto">
		<input className="custom-range" type="range" min="0" max={data.models.length-1}
		value={level} onChange={(e) => setLevel(e.target.value)}/>
		<span className="mx-5"><b>{model.name}</b></span>
		<span>{model.price.toLocaleString('id-ID', {
				style: 'currency',
				currency: 'IDR',
				})}</span>
		</div>
		<div className="d-flex mt-2 align-items-center container mx-auto">
			<span>{model.summary}</span>
		<button className="ml-auto btn btn-primary">Pesan Sekarang</button>
		</div>
		</div>
		<Summary>
				<h3>Contoh</h3>
		{
			model.examples.map((exp) => (
				<div className="btn" key={exp}>
					{exp}
				</div>
			))
		}
		</Summary>
		{
			model.items.map((mod) => (
				<Hero key={mod.title} img={mod.img}>
					<h2>{mod.title}</h2>
					<p>{mod.description}</p>
					<p className="text-muted"><small>{mod.notes}</small></p>
				</Hero>
			))
		}
	  </Layout>;
}