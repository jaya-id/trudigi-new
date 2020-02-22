const path = require('path')
const members = require('./src/data/members').default;
const products = require('./src/data/products').default;
const projects = require('./src/data/projects').default;
const teams = require('./src/data/teams').default;
const memberTemplate = path.resolve(`src/templates/members.js`)
const productTemplate = path.resolve(`src/templates/products.js`)
const projectTemplate = path.resolve(`src/templates/projects.js`)
const teamTemplate = path.resolve(`src/templates/teams.js`)

exports.createPages = function ({ actions }) {
	const { createPage } = actions

	Object.keys(members).forEach((m) => {
		const member = members[m];
		createPage({
			// Path for this page — required
			path: `/m/${member.id}`,
			component: memberTemplate,
			context: {
				member
			},
		})
	})

	Object.keys(products).forEach((s) => {
		const product = products[s];
		createPage({
			// Path for this page — required
			path: `/s/${product.id}`,
			component: productTemplate,
			context: {
				product
			},
		})
	})

	Object.keys(projects).forEach((p) => {
		const project = projects[p];
		createPage({
			// Path for this page — required
			path: `/p/${project.id}`,
			component: projectTemplate,
			context: {
				project
			},
		})
	})

	Object.keys(teams).forEach((t) => {
		const team = teams[t];
		createPage({
			// Path for this page — required
			path: `/t/${team.id}`,
			component: teamTemplate,
			context: {
				team
			},
		})
	})

}
