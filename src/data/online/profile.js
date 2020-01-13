import {itemDurasiPengerjaan, itemDurasiRevisi} from './shared'

export default {
	title: "Online Profile",
	summary: "Online Profile adalah website yang ditujukan untuk mengenalkan pihak tertentu kepada pengguna Internet, termasuk produk, layanan, keanggotan, agenda, galeri, atau informasi publik lainnya. Anda dapat memesan jenis online profile yang sesuai dengan kebutuhan dan budget bisnis anda.",
	models: [
		{
			name: "Indie",
			summary: "Untuk Profile Individual",
			price: 150000,
			examples: [
				"- Freelancer",
                "- Indie",
                "- Developer"
			],
			items: [
				itemDurasiPengerjaan(15),
				itemDurasiRevisi(3),
			]
		},
		{
			name: "Economic",
			summary: "Untuk Profile Startup",
			price: 300000,
			examples: [
				"- Startup",
                "- Blogger",
                "- Enterpreneur"
			],
			items: [
				itemDurasiPengerjaan(21),
				itemDurasiRevisi(7),
			]
		},
		{
			name: "Business",
			summary: "Untuk Profil Lembaga dengan Pengelolaan Konten yang Sederhana",
			price: 600000,
			examples: [
				"- Organisasi Daerah",
				"- Perusahaan Kecil"
			],
			items: [
				itemDurasiPengerjaan(30),
				itemDurasiRevisi(10),
			]
		},
		{
			name: "Professional",
			summary: "Untuk Profil Perusahaan dengan Berbagai Jenis Konten",
			price: 1500000,
			examples: [
				"- Institusi",
                "- Sekolah",
                "- Kampus",
                "- Yayasan"
			],
			items: [
				itemDurasiPengerjaan(60),
				itemDurasiRevisi(15),
			]
		},
		{
			name: "Enterprise",
			summary: "Untuk Profil Perusahaan Besar Memuat Statistik di Berbagai Jenis Konten",
			price: 5000000,
			examples: [
				"- Badan Statistik Daerah",
                "- Lembaga Pengembangan",
                "- Komunitas Besar"
			],
			items: [
				itemDurasiPengerjaan(120),
				itemDurasiRevisi(60),
			]
		}
	]
}