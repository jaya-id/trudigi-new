const teams = [
	{
		id: "wellosoft",
		title: "Wello Soft",
		products: [
			"ecommerce"
		],
		members: [
			'willnode'
		],
		projects: [
			'minibank'
		],
	}
]

exports.default = teams.reduce((a, b) => {
	a[b.id] = b
	return a
}, {});