import cardSeeder from "./seeder/cardSeeder.js";

const seedAll = async () => {
	await cardSeeder();
}

seedAll();
