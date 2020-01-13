import {
	itemDurasiPengerjaan,
	itemDurasiRevisi,
	itemSecurityPatch,
	itemCRUD,
	itemAdmin,
	itemUser,
	itemAuthorization,
	itemValidation
} from './shared'

export default {
	title: "Online System",
	summary: "Online System adalah website yang ditujukan untuk mengatur keluar masuknya informasi dalam lingkup sistem tertentu bergantung pada peran yang diaplikasikan dalam sistem. Ini termasuk sistem yang mengatur pendaftaran, penyewaan, pengelolaan data tertentu. Anda dapat memesan jenis online system yang sesuai dengan kebutuhan dan budget bisnis anda.",
	models: [
		{
			name: "Mini",
			summary: "Sistem untuk Menyimpan Data Sederhana",
			price: 300000,
			examples: [
				"- Sistem Kasir",
				"- Sistem Rekap Pribadi"
			],
			items: [
				itemDurasiPengerjaan(21),
				itemDurasiRevisi(7),
				itemAdmin('single')
			]
		},
		{
			name: "Regular",
			summary: "Sistem untuk Komunikasi dengan Pengguna",
			price: 600000,
			examples: [
				"- Sistem Peminjaman Barang -",
				"- Sistem Pendaftaran"
			],
			items: [
				itemDurasiPengerjaan(30),
				itemDurasiRevisi(10),
				itemCRUD(3),
				itemAdmin('admin'),
				itemUser(1),
			]
		},
		{
			name: "Complex",
			summary: "Sistem untuk Komunikasi antar Pengguna",
			price: 1500000,
			examples: [
				"- Sistem Rekap Nilai -",
				"- Sistem Moderasi Akun"
			],
			items: [
				itemDurasiPengerjaan(30),
				itemDurasiRevisi(10),
				itemSecurityPatch(30),
				itemCRUD(7),
				itemAdmin('master'),
				itemUser(3),
				itemAuthorization(),
				itemValidation()
			]
		},
		{
			name: "Super",
			summary: "Sistem untuk Membangun Data dan Komunikasi dalam Jaringan Bisnis",
			price: 4000000,
			examples: [
				"- Sistem Audit",
				"- Sistem Manajemen Surat"
			],
			items: [
				itemDurasiPengerjaan(90),
				itemDurasiRevisi(30),
				itemSecurityPatch(90),
				itemCRUD(15),
				itemAdmin('master'),
				itemUser(6),
				itemAuthorization(),
				itemValidation()
			]
		},
		{
			name: "Giant",
			summary: "Sistem untuk Volume Komunitas dan Skala Besar",
			price: 10000000,
			examples: [
				"- Sistem Kasir",
				"- Sistem Rekap Pribadi"
			],
			items: [
				itemDurasiPengerjaan(120),
				itemDurasiRevisi(60),
				itemSecurityPatch(180),
				itemCRUD(30),
				itemAdmin('master'),
				itemUser(12),
				itemAuthorization(),
				itemValidation()
			]
		}
	]
}