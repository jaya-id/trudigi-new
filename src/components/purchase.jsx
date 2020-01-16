import React, { useState } from "react"
import Summary from "./summary"
import Layout from "./layout"
import Hero from "./hero"

export default ({ data, theme, background }) => {
	theme = theme || 'primary';
	const [level, setLevel] = useState(0);
	const model = data.models[level];
	return <Layout>
		<div className="purchase-hero" style={{'--background': `url(${background})`}}>
		<Summary>
			<h1 className={`text-${theme}`}>{data.title}</h1>
			<p>{data.summary}</p>
		</Summary>
		</div>
		<Summary>
			<p>Pilih Jenis Paket&nbsp;:</p>
			<div className="btn-group mr-2" role="group" aria-label="First group">
				{
					data.models.map((v, i) => (
						<button className={`btn btn-outline-${theme} ${i === level ? 'active' : ''}`} key={v.name}
						onClick={(e) => setLevel(i)}>{v.name}</button>))
				}
			</div>
		</Summary>
		<div className="text-center sticky-top bg-light p-3">
			<div className="d-flex container align-items-center mx-auto">
				<div className="mr-2 btn-group">
					<button type="button" className={`btn btn-${theme} dropdown-toggle`} data-toggle="dropdown">
						{model.name}
					</button>
					<div className="dropdown-menu">
						{
							data.models.map((v, i) => <button className="dropdown-item" key={v.name}
								onClick={(e) => setLevel(i)}>{v.name}</button>)
						}
					</div>
				</div>
				<span className="d-none d-md-block"><small>{model.summary}</small></span>
				<span className="ml-auto h5 mb-0"><b>{model.price.toLocaleString('id-ID', {
					style: 'currency',
					currency: 'IDR',
				})}</b></span>
				<button className={`ml-2 btn btn-${theme}`}>Pesan Sekarang</button>
			</div>
		</div>
		<Summary>
			<h2 className={`text-${theme}`}>Contoh</h2>
			<div className="row justify-content-center">
			{
				model.examples.map(y => (
					<div key={y.title} className="col-md-6">
						<img src={y.image} alt="" className="w-100"/>
						<small className="d-block text-muted text-center mt-2">{y.title}</small>
					</div>
				))
			}
			</div>
			<h2 className={`text-${theme}`}>Fitur Paket</h2>
		</Summary>
		{
			model.items.map((mod) => (
				<Hero key={mod.title} img={mod.img}>
					<h3 className={`text-${theme}`}>{mod.title}</h3>
					<p>{mod.description}</p>
					<p className="text-muted"><small>{mod.notes}</small></p>
				</Hero>
			))
		}
		<Summary>
		<h2 className={`text-${theme}`}>Benefit Lainnya</h2>
		<div className="row my-5 justify-content-center">
		{
			(model.promises || []).map((mod) => (
			<div className="col-lg-6 py-3">
			<h4>{mod.title}</h4>
			<p className="text-muted">{mod.description}</p>
			</div>
			))
		}
		</div>
		</Summary>
		<Summary>
		<h2 className={`text-${theme}`}>Opsi Teknologi yang dapat Dipakai</h2>
		<div className="my-5 row justify-content-center">
		{
			(model.technologies || []).map((mod) => (
			<div className="col-md-6 col-xl-3 py-3">
			<h5>{mod.title}</h5>
			<small className="text-muted">{mod.description}</small>
			</div>
			))
		}
		</div>
		</Summary>
		<Summary>
	<h4>Estimasi Harga Untuk Paket <span className={`text-${theme}`}>{model.name}</span> adalah <span className={`text-${theme}`}>{model.price.toLocaleString('id-ID', {
					style: 'currency',
					currency: 'IDR',
				})}</span></h4>
			<button className={`btn btn-lg btn-${theme}`}>
				Pesan Sekarang
			</button>
		</Summary>
	</Layout>;
}