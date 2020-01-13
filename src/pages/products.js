import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"

export default () => (
<Layout>
	<Hero img="/images/template.jpg" href="/online/profile">
			<h2>ONLINE PROFILE</h2>
			<h4>Profil Bisnis anda mempengaruhi Kualitas Bisnis anda di mata publik</h4>
			<p>Kami menerima Pengerjaan Website Profil dari Skala Ekonomis hingga Eksekutif</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/online/system">
			<h2>ONLINE SYSTEM</h2>
			<h4>Persingkat Waktu Pengerjaan Kantor anda melalui Digitalisasi Sistem</h4>
			<p>Kami menerima Pengerjaan Sistem Informasi dari skala kecil hingga jaringan besar</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/digital/content">
			<h2>DIGITAL CONTENT</h2>
			<h4>Konten Interaktif Tepat Guna untuk Target Pasar Anda</h4>
			<p>Kami menerima Pengerjaan Media Interaktif dari skala sederhana hingga kompleks</p>
		</Hero>
		<Hero img="/images/template.jpg" href="/digital/graphics">
			<h2>DIGITAL GRAPHICS</h2>
			<h4>Konten Grafis adalah kunci penting dari Komunikasi kepada Pengguna</h4>
			<p>Kami menerima Pengerjaan Media Grafis baik secara individual maupun volume</p>
		</Hero>
</Layout>)
