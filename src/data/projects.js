const projects = [
	{
		id: "minibank",
		title: "Aplikasi Minibank",
		product: "ecommerce",
		teams: [
			'wellosoft'
		],
		content: (<>
			<p>
				Karya <b>Aplikasi Web</b> Kolaburasi <b>TRUDIGI × Wello Soft</b>
			</p>
			<img className="img-round" src="/images/placeholder.png"></img> x <img className="img-round" src="/images/placeholder.png"></img>
			<p>
				Aplikasi Minibank adalah aplikasi yang digunakan untuk keperluan moneter dalam tempat tertentu seperti asrama ataupun koperasi.
			</p>
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<img className="thumb" src="/images/minibank-1.png"></img>
					</div>
					<div className="col-sm-6">
						<img className="thumb" src="/images/minibank-2.png"></img>
					</div>
				</div>
			</div>
			<p>
				Aplikasi ini memiliki fitur dimana user bisa topup dan menarik uang di tempat serta menyimpan data keuangan dalam aplikasi. Selain itu aplikasi ini dapat melihat barang yang tersedia dalam koperasi dan memesan barang tersebut melalui uang yang tersimpan dalam akun masing masing user. Di bagian Admin, difasilitasi dashboard untuk melihat transaksi pending atau membutuhkan konfirmasi (seperti untuk penyetoran uang atau pengambilan barang) serta penghitungan kumulatif untuk semua member serta laporan rutinan.
			</p>
			<h5>
				Aplikasi Minibank adalah hasil karya Kolaburasi <b>TRUDIGI × Wello Soft</b>.
			</h5>
			<p>Ingin membangun Aplikasi Web serupa untuk bisnis anda?</p>
		</>)
	}
]

exports.default = projects.reduce((a, b) => {
	a[b.id] = b
	return a
}, {});