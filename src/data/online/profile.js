
import {
	itemWorkDuration,
	itemRevisionPeriod,
	onlineSecurityPatch,
	onlineCRUD,
	profileCustomPages,
	profileMulti,
	profilePostType
} from '../shared'

const promises = {
	sourceCode: {
		title: "Source Code",
		description: "Kami bagikan file mentahan yang bisa diedit untuk jangka panjang",
	},
	responsive: {
		title: "Responsive",
		description: "Layout sesuai untuk ditampilkan di desktop maupun smartphone",
	},
	seo: {
		title: "SEO Optimized",
		description: "Website memenuhi persyaratan agar terangking baik di Google",
	},
	static: {
		title: "Website Statis",
		description: "Website tanpa back-end sehingga bisa langsung dipasang tanpa membeli hosting"
	},
	dynamic: {
		title: "Website Dinamis",
		description: "Website dengan backend untuk manajemen konten yang lebih praktis"
	},
	security: {
		title: "Standar Keamanan Tinggi",
		description: "Back-end dijamin bebas dari serangan DOS, XSS dan SQL Injection",
	}
}

export default {
	title: "Online Profile",
	summary: "Kami melayasi jasa pembuatan Website untuk Profil individu maupun Instansi dengan desain modern sesuai dengan budget dan kebutuhan anda.",
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
					title: "Halaman Landing (satu halaman)",
					image: "/images/placeholder.png"
				}
			],
			items: [
				itemWorkDuration(15),
				itemRevisionPeriod(5),
				profileCustomPages(1),
			],
			promises: [
				promises.static,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
			]
		},
		{
			name: "Casual",
			summary: "Untuk Profil dilengkapi dengan sistem artikel atau galeri",
			price: 400000,
			examples: [
				{
					title: "Profil Startup",
					image: "/images/placeholder.png"
				},
				{
					title: "Galeri Artwork",
					image: "/images/placeholder.png"
				}
			],
			items: [
				itemWorkDuration(21),
				itemRevisionPeriod(10),
				profileCustomPages(5),
				profilePostType('post')
			],
			promises: [
				promises.static,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
			]
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
				itemWorkDuration(35),
				itemRevisionPeriod(15),
				profileCustomPages(10),
				onlineCRUD(5),
				profilePostType('multi')
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			]
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
				itemWorkDuration(75),
				itemRevisionPeriod(30),
				onlineSecurityPatch(90),
				profileCustomPages(25),
				onlineCRUD(15),
				profilePostType('complete'),
				profileMulti(),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			]
		},
		{
			name: "Forensik",
			summary: "Untuk profil memuat data dan analisa yang bisa dikonsumsi oleh publik",
			price: 6000000,
			examples: [
				{
					title: "Badan Statistik",
					image: "/images/placeholder.png"
				},
				{
					title: "Web Audit atau Analisa Publik",
					image: "/images/placeholder.png"
				}
			],
			items: [
				itemWorkDuration(120),
				itemRevisionPeriod(60),
				onlineSecurityPatch(180),
				profileCustomPages(40),
				onlineCRUD(30),
				profilePostType('complete'),
				profileMulti(),
			],
			promises: [
				promises.dynamic,
				promises.sourceCode,
				promises.responsive,
				promises.seo,
				promises.security,
			]
		}
	],

}