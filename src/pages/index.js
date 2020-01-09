import React from "react"
import Layout from "../components/layout"
import Hero from '../components/hero'
import Summary from '../components/summary'

export default () => (
	<Layout>
		<Summary>
			<h1>TRUDIGI (LOGO)</h1>
			<p>Di TRUDIGI Kami Memberikan Layanan Profesional untuk Solusi Digital Bisnis Anda</p>
		</Summary>
		<Hero img="/images/template.jpg" href="/showcase">
			<h2>OUR WORK</h2>
			<h4>Ketepatan dan Kualitas adalah Prioritas Kami</h4>
			<p>TRUDIGI Berkomitmen untuk menciptakan Solusi Digital berkualitas yang menarik, fungsional dan berkualitas tinggi</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/online/profile">
			<h2>SERVICE - ONLINE PROFILE</h2>
			<h4>Profil Bisnis anda mempengaruhi Kualitas Bisnis anda di mata publik</h4>
			<p>Kami menerima Pengerjaan Website Profil dari Skala Ekonomis hingga Eksekutif</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/online/system">
			<h2>SERVICE - ONLINE SYSTEM</h2>
			<h4>Persingkat Waktu Pengerjaan Kantor anda melalui Digitalisasi Sistem</h4>
			<p>Kami menerima Pengerjaan Sistem Informasi dari skala kecil hingga jaringan besar</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/digital/content">
			<h2>SERVICE - DIGITAL CONTENT</h2>
			<h4>Konten Interaktif Tepat Guna untuk Target Pasar Anda</h4>
			<p>Kami menerima Pengerjaan Media Interaktif dari skala sederhana hingga kompleks</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/digital/graphics">
			<h2>SERVICE - DIGITAL GRAPHICS</h2>
			<h4>Konten Grafis adalah kunci penting dari Komunikasi kepada Pengguna</h4>
			<p>Kami menerima Pengerjaan Media Grafis baik secara individual maupun volume</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/komunitas">
			<h2>TRUDIGI COMMUNITY</h2>
			<h4>Kami tidak hanya menjual jasa, misi kami lebih dari itu</h4>
			<p>TRUDIGI adalah tentang membangun komunitas yang erat dan relevan untuk pembangunan insfrastruktur IT Negeri</p>
		</Hero>
	</Layout>
)
