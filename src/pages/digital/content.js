import React from "react"
import Layout from "../../components/layout"
import Heroprofile from '../../components/hero-profile'
import Summary from '../../components/summary'

export default () => 
<Layout>
<Summary>
    <h1>Trunojoyo Digital Freelancer</h1>
    <p>Digital Content adalah media interaktif yang ditujukan untuk menyampaikan suatu informasi ….......</p>
</Summary>

<Heroprofile img="/images/template.jpg">
    <h4>SLIDER</h4>
    <p>DESKRIPSI</p>
</Heroprofile>

<Heroprofile img="/images/template.jpg">
    <h4>XXX Durasi Revisi</h4>
    <p>Durasi Pengerjaan adalah XXX Hari dihitung sejak detail pengerjaan kami terima</p>
</Heroprofile>

<Summary>
    <p>Next 150K untuk ekstensi selama 15H</p>
</Summary>

<Heroprofile img="/images/template.jpg">
    <h4>XXX Day Security Patch</h4>
    <p>Jika anda menemukan masalah/bug dalam sistem, kami memberikan garansi perbaikan gratis selama XXX hari dihitung setelah durasi revisi selesai</p>
</Heroprofile>

<Summary>
    <p>Next 50K untuk ekstensi selama 15H</p>
</Summary>
</Layout>
