import type { Recipe } from "../types";

const slug = "korean-ground-beef-rice-bowls";
const servings = 4;
const servingUnits: [string, string] = ["serving", "servings"];

const ingredients: Recipe["ingredients"] = [
	{ name: "lean ground beef (90% lean)", quantity: 1, unit: "lb" },
	{ name: "garlic, minced", quantity: 3, unit: "clove" },
	{ name: "packed brown sugar", quantity: 0.25, unit: "cup" },
	{ name: "reduced-sodium soy sauce", quantity: 0.25, unit: "cup" },
	{ name: "sesame oil", quantity: 2, unit: "tsp" },
	{ name: "ground ginger", quantity: 0.25, unit: "tsp" },
	{ name: "crushed red pepper flakes", quantity: 0.25, unit: "tsp" },
	{ name: "pepper", quantity: 0.25, unit: "tsp" },
	{
		name: "hot cooked white or brown rice",
		quantity: 2,
		unit: "cup",
		alternatives: ["jasmine rice"],
	},
	{ name: "sliced green onions", quantity: 1, unit: "as needed" },
	{ name: "sesame seeds", quantity: 1, unit: "as needed" },
];

export const recipe: Recipe = {
	slug,
	title: "Korean Ground Beef and Rice Bowls",
	publishedAt: "2026-07-29T00:00:00.000Z",
	category: "main-dishes",
	revisedFrom: undefined,
	sourceUrl: "https://therecipecritic.com/korean-ground-beef-rice-bowls/",
	acknowledgments: ["Alyssa Rivers / The Recipe Critic"],
	servings,
	servingUnits,
	ingredients,
	prepTime: 5,
	cookTime: "15",
	steps: [
		"In a large skillet, cook the ground beef and garlic over medium heat, breaking it into crumbles, until no longer pink. Drain the grease.",
		"In a small bowl, whisk together brown sugar, soy sauce, sesame oil, ginger, red pepper flakes, and pepper. Pour over the ground beef and simmer for 1–2 minutes.",
		"Serve over hot rice and garnish with green onions and sesame seeds.",
	],
};
