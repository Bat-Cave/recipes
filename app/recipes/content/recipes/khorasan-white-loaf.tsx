import { ReactiveIngredient } from "@/components/ingredients";
import { RecipeTemperature } from "@/components/recipe-temperature";
import { RecipeTime } from "@/components/recipe-time";
import type { Recipe } from "../types";

const slug = "khorasan-white-loaf";
const servings = 1;
const servingUnits: [string, string] = ["loaf", "loaves"];

const ingredients: Recipe["ingredients"] = [
	{ name: "White Khorasan flour", quantity: 3, unit: "cup" },
	{ name: "instant or active dry yeast", quantity: 1, unit: "tsp" },
	{ name: "warm water", quantity: 1.5, unit: "cup" },
	{ name: "honey", quantity: 2, unit: "tbsp" },
	{
		name: "coconut oil",
		quantity: 2,
		unit: "tbsp",
		alternatives: ["butter"],
	},
	{ name: "salt", quantity: 1.5, unit: "tsp" },
];

export const recipe: Recipe = {
	slug,
	title: "Khorasan White Loaf",
	publishedAt: "2026-07-22T16:07:00.000Z",
	category: "breads",
	servings,
	servingUnits,
	ingredients,
	acknowledgments: ["Khorasan Mills"],
	sourceUrl:
		"https://www.khorasanmills.com/blogs/recipe-1/khorasan-white-loaf",
	prepTime: "90-150",
	cookTime: "35-40",
	steps: [
		"This recipe begins with a sponge to improve gluten structure and flavor.",
		<span key="mix-sponge">
			Mix together{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={2}
				servings={servings}
				ingredients={ingredients}
			/>
			,{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={1}
				servings={servings}
				ingredients={ingredients}
			/>
			,{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={3}
				servings={servings}
				ingredients={ingredients}
			/>
			, and{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={0}
				servings={servings}
				quantity={1.5}
				omitName
				ingredients={ingredients}
			/>{" "}
			of the flour.
		</span>,
		<span key="stir-batter">
			Stir for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "3",
					name: "Stir for 1–2 minutes until it forms a batter.",
				}}
				range={[1, 2]}
			/>{" "}
			until it forms a batter.
		</span>,
		<span key="sponge-rise">
			Let sit for{" "}
			<RecipeTime
				time={30}
				step={{ number: "4", name: "Let sit for 30 minutes." }}
				range={undefined}
			/>
			.
		</span>,
		<span key="add-remaining">
			Add remaining{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={0}
				servings={servings}
				quantity={1.5}
				omitName
				ingredients={ingredients}
			/>{" "}
			flour,{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={5}
				servings={servings}
				ingredients={ingredients}
			/>
			, and{" "}
			<ReactiveIngredient
				slug={slug}
				ingredientIndex={4}
				servings={servings}
				ingredients={ingredients}
			/>{" "}
			(or butter).
		</span>,
		"If using both oil and butter, use 1 Tbsp of each.",
		<span key="knead">
			Knead for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "7",
					name: "Knead for 2–3 minutes with a mixer (low–medium speed).",
				}}
				range={[2, 3]}
			/>{" "}
			with a mixer (low–medium speed), or{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "7",
					name: "Knead for 3–4 minutes by hand.",
				}}
				range={[3, 4]}
			/>{" "}
			by hand.
		</span>,
		"Dough should be soft but not sticky. Add a small amount of flour if needed.",
		"Place dough in a greased bowl and cover.",
		<span key="second-rise">
			Let rise for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "10",
					name: "Let rise for 30–60 minutes, until nearly doubled.",
				}}
				range={[30, 60]}
			/>
			, until nearly doubled.
		</span>,
		"Note: White Khorasan rises more slowly than modern wheat—be patient.",
		"Form dough into a loaf and place in a pan.",
		<span key="third-rise">
			Let rise until dough is 1/2–1 inch above the pan (
			<RecipeTime
				time={undefined}
				step={{
					number: "13",
					name: "Let rise until dough is 1/2–1 inch above the pan (30–60 minutes).",
				}}
				range={[30, 60]}
			/>
			).
		</span>,
		<span key="bake">
			Bake at <RecipeTemperature temperature={350} /> for{" "}
			<RecipeTime
				time={undefined}
				step={{
					number: "14",
					name: "Bake at 350°F for 35–40 minutes.",
				}}
				range={[35, 40]}
			/>
			.
		</span>,
	],
};
