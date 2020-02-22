const projects = [
	{
		id: "minibank",
		title: "Aplikasi Minibank",
		product: "ecommerce",
		teams: [
			'wellosoft'
		]
	}
]

exports.default = projects.reduce((a,b)=> (a[b.id]=b,a),{});