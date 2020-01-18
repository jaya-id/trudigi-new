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
			<h1><Logo width="100%"/></h1>
			<p>Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda</p>
		</Summary>
		<Hero img="/images/placeholder.png" href="/showcase">
			<h2>OUR WORK</h2>
			<h4>Ketepatan dan Kualitas adalah Prioritas Kami</h4>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<Hero img="/images/placeholder.png" href="/products">
			<h2>OUR PRODUCT</h2>
			<h4>Ketepatan dan Kualitas adalah Prioritas Kami</h4>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<Hero img="/images/placeholder.png" href="https://komunitas.trudigi.io">
			<h2>OUR COMMUNITY</h2>
			<h4>Kami tidak hanya menjual jasa, misi kami lebih dari itu</h4>
			<p>TRUDIGI adalah tentang membangun komunitas yang erat dan relevan untuk pembangunan insfrastruktur IT Negeri</p>
		</Hero>
	</Layout>
)
