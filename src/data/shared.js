const itemWorkDuration = (days) => ({
	title: `Durasi Pengerjaan ${days} Hari`,
	description: `Durasi Pengerjaan untuk menyelesaikan pemesanan yakni sekitar ${days} hari dihitung sejak detail pengerjaan kami terima`,
	notes: '',
	img: "/images/placeholder.png",
})

const itemRevisionPeriod = (days) => ({
	title: `Masa Revisi ${days} Hari`,
	description: `Periode untuk perbaikan pemesanan (revisi) adalah hingga ${days} hari dihitung setelah durasi pengerjaan`,
	notes: 'Kami menerima perbaikan pengerjaan selama tidak mengubah struktur pemesanan awal',
	img: "/images/placeholder.png",
})

const onlineSecurityPatch = (days) => ({
	title: `Garansi Maintenance ${days} Hari`,
	description: `Jika anda menemukan masalah/bug dalam sistem, kami memberikan garansi perbaikan gratis selama ${days} hari dihitung setelah durasi revisi selesai`,
	notes: 'Berikutnya Rp 50.000 jika perlu tambahan durasi maintenance selama 15 Hari',
	img: "/images/placeholder.png",
})

const onlineCRUD = (items) => ({
	title: `${items} Data CRUD`,
	description: `Website dinamis menyediakan panel Admin untuk mengatur hingga ${items} jenis data (termasuk galeri, agenda, biodata, navigasi atau data lainnya) yang menggunakan prinsip CRUD`,
	notes: 'Berikutnya Rp 100.000 untuk setiap tambahan CRUD',
	img: "/images/placeholder.png",
})

const systemAdminKind = (kind) => ({
	single: {
		title: `Satu Akun`,
		description: `Sistem `,
		img: "/images/placeholder.png",
	},
	admin: {
		title: `Satu Admin, Banyak User`,
		description: `Lorem Ipsum`,
		img: "/images/placeholder.png",
	},
	master: {
		title: `Satu Master Akun, Banyak Jenis User`,
		description: `Lorem Ipsum`,
		img: "/images/placeholder.png",
	},
}[kind])

const systemUserKind = (types) => ({
	title: `${types} Jenis User`,
	description: `Lorem Ipsum`,
	notes: 'Berikutnya Rp 250.000 untuk setiap tambahan Jenis User',
	img: "/images/placeholder.png",
})

const systemAuthorization = () => ({
	title: `Sistem Autorisasi Data`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemValidation = () => ({
	title: `Sistem Validasi Input`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemStatistics = () => ({
	title: `Statistik dan Laporan`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemEmailSubscription = () => ({
	title: `Sistem Notifikasi Email`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemDataImportExport = () => ({
	title: `Data Impor dan Ekspor`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemDesktopMobileApp = () => ({
	title: `Aplikasi Desktop / Mobile`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemSocialLogin = () => ({
	title: `Login Pihak Ketiga`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemRestAPI = () => ({
	title: `REST API + GraphQL`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})

const systemBacklog = () => ({
	title: `Backlog / Emergency System`,
	description: `Lorem Ipsum`,
	img: "/images/placeholder.png",
})



const profileCustomPages = (items) => ({
	title: `${items} Halaman Kustom`,
	description: `Halaman Kustom dapat berisi konten tertentu dengan desain yang unik dan berbeda`,
	notes: items === 1 ? `` : `Berikutnya Rp 50.000 untuk setiap tambahan Halaman Kustom`,
	img: "/images/placeholder.png",
})


const profileMulti = () => ({
	title: `Multi Akun dan Multi Webite`,
	description: `Website dapat dikelola oleh lebih dari satu akun dan dapat memiliki cabang web (subdomain) yang terpisah`,
	img: "/images/placeholder.png",
})

const profilePostType = (kind) => ({
	post: {
		title: `Sistem Posting`,
		description: `Website dengan sebuah sistem posting memuat artikel, memo, galeri, artwork atau bahan lainnya`,
		img: "/images/placeholder.png",
	},
	multi: {
		title: `Sistem Posting Rangkap`,
		description: `Website mempunyai lebih dari satu sistem posting untuk memuat kombinasi antara artikel, memo, galeri, artwork dan bahan lainnya`,
		img: "/images/placeholder.png",
	},
	complete: {
		title: `Sistem Posting Rangkap dan Terindeks`,
		description: `Website mempunyai Lebih dari satu sistem posting untuk memuat kombinasi antara artikel, memo, galeri, artwork dan bahan lainnya serta terindeks, sehingga dapat dipilah, dicari maupun dipisah ke banyak halaman`,
		img: "/images/placeholder.png",
	},
}[kind])

const profileStatistics = () => ({
	title: `Statistik Data`,
	description: `Website menyediakan rangkuman publik ditampilkan melalui format diagram ataupun listing yang dapat diekspor ke format Excel atau PDF`,
	img: "/images/placeholder.png",
})
export {
	itemWorkDuration,
	itemRevisionPeriod,
	onlineSecurityPatch,
	onlineCRUD,
	systemAdminKind,
	systemUserKind,
	systemAuthorization,
	systemValidation,
	systemStatistics,
	systemEmailSubscription,
	systemDataImportExport,
	systemDesktopMobileApp,
	systemSocialLogin,
	systemRestAPI,
	systemBacklog,
	profileCustomPages,
	profileMulti,
	profilePostType,
	profileStatistics,
}