import React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import Summary from '../components/summary'
import Logo from '../media/brandLong.svg'
export default () => (
	<Layout seo={{
		title: "TRUDIGI",
		description: "Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda",
	}}>
		<Summary>
			<h1><Logo width="80%"/></h1>
			<p>Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda</p>
		</Summary>
		<Hero img="/images/placeholder.png" href="/about">
			<h2>OUR WORK</h2>
			<h4>Ketepatan dan Kualitas adalah Prioritas Kami</h4>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<Summary>
			<h1>Products</h1>
		</Summary>
		<Summary>
			<h1>Showcase</h1>
		</Summary>
		<Summary>
			<h1>Teams</h1>
		</Summary>
	</Layout>
)
