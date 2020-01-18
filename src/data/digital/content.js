import items from '../shared/items'

export default {
	title: "DIGITAL CONTENT",
	summary: "Digital Content adalah media interaktif yang ditujukan untuk menyampaikan suatu informasi",
	models: [
		{
			name: "Simple",
			summary: "Media Berbasis Konten Tekstual",
			price: 350000,
			examples: [
				"- Informasi Interaktif",
                "- Buku Digital",
                "- Kuis Pilihan Ganda"
			],
			items: [
				items.itemWorkDuration(21)
			]
		},
		{
			name: "Interactive",
			summary: "Media Berbasis Grafis Bergerak",
			price: 700000,
			examples: [
				"- Puzzle",
                "- Konten Edukatif Sederhana",
                "- Tebak Gambar"
			],
			items: [
				items.itemWorkDuration(30)
			]
		},
		{
			name: "Action",
			summary: "Media Berbasis Permainan Grafis Interaktif",
			price: 1500000,
			examples: [
				"- Endless Game",
				"- Arcade Game"
			],
			items: [
				items.itemWorkDuration(60)
			]
		},
		{
			name: "Story",
			summary: "Media Berbasis Dunia Petualangan",
			price: 3000000,
			examples: [
				"- Mario/Zelda-Like Games",
                "- Konten berbasis Petualangan"
			],
			items: [
				items.itemWorkDuration(120)
			]
		},
		{
			name: "Studio",
			summary: "Media Berbasis Kekompakan/Multiplayer",
			price: 10000000,
			examples: [
				"- Racing Game",
                "- RPG",
                "- Game berbasis Multiplayer"
			],
			items: [
				items.itemWorkDuration(180)
			]
		}
	]
}