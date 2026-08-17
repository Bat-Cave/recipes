import Link from "next/link";
import { RecipeTime } from "@/components/recipe-time";
import type { Recipe } from "../types";

const slug = "slow-cooker-texas-pulled-pork";
const servings = 8;
const servingUnits: [string, string] = ["sandwich", "sandwiches"];

const ingredients: Recipe["ingredients"] = [
	{
		name: "vegetable oil",
		quantity: 1,
		unit: "tsp",
		alternatives: ["olive oil", "avocado oil"],
	},
	{ name: "pork shoulder roast", quantity: 4, unit: "lb" },
	{ name: "barbecue sauce", quantity: 1, unit: "cup" },
	{ name: "apple cider vinegar", quantity: 0.5, unit: "cup" },
	{ name: "chicken broth", quantity: 0.5, unit: "cup" },
	{ name: "light brown sugar", quantity: 0.25, unit: "cup" },
	{ name: "prepared yellow mustard", quantity: 1, unit: "tbsp" },
	{ name: "Worcestershire sauce", quantity: 1, unit: "tbsp" },
	{ name: "chili powder", quantity: 1, unit: "tbsp" },
	{ name: "extra large onion, chopped", quantity: 1, unit: "whole" },
	{ name: "garlic, crushed", quantity: 2, unit: "clove" },
	{ name: "dried thyme", quantity: 1.5, unit: "tsp" },
	{ name: "hamburger buns, split", quantity: 8, unit: "" },
	{ name: "butter, or as needed", quantity: 2, unit: "tbsp" },
];

export const recipe: Recipe = {
	slug,
	title: "Slow Cooker Texas Pulled Pork",
	publishedAt: "2026-08-17T00:00:00.000Z",
	category: "main-dishes",
	revisedFrom: undefined,
	sourceUrl:
		"https://www.allrecipes.com/recipe/92462/slow-cooker-texas-pulled-pork/",
	acknowledgments: ["Allrecipes"],
	servings,
	servingUnits,
	ingredients,
	prepTime: 15,
	cookTime: "600-720",
	steps: [
		"Pour vegetable oil into the bottom of a slow cooker. Place the pork roast in the slow cooker.",
		"Pour in barbecue sauce, apple cider vinegar, and chicken broth. Stir in brown sugar, yellow mustard, Worcestershire sauce, chili powder, onion, garlic, and thyme.",
		<span key="cook-pork">
			Cover and cook on Low for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "3",
					name: "Cook on Low until the pork shreds easily.",
				}}
				range={[600, 720]}
			/>{" "}
			or on High for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "3",
					name: "Cook on High until the pork shreds easily.",
				}}
				range={[300, 360]}
			/>{" "}
			until the pork shreds easily with a fork.
		</span>,
		"Remove the pork from the slow cooker and shred the meat using two forks. Return the shredded pork to the slow cooker and stir to combine with the juices.",
		<span key="toast-buns">
			Spread the inside of both halves of the hamburger buns with butter. Toast
			the buns, butter-side down, in a skillet over medium heat until golden
			brown. Spoon pulled pork into the toasted buns. Especially good with{" "}
			<Link href="/recipes/coleslaw">coleslaw</Link>
			.
		</span>,
	],
};
