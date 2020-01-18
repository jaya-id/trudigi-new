
import items from '../shared/items'

import promises from '../shared/promises'

import technologies from '../shared/technologies'

export default {
	title: "Online Profile",
	summary: "Kami melayasi jasa pembuatan Website untuk Profil individu maupun Instansi dengan desain modern sesuai dengan budget dan kebutuhan anda.",
	background: "/images/template.jpg",
	url: "/online/profile",
	theme: "primary",
	models: [
		{
			name: "Minimalis",
			summary: "Untuk Profil berdesain Minimalis Satu Halaman",
			price: 200000,
			examples: [
				{
					title: "Curriculum Vitae",
					image: "/images/placeholder.png"
				},
				{
					title: "Landing Page (satu halaman)",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(15),
				items.itemRevisionPeriod(5),
				items.profileCustomPages(1),
			],
			promises: [
				promises.static,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.jekyll,
				technologies.createReactApp,
				technologies.googleAnalytics,
			],
		},
		{
			name: "Casual",
			summary: "Untuk Profil dilengkapi dengan koleksi artikel atau galeri",
			price: 400000,
			examples: [
				{
					title: "Profil Startup",
					image: "/images/placeholder.png"
				},
				{
					title: "Galeri Artwork",
					image: "/images/placeholder.png"
				},
				{
					title: "Order Produk (tanpa register)",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(21),
				items.itemRevisionPeriod(10),
				items.profileCustomPages(5),
				items.profilePostType('post')
			],
			promises: [
				promises.static,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.jekyll,
				technologies.gatsby,
				technologies.googleAnalytics,
				technologies.disqus,
			],
		},
		{
			name: "Business",
			summary: "Untuk Profil dengan konten dinamis",
			price: 800000,
			examples: [
				{
					title: "Profil Instansi dan Organisasi",
					image: "/images/placeholder.png"
				},
				{
					title: "Blogging Platform",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(35),
				items.itemRevisionPeriod(15),
				items.profileCustomPages(10),
				items.onlineCRUD(5),
				items.profilePostType('multi')
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
				technologies.googleAnalytics,
				technologies.disqus,
				technologies.cloudflare,
			],
		},
		{
			name: "Enterprise",
			summary: "Untuk profil dinamis memuat berbagai jenis konten terpisah tersubdivisi",
			price: 2400000,
			examples: [
				{
					title: "Profil Sekolah, Institusi dan Yayasan",
					image: "/images/placeholder.png"
				},
				{
					title: "Profil Induk Organisasi atau Komunitas Besar",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(75),
				items.itemRevisionPeriod(30),
				items.onlineSecurityPatch(90),
				items.profileCustomPages(25),
				items.onlineCRUD(15),
				items.profilePostType('complete'),
				items.profileMulti(),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.mySql,
				technologies.googleAnalytics,
				technologies.disqus,
				technologies.cloudflare,
				technologies.mailchimp,
			],
		},
		{
			name: "Forensik",
			summary: "Untuk profil memuat data dan analisa yang bisa dikonsumsi oleh publik",
			price: 4800000,
			examples: [
				{
					title: "Badan Statistik",
					image: "/images/placeholder.png"
				},
				{
					title: "Web Layanan Publik",
					image: "/images/placeholder.png"
				}
			],
			items: [
				items.itemWorkDuration(120),
				items.itemRevisionPeriod(60),
				items.onlineSecurityPatch(180),
				items.profileCustomPages(40),
				items.onlineCRUD(30),
				items.profilePostType('complete'),
				items.profileMulti(),
				items.profileStatistics(),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			],
			technologies: [
				technologies.html5,
				technologies.bootstrap,
				technologies.codeIgniter,
				technologies.laravel,
				technologies.mySql,
				technologies.googleAnalytics,
				technologies.disqus,
				technologies.cloudflare,
				technologies.mailchimp,
			],
		}
	],

}