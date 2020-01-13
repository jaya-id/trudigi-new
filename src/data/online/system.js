import {
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
} from '../shared'

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
				itemWorkDuration(21),
				itemRevisionPeriod(7),
				onlineCRUD(3),
				systemAdminKind('single'),
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
				itemWorkDuration(30),
				itemRevisionPeriod(10),
				onlineCRUD(5),
				systemAdminKind('admin'),
				systemUserKind(1),
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
				itemWorkDuration(60),
				itemRevisionPeriod(15),
				onlineSecurityPatch(30),
				onlineCRUD(7),
				systemAdminKind('master'),
				systemUserKind(3),
				systemAuthorization(),
				systemValidation()
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
				itemWorkDuration(90),
				itemRevisionPeriod(30),
				onlineSecurityPatch(90),
				onlineCRUD(15),
				systemAdminKind('master'),
				systemUserKind(6),
				systemAuthorization(),
				systemValidation(),
				systemStatistics(),
				systemEmailSubscription(),
				systemDataImportExport(),
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
				itemWorkDuration(120),
				itemRevisionPeriod(60),
				onlineSecurityPatch(180),
				onlineCRUD(30),
				systemAdminKind('master'),
				systemUserKind(12),
				systemAuthorization(),
				systemValidation(),
				systemStatistics(),
				systemEmailSubscription(),
				systemDataImportExport(),
				systemDesktopMobileApp(),
				systemSocialLogin(),
				systemRestAPI(),
				systemBacklog()
			]
		}
	]
}