import React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import Summary from '../components/summary'
import HeroHead from '../components/herohead'
import SumProduct from '../components/sumproduct'
import Product from '../components/product'
export default () => (
	<Layout seo={{
		title: "TRUDIGI",
		description: "Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda",
	}}>
		<HeroHead img="/images/header1-01.svg" href="/about">
			<h2>Solusi Untuk</h2>
			<h1>Bisnis IT</h1>
			<h2>Anda.</h2>
			<br></br>
			<p>Trudigi (Trunojoyo Digital Freelancer) adalah komunitas Mahasiswa Unijoyo yang bergerak membangun IT. Kami melayani pemesanan media dan pengerjaan project software dengan tujuan membantu percepatan perubahan melalui IT pada lingkungan Universitas Trunojoyo Madura</p>
			<br></br>
		</HeroHead>
		<Hero img="/images/tentang-01.svg">
			<h2>Tentang</h2>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<SumProduct>
			<Product>
				<img src="/images/icon trudigi-01.svg" alt=""></img>
				<h5>Aplikasi Web</h5>
			</Product>
			<Product>
				<img src="/images/icon trudigi-02.svg" alt=""></img>
				<h5>Graphic Design</h5>
			</Product>
			<Product>
				<img src="/images/icon trudigi-03.svg" alt=""></img>
				<h5>E-Commerce</h5>
			</Product>
			<Product>
				<img src="/images/icon trudigi-04.svg" alt=""></img>
				<h5>Video</h5>
			</Product>
		</SumProduct>
		<Summary>
			<h1>Showcase</h1>
		</Summary>
		<Summary>
			<h1>Teams</h1>
		</Summary>
	</Layout>
)
