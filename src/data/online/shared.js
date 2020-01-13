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

const itemSecurityPath = (days) => ({
	title: `Durasi Revisi ${days} Hari`,
	description: `Durasi Revisi adalah ${days} Hari dihitung setelah durasi pengerjaan. Kami menerima perbaikan pengerjaan selama tidak mengubah struktur yang  melenceng dari pengerjaan awal`,
	notes: 'Berikutnya Rp 100.000 jika perlu tambahan durasi revisi selama 15 Hari',
	img: "/images/template.jpg",
})

export {
	itemDurasiPengerjaan,
	itemDurasiRevisi
}