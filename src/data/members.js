const members = [
	{
		id: "willnode",
		name: "Wildan M",
		skill: "ecommerce",
		teams: [
			'wellosoft'
		],
		projects: [
			'minibank'
		],
	}
]

exports.default = members.reduce((a,b)=> (a[b.id]=b,a),{});