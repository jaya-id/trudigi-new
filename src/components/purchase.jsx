import React, { useState } from "react"
import Summary from "./summary"
import Layout from "./layout"
import Hero from "./hero"

export default ({ data, theme }) => {
	theme = theme || 'primary';
	const [level, setLevel] = useState(0);
	const model = data.models[level];
	return <Layout>
		<Summary>
			<h1 className={`text-${theme}`}>{data.title}</h1>
			<p>{data.summary}</p>
			<p>Pilih Jenis Paket&nbsp;:</p>
			<div class="btn-group mr-2" role="group" aria-label="First group">
				{
					data.models.map((v, i) => (
						<button class={`btn btn-outline-${theme} ${i === level ? 'active' : ''}`} key={v.name}
						onClick={(e) => setLevel(i)}>{v.name}</button>))
				}
			</div>
		</Summary>
		<div className="text-center sticky-top bg-light p-3">
			<div className="d-flex container align-items-center mx-auto">
				<div class="mr-2 btn-group">
					<button type="button" class={`btn btn-${theme} dropdown-toggle`} data-toggle="dropdown">
						{model.name}
					</button>
					<div class="dropdown-menu">
						{
							data.models.map((v, i) => <button class="dropdown-item" key={v.name}
								onClick={(e) => setLevel(i)}>{v.name}</button>)
						}
					</div>
				</div>
				<span className="d-none d-md-block"><small>{model.summary}</small></span>
				<span className="ml-auto"><b>{model.price.toLocaleString('id-ID', {
					style: 'currency',
					currency: 'IDR',
				})}</b></span>
				<button className={`ml-2 btn btn-${theme}`}>Pesan Sekarang</button>
			</div>
		</div>
		<Summary>
			<h3 className={`text-${theme}`}>Contoh</h3>
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
					<h2 className={`text-${theme}`}>{mod.title}</h2>
					<p>{mod.description}</p>
					<p className="text-muted"><small>{mod.notes}</small></p>
				</Hero>
			))
		}
	</Layout>;
}