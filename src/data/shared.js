const itemWorkDuration = (days) => ({
	title: `Durasi Pengerjaan ${days} Hari`,
	description: `Durasi Pengerjaan untuk menyelesaikan pemesanan yakni sekitar ${days} hari dihitung sejak detail pengerjaan kami terima`,
	notes: '',
	img: "/images/template.jpg",
})

const itemRevisionPeriod = (days) => ({
	title: `Masa Revisi ${days} Hari`,
	description: `Kami memberikan kesempatan revisi hingga ${days} hari dihitung setelah durasi pengerjaan. Kami menerima perbaikan pengerjaan selama tidak mengubah struktur pemesanan awal`,
	notes: 'Berikutnya Rp 100.000 jika perlu tambahan durasi revisi selama 15 Hari',
	img: "/images/template.jpg",
})

const onlineSecurityPatch = (days) => ({
	title: `Garansi Maintenance ${days} Hari`,
	description: `Jika anda menemukan masalah/bug dalam sistem, kami memberikan garansi perbaikan gratis selama ${days} hari dihitung setelah durasi revisi selesai`,
	notes: 'Berikutnya Rp 50.000 jika perlu tambahan durasi maintenance selama 15 Hari',
	img: "/images/template.jpg",
})

const onlineCRUD = (items) => ({
	title: `${items} Data CRUD`,
	description: `Kerumitan sistem pada dasarnya ialah dari berapa operasi CRUD (Create-Read-Update-Delete) yang dapat diatur dalam sistem. Kami memberikan jumlah CRUD yang fleksibel hingga ${items} jenis data dalam sistem`,
	notes: 'Berikutnya Rp 100.000 untuk setiap tambahan CRUD',
	img: "/images/template.jpg",
})

const systemAdminKind = (kind) => ({
	single: {
		title: `Satu Akun`,
		description: `Sistem `,
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

const systemUserKind = (types) => ({
	title: `${types} Jenis User`,
	description: `Lorem Ipsum`,
	notes: 'Berikutnya Rp 250.000 untuk setiap tambahan Jenis User',
	img: "/images/template.jpg",
})

const systemAuthorization = () => ({
	title: `Sistem Autorisasi Data`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemValidation = () => ({
	title: `Sistem Validasi Input`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemStatistics = () => ({
	title: `Statistik dan Laporan`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemEmailSubscription = () => ({
	title: `Sistem Notifikasi Email`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemDataImportExport = () => ({
	title: `Data Impor dan Ekspor`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemDesktopMobileApp = () => ({
	title: `Aplikasi Desktop / Mobile`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemSocialLogin = () => ({
	title: `Login Pihak Ketiga`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemRestAPI = () => ({
	title: `REST API + GraphQL`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
})

const systemBacklog = () => ({
	title: `Backlog / Emergency System`,
	description: `Lorem Ipsum`,
	img: "/images/template.jpg",
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
	systemBacklog
}