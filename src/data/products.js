const products = [
	{
		id: "ecommerce",
		title: "E-Commerce",
		teams: [
			'wellosoft'
		],
		projects: [
			'minibank'
		],
	}
]


exports.default = products.reduce((a,b)=> (a[b.id]=b,a),{});