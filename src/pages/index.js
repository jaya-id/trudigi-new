import React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import HeroHead from '../components/herohead'
import Gridpack from '../components/gridpack'
import Gridtile from '../components/gridtile'

const products = require('../data/products').default
const teams = require('../data/teams').default
const projects = require('../data/projects').default

export default () => (
	<Layout seo={{
		title: "TRUDIGI",
		description: "Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda",
	}}>
		<HeroHead img="/images/header.png" href="/about">
			<h2>Solusi Untuk</h2>
			<h1>Bisnis IT</h1>
			<h2>Anda.</h2>
			<br/>
			<p>Trudigi (Trunojoyo Digital Freelancer) adalah komunitas Mahasiswa Unijoyo yang bergerak membangun IT. Kami melayani pemesanan media dan pengerjaan project software dengan tujuan membantu percepatan perubahan melalui IT pada lingkungan Universitas Trunojoyo Madura</p>
			<br/>
		</HeroHead>
		<Hero img="/images/tentang-01.svg">
			<h2>Tentang</h2>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<Gridpack title="Products">
			{
				Object.entries(products).map(([k, v]) => (
				<Gridtile href={`/s/${k}`} key={k}>
					<img class="thumb" src={`/images/products-icon/${k}.svg`} alt=""/>
					<h5>{v.title}</h5>
				</Gridtile>
				))
			}
		</Gridpack>
		<Gridpack title="Showcase">
			{
				Object.entries(projects).map(([k, v]) => (
				<Gridtile href={`/p/${k}`} key={k}>
					<h5>{v.title}</h5>
				</Gridtile>
				))
			}
		</Gridpack>
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
