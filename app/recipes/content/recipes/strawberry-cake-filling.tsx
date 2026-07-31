import type { Recipe } from "../types";

const slug = "strawberry-cake-filling";
const servings = 2.5;
const servingUnits: [string, string] = ["cup", "cups"];

const ingredients: Recipe["ingredients"] = [
	{
		name: "fresh strawberries, finely chopped",
		quantity: 3,
		unit: "cup",
		alternatives: ["frozen strawberries"],
	},
	{ name: "granulated sugar", quantity: 0.5, unit: "cup" },
	{ name: "freshly squeezed lemon juice", quantity: 1, unit: "tbsp" },
	{ name: "cornstarch", quantity: 1, unit: "tbsp" },
	{ name: "water", quantity: 1.5, unit: "tbsp" },
];

export const recipe: Recipe = {
	slug,
	title: "Strawberry Cake Filling",
	publishedAt: "2026-07-30T00:00:00.000Z",
	category: "desserts",
	revisedFrom: undefined,
	sourceUrl:
		"https://www.frontrangefed.com/easy-and-delicious-homemade-strawberry-cake-filling/",
	acknowledgments: ["Front Range Fed"],
	servings,
	servingUnits,
	ingredients,
	prepTime: 5,
	cookTime: "10",
	steps: [
		"Finely chop the strawberries and strain the liquid.",
		"In a small bowl, stir together the cornstarch and water until fully dissolved. Set aside.",
		"In a medium saucepan, combine the chopped strawberries, sugar, and lemon juice. Heat over medium-low, stirring constantly, until the mixture begins to simmer. Reduce heat to low and simmer lightly until the strawberries start to break apart and the mixture has reduced, about 6–8 minutes.",
		"Add the cornstarch slurry to the strawberries. Stir well and simmer for about 2 minutes, or until the mixture thickens slightly and coats the back of a spoon. Do not overcook — it will continue to thicken as it cools.",
		"Remove from heat, cover, and let cool completely.",
		"Transfer to a container and cover with plastic wrap, pressing it directly onto the surface to prevent a skin from forming. Chill in the refrigerator for at least 12 hours, or overnight, before using.",
		"Use between cake layers, in cupcakes, on ice cream, pancakes, or anywhere you want a sweet strawberry flavor. Makes enough for a three-layer cake.",
	],
};
