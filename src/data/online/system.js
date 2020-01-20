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
			name: "Private",
			summary: "Aplikasi Untuk Menyimpan Data Pribadi",
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
			name: "Mini",
			summary: "Sistem untuk Komunikasi dengan Pengguna",
			price: 700000,
			examples: [
				{
					title: "Aplikasi Membership",
					image: "/images/placeholder.png"
				}, {
					title: "Aplikasi Pendaftaran",
					image: "/images/placeholder.png"
				},
			],
			items: [
				items.itemWorkDuration(30),
				items.itemRevisionPeriod(10),
				items.onlineCRUD(5),
				items.systemAdminKind('admin'),
				items.systemUserKind(1),
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
				technologies.mySql,
			],
		},
		{
			name: "Internal",
			summary: "Sistem untuk Komunikasi antar Pengguna",
			price: 1600000,
			examples: [
				{
					title: "Sistem Rekap Nilai",
					image: "/images/placeholder.png"
				}, {
					title: "Sistem Moderasi Akun",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(60),
				items.itemRevisionPeriod(15),
				items.onlineSecurityPatch(30),
				items.onlineCRUD(15),
				items.systemAdminKind('master'),
				items.systemUserKind(3),
				items.systemValidation(),
				items.systemDataImportExport(),
				items.systemEmailSubscription(),
				items.systemDesktopMobileAppIYW()
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
				technologies.createReactApp,
				technologies.laravel,
				technologies.cloudflare,
				technologies.googleAnalytics,
				technologies.electron
			],
		},
		{
			name: "Moderate",
			summary: "Sistem untuk Membangun Data antar Pengguna",
			price: 3200000,
			examples: [
				{
					title: "Sistem Audit",
					image: "/images/placeholder.png"
				}, {
					title: "Sistem Manajemen Surat",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(90),
				items.itemRevisionPeriod(30),
				items.onlineSecurityPatch(120),
				items.onlineCRUD(30),
				items.systemAdminKind('master'),
				items.systemUserKind(5),
				items.systemValidation(),
				items.systemDataImportExport(),
				items.systemEmailSubscription(),
				items.systemDesktopMobileAppIYW()
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.security
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
				technologies.createReactApp,
				technologies.laravel,
				technologies.cloudflare,
				technologies.googleAnalytics,
				technologies.electron,
				technologies.firebase,
				technologies.flutter
			],
		},
		{
			name: "Citizen",
			summary: "Platform Untuk Netizen Internet",
			price: 9200000,
			examples: [
				{
					title: "Sistem Pengelolaan Survey atau Statistik",
					image: "/images/placeholder.png"
				}, {
					title: "Forum Internal",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(120),
				items.itemRevisionPeriod(60),
				items.onlineSecurityPatch(180),
				items.onlineCRUD(45),
				items.systemAdminKind('master'),
				items.systemUserKind(7),
				items.systemAuthorization(),
				items.systemValidation(),
				items.systemDataImportExport(),
				items.systemDesktopMobileApp(),
				items.systemEmailSubscription(),
				items.systemSocialLogin(),
				items.systemRestAPI(),
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
				technologies.laravel,
				technologies.mySql,
				technologies.createReactApp,
				technologies.cloudflare,
				technologies.googleAnalytics,
				technologies.electron,
				technologies.firebase,
				technologies.flutter,
				technologies.mailchimp

			],
		},
		{
			name: "Enterprise",
			summary: "Platform Untuk Bisnis dalam Internet",
			price: 24800000,
			examples: [
				{
					title: "Sistem Audit",
					image: "/images/placeholder.png"
				}, {
					title: "Sistem Manajemen Surat",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(240),
				items.itemRevisionPeriod(120),
				items.onlineSecurityPatch(360),
				items.onlineCRUD(90),
				items.systemAdminKind('master'),
				items.systemUserKind(10),
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
				technologies.createReactApp,
				technologies.laravel,
				technologies.cloudflare,
				technologies.googleAnalytics,
				technologies.electron,
				technologies.firebase,
				technologies.flutter
			]
		}
	]
}