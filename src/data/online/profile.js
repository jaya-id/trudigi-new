
import {
	itemWorkDuration,
	itemRevisionPeriod,
	itemSecurityPatch,
	itemCRUD,
	itemCP,
	itemType,
	itemPostType
} from './shared'

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
				itemWorkDuration(15),
				itemRevisionPeriod(3),
				itemCP(1),
				itemType('single')
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
				itemWorkDuration(21),
				itemRevisionPeriod(7),
				itemCP(5),
				itemType('single'),
				itemPostType('simple')
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
				itemWorkDuration(30),
				itemRevisionPeriod(10),
				itemCP(10),
				itemType('single'),
				itemCRUD(3),
				itemPostType('normal')
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
				itemWorkDuration(60),
				itemRevisionPeriod(15),
				itemSecurityPatch(30),
				itemCP(20),
				itemType('double'),
				itemCRUD(5),
				itemPostType('complete')
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

				itemWorkDuration(120),
				itemRevisionPeriod(60),
				itemSecurityPatch(90),
				itemCP(30),
				itemType('triple'),
				itemCRUD(10),
				itemPostType('complete')
			]
		}
	]
}