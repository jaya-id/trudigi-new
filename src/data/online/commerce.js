
import {
	itemWorkDuration,
	itemRevisionPeriod,
	onlineSecurityPatch,
	onlineCRUD,
	profileCustomPages,
	profileType,
	profilePostType
} from '../shared'

export default {
	title: "Online Commerce",
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
				profileCustomPages(1),
				profileType('single')
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
				profileCustomPages(5),
				profileType('single'),
				profilePostType('simple')
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
				profileCustomPages(10),
				profileType('single'),
				onlineCRUD(3),
				profilePostType('normal')
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
				onlineSecurityPatch(30),
				profileCustomPages(20),
				profileType('double'),
				onlineCRUD(5),
				profilePostType('complete')
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
				onlineSecurityPatch(90),
				profileCustomPages(30),
				profileType('triple'),
				onlineCRUD(10),
				profilePostType('complete')
			]
		}
	]
}