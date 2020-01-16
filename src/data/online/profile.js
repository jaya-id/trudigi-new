
import {
	itemWorkDuration,
	itemRevisionPeriod,
	onlineSecurityPatch,
	onlineCRUD,
	profileCustomPages,
	profileMulti,
	profilePostType,
	profileStatistics
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
	},
}

const technologies = {
	html5: {
		title: "HTML5",
		description: "Kami menggunakan spesifikasi HTML terbaru (native tanpa plugin) untuk interaksi yang cepat, modern dan relevan"
	},
	bootstrap: {
		title: "Bootstrap",
		description: "Bootstrap adalah framework yang memungkinkan tampilan responsif dan mudah beradaptasi untuk desktop maupun mobile"
	},
	createReactApp: {
		title: "Create React App",
		description: "Create React App memungkinkan penggunaan React, framework front-end untuk interaksi website statis satu halaman yang kompleks"
	},
	gatsby: {
		title: "Gatsby.JS",
		description: "Gatsby.JS memungkinkan penggunaan React, framework front-end untuk interaksi website statis multi halaman yang kompleks"
	},
	jekyll: {
		title: "Jekyll",
		description: "Jekyll adalah Content Site Generator yang digunakan untuk membangun website statis (tanpa backend) dan kompatibel dengan layanan hosting statis seperti GitHub Pages"
	},
	codeIgniter: {
		title: "CodeIgniter",
		description: "CodeIgniter adalah Framework Backend berbasis PHP popular yang ringan serta mudah untuk dikostumisasi dan dikelola"
	},
	mySql: {
		title: "MySQL",
		description: "MySQL adalah server yang sangat popular untuk menyimpan data relasional, dan biasanya sepaket dengan pembelian hosting PHP"
	},
	googleAnalytics: {
		title: "Google Analytics",
		description: "Google Analytics adalah tracking service gratis dan dapat dipasang disetiap halaman untuk mengukur traffic website secara kumulatif maupun realtime"
	},
	disqus: {
		title: "Disqus",
		description: "Disqus adalah platform gratis untuk menambahkan bagian comment pada tiap posting"
	},
	cloudflare: {
		title: "Cloudflare",
		description: "Setelah anda membeli hosting, anda dapat mem-proxy server ke layanan Cloudflare untuk Optimasi Cache, HTTPS dan proteksi dari DDOS secara gratis"
	},
	mailchimp: {
		title: "Mailchimp",
		description: "Mailchimp adalah layanan email marketing gratis (dengan batasan) yang bisa digunakan untuk mengirim email kepada subscriber tentang konten baru dalam website"
	},
	laravel: {
		title: "Laravel",
		description: "Laravel adalah Framework PHP Modern yang lebih modular dan biasa dipakai jika website juga membutuhkan interaksi Front-end Framework seperti React"
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
				profileStatistics(),
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