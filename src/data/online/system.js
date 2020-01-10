const itemDurasiPengerjaan = (days) => ({
	title: `Durasi Pengerjaan ${days} Hari`,
	description: `Durasi Pengerjaan adalah ${days} Hari dihitung sejak detail pengerjaan kami terima`,
	notes: '',
	img: "/images/template.jpg",
})

const itemDurasiRevisi = (days) => ({
	title: `Durasi Revisi ${days} Hari`,
	description: `Durasi Revisi adalah ${days} Hari dihitung setelah durasi pengerjaan. Kami menerima perbaikan pengerjaan selama tidak mengubah struktur yang  melenceng dari pengerjaan awal`,
	notes: 'Berikutnya Rp 100.000 jika perlu tambahan durasi revisi selama 15 Hari',
	img: "/images/template.jpg",
})

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