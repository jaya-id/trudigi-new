
import items from '../shared/items'

import promises from '../shared/promises'

import technologies from '../shared/technologies'

export default {
	title: "Online Commerce",
	summary: "Online Profile adalah website yang ditujukan untuk mengenalkan pihak tertentu kepada pengguna Internet, termasuk produk, layanan, keanggotan, agenda, galeri, atau informasi publik lainnya. Anda dapat memesan jenis online profile yang sesuai dengan kebutuhan dan budget bisnis anda.",
	background: "/images/template.jpg",
	url: "/online/commerce",
	theme: "warning",
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
	}
]
}