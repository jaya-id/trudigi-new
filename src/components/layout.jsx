import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from 'react-helmet';

export default ({ children, seo }) => (
	<div>
		<Helmet>
			{/* General tags */}
			{seo && seo.title ? <title>{seo.title}</title> : null}
			{seo && seo.description ? <meta name="description" content={seo.description} /> : null}
			{seo && seo.image ? <meta name="image" content={seo.image} /> : null}
			{seo && seo.url ? <link rel="canonical" href={seo.url} /> : null}	{/* OpenGraph tags */}
			{seo && seo.url ? <meta property="og:url" content={seo.url} /> : null}
			{seo && seo.title ? <meta property="og:title" content={seo.title} /> : null}
			{seo && seo.description ? <meta property="og:description" content={seo.description} /> : null}
			{seo && seo.image ? <meta property="og:image" content={seo.image} /> : null}	{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			{seo && seo.title ? <meta name="twitter:title" content={seo.title} /> : null}
			{seo && seo.description ? <meta name="twitter:description" content={seo.description} /> : null}
			{seo && seo.image ? <meta name="twitter:image" content={seo.image} /> : null}
		</Helmet>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</div>
)