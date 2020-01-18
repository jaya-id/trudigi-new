import items from '../shared/items'

import promises from '../shared/promises'

import technologies from '../shared/technologies'

export default {
	title: "Online System",
	summary: "Online System adalah website yang ditujukan untuk mengatur keluar masuknya informasi dalam lingkup sistem tertentu bergantung pada peran yang diaplikasikan dalam sistem. Ini termasuk sistem yang mengatur pendaftaran, penyewaan, pengelolaan data tertentu. Anda dapat memesan jenis online system yang sesuai dengan kebutuhan dan budget bisnis anda.",
	background: "/images/template.jpg",
	url: "/online/system",
	theme: "danger",
	models: [
		{
			name: "Mini",
			summary: "Sistem untuk Menyimpan Data Pribadi",
			price: 300000,
			examples: [
				{
					title: "Aplikasi Kasir",
					image: "/images/placeholder.png"
				}, {
					title: "Aplikasi Peminjaman",
					image: "/images/placeholder.png"
				},
			],
			items: [
				items.itemWorkDuration(21),
				items.itemRevisionPeriod(7),
				items.onlineCRUD(3),
				items.systemAdminKind('single'),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
			],
		},
		{
			name: "Regular",
			summary: "Sistem untuk Komunikasi dengan Pengguna",
			price: 600000,
			examples: [
				{
					title: "Aplikasi Order atau Membership",
					image: "/images/placeholder.png"
				}, {
					title: "Aplikasi Rental dan Peminjaman",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(30),
				items.itemRevisionPeriod(10),
				items.onlineCRUD(5),
				items.systemAdminKind('admin'),
				items.systemUserKind(1),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.laravel,
				technologies.mySql,
			],
		},
		{
			name: "Complex",
			summary: "Sistem untuk Komunikasi antar Pengguna",
			price: 1500000,
			examples: [
				"Sistem Rekap Nilai -",
				"Sistem Moderasi Akun"
			],
			items: [
				items.itemWorkDuration(60),
				items.itemRevisionPeriod(15),
				items.onlineSecurityPatch(30),
				items.onlineCRUD(7),
				items.systemAdminKind('master'),
				items.systemUserKind(3),
				items.systemAuthorization(),
				items.systemValidation()
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.laravel,
				technologies.mySql,
			],
		},
		{
			name: "Super",
			summary: "Sistem untuk Membangun Data dan Komunikasi dalam Jaringan Bisnis",
			price: 4000000,
			examples: [
				"Sistem Audit",
				"Sistem Manajemen Surat"
			],
			items: [
				items.itemWorkDuration(90),
				items.itemRevisionPeriod(30),
				items.onlineSecurityPatch(90),
				items.onlineCRUD(15),
				items.systemAdminKind('master'),
				items.systemUserKind(6),
				items.systemAuthorization(),
				items.systemValidation(),
				items.systemStatistics(),
				items.systemEmailSubscription(),
				items.systemDataImportExport(),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
			],
		},
		{
			name: "Giant",
			summary: "Sistem untuk Volume Komunitas dan Skala Besar",
			price: 10000000,
			examples: [
				"Sistem Kasir",
				"Sistem Rekap Pribadi"
			],
			items: [
				items.itemWorkDuration(120),
				items.itemRevisionPeriod(60),
				items.onlineSecurityPatch(180),
				items.onlineCRUD(30),
				items.systemAdminKind('master'),
				items.systemUserKind(12),
				items.systemAuthorization(),
				items.systemValidation(),
				items.systemStatistics(),
				items.systemEmailSubscription(),
				items.systemDataImportExport(),
				items.systemDesktopMobileApp(),
				items.systemSocialLogin(),
				items.systemRestAPI(),
				items.systemBacklog()
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
			],
		}
	]
}