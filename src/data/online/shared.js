const itemDurasiPengerjaan = (days) => ({
	title: `Durasi Pengerjaan ${days} Hari`,
	description: `Durasi Pengerjaan adalah ${days} Hari dihitung sejak detail pengerjaan kami terima`,
	notes: '',
	img: "/images/template.jpg",
})

const itemDurasiRevisi = (days) => ({
	title: `Masa Revisi ${days} Hari`,
	description: `Masa Revisi adalah ${days} Hari dihitung setelah durasi pengerjaan. Kami menerima perbaikan pengerjaan selama tidak mengubah struktur yang  melenceng dari pengerjaan awal`,
	notes: 'Berikutnya Rp 100.000 jika perlu tambahan durasi revisi selama 15 Hari',
	img: "/images/template.jpg",
})

const itemSecurityPatch = (days) => ({
	title: `Maintenance ${days} Hari`,
	description: `Jika anda menemukan masalah/bug dalam sistem, kami memberikan garansi perbaikan gratis selama ${days} hari dihitung setelah durasi revisi selesai`,
	notes: 'Berikutnya Rp 50.000 jika perlu tambahan durasi maintenance selama 15 Hari',
	img: "/images/template.jpg",
})

const itemCRUD = (items) => ({
	title: `${items} Data CRUD`,
	description: `Komplektivitas sistem pada dasarnya ialah dari berapa operasi CRUD (Create-Read-Update-Delete), kami memberikan jumlah CRUD hingga ${items} jenis data sesuai dengan ukuran paket yang anda pilih`,
	notes: 'Berikutnya Rp 100.000 untuk setiap tambahan CRUD',
	img: "/images/template.jpg",
})


const itemAdmin = (kind) => ({
	single: {
		title: `Satu Akun`,
		description: `Lorem Ipsum`,
		img: "/images/template.jpg",
	},
	admin: {
		title: `Satu Admin, Banyak User`,
		description: `Lorem Ipsum`,
		img: "/images/template.jpg",
	},
	master: {
		title: `Satu Master Akun, Banyak Jenis User`,
		description: `Lorem Ipsum`,
		img: "/images/template.jpg",
	},
}[kind])

const itemUser = (types) => ({
	title: `${types} Jenis User`,
	description: `Lorem Ipsum`,
	notes: 'Berikutnya Rp 250.000 untuk setiap tambahan Jenis User',
	img: "/images/template.jpg",
})


const itemAuthorization = () => ({
	title: `Sistem Autorisasi`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})


const itemValidation = () => ({
	title: `Sistem Validasi`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})


export {
	itemDurasiPengerjaan,
	itemDurasiRevisi,
	itemSecurityPatch,
	itemCRUD,
	itemAdmin,
	itemUser,
	itemAuthorization,
	itemValidation,
}