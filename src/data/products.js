const products = [
	{
		id: "web",
		title: "Aplikasi Web",
		teams: [
		],
		projects: [
		]
	}, {
		id: "design",
		title: "Graphic Design",
		teams: [
		],
		projects: [
		]
	}, {
		id: "ecommerce",
		title: "E-Commerce",
		teams: [
			'wellosoft'
		],
		projects: [
			'minibank'
		]
	}, {
		id: "video",
		title: "Video",
		teams: [
		],
		projects: [
		]
	}
]


exports.default = products.reduce((a, b) => {
	a[b.id] = b
	return a
}, {});