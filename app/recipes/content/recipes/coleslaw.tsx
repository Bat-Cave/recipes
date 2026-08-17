import Link from "next/link";
import { RecipeTime } from "@/components/recipe-time";
import type { Recipe } from "../types";

const slug = "coleslaw";
const servings = 8;
const servingUnits: [string, string] = ["serving", "servings"];

const ingredients: Recipe["ingredients"] = [
	{
		name: "small cabbage, shredded and chopped",
		quantity: 1,
		unit: "head",
		alternatives: ["pre-shredded coleslaw mix"],
	},
	{ name: "large carrot, shredded", quantity: 1, unit: "whole" },
	{ name: "mayonnaise", quantity: 1, unit: "cup" },
	{
		name: "granulated sugar",
		quantity: 0.333,
		unit: "cup",
		alternatives: ["honey", "maple syrup"],
	},
	{
		name: "apple cider vinegar",
		quantity: 2,
		unit: "tbsp",
		alternatives: ["white vinegar", "rice vinegar", "fresh lemon juice"],
	},
	{ name: "fresh lemon juice", quantity: 1.5, unit: "tsp" },
	{ name: "salt, more or less to taste", quantity: 1, unit: "tsp" },
	{ name: "pepper, more or less to taste", quantity: 0.125, unit: "tsp" },
];

export const recipe: Recipe = {
	slug,
	title: "Coleslaw",
	publishedAt: "2026-08-17T00:00:00.000Z",
	category: "soups-salads",
	revisedFrom: undefined,
	sourceUrl:
		"https://www.askchefdennis.com/best-cole-slaw-coleslaw/#wprm-recipe-container-117225",
	acknowledgments: ["Ask Chef Dennis"],
	servings,
	servingUnits,
	ingredients,
	prepTime: 15,
	cookTime: undefined,
	steps: [
		"Cut the cabbage in half and remove the core. Slice it as thin as possible, then chop the slices into small pieces. Place the cabbage in a large mixing bowl. A food processor or box grater also works for the cabbage and carrot.",
		<span key="salt-cabbage">
			Optional: lightly salt the shredded cabbage for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "2",
					name: "Salt the cabbage to draw out moisture.",
				}}
				range={[20, 30]}
			/>{" "}
			to draw out excess moisture, then drain and squeeze out the liquid. This
			helps keep the slaw from getting watery.
		</span>,
		"In a medium bowl, combine mayonnaise, sugar, vinegar, lemon juice, salt, and pepper. Mix until smooth and creamy.",
		"Add the shredded carrot to the cabbage. Pour the dressing over the cabbage mixture and mix until everything is thoroughly coated.",
		<span key="chill-slaw">
			Cover and refrigerate for at least{" "}
			<RecipeTime
				time={240}
				step={{
					number: "5",
					name: "Chill the coleslaw so the flavors meld.",
				}}
			/>
			, or overnight. Mix a few times as it sits. Especially good on{" "}
			<Link href="/recipes/slow-cooker-texas-pulled-pork">
				Slow Cooker Texas Pulled Pork
			</Link>{" "}
			sandwiches.
		</span>,
	],
};
