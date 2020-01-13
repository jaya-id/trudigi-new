import {itemDurasiPengerjaan, itemDurasiRevisi} from './shared'

export default {
	title: "Online System",
	summary: "Online System adalah website yang ditujukan untuk mengatur keluar masuknya informasi dalam lingkup sistem tertentu bergantung pada peran yang diaplikasikan dalam sistem. Ini termasuk sistem yang mengatur pendaftaran, penyewaan, pengelolaan data tertentu. Anda dapat memesan jenis online system yang sesuai dengan kebutuhan dan budget bisnis anda.",
	models: [
		{
			name: "Mini",
			summary: "Sistem untuk Menyimpan Data Sederhana",
			price: 300000,
			examples: [
				"Sistem Kasir",
				"Sistem Rekap Pribadi"
			],
			items: [
				itemDurasiPengerjaan(21),
				itemDurasiRevisi(7),
			]
		}
	]
}