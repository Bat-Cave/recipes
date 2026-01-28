// The keys of the ingredients object should be the same as the slug of the recipe. The slug of the recipe is the name of the mdx file without the extension.

export const ingredients: Record<string, Ingredient[]> = {
	"basic-bread": [
		{ name: "really warm water", quantity: 6, unit: "cup" },
		{
			name: "canola oil",
			quantity: 0.6667,
			unit: "cup",
			alternatives: ["olive oil"],
		},
		{ name: "honey", quantity: 0.6667, unit: "cup" },
		{ name: "salt", quantity: 2, unit: "tbsp" },
		{ name: "instant yeast", quantity: 3, unit: "tbsp" },
		{ name: "white flour", quantity: 8, unit: "cup" },
	],
};

export type Ingredient = {
	name: string;
	quantity: number;
	unit: IngredientUnit;
	alternatives?: string[];
};

export type IngredientUnit =
	| "cup"
	| "tbsp"
	| "tsp"
	| "fl oz"
	| "oz"
	| "lb"
	| "g"
	| "kg"
	| "ml"
	| "l"
	| "pt"
	| "qt"
	| "gal"
	| "pinch"
	| "dash"
	| "can"
	| "pkg"
	| "box"
	| "bunch"
	| "clove"
	| "head"
	| "stalk"
	| "slice"
	| "piece"
	| "whole"
	| "half"
	| "quarter"
	| "doz"
	| "handful"
	| "sprig"
	| "leaf"
	| "strip"
	| "unit"
	| "to taste"
	| "as needed";

export interface UnitDefinition {
	name: string;
	value: IngredientUnit;
	plural: string;
}

export const unitDefinitions: UnitDefinition[] = [
	{ name: "Cup", value: "cup", plural: "Cups" },
	{ name: "Tablespoon", value: "tbsp", plural: "Tablespoons" },
	{ name: "Teaspoon", value: "tsp", plural: "Teaspoons" },
	{ name: "Fluid Ounce", value: "fl oz", plural: "Fluid Ounces" },
	{ name: "Ounce", value: "oz", plural: "Ounces" },
	{ name: "Pound", value: "lb", plural: "Pounds" },
	{ name: "Gram", value: "g", plural: "Grams" },
	{ name: "Kilogram", value: "kg", plural: "Kilograms" },
	{ name: "Milliliter", value: "ml", plural: "Milliliters" },
	{ name: "Liter", value: "l", plural: "Liters" },
	{ name: "Pint", value: "pt", plural: "Pints" },
	{ name: "Quart", value: "qt", plural: "Quarts" },
	{ name: "Gallon", value: "gal", plural: "Gallons" },
	{ name: "Pinch", value: "pinch", plural: "Pinches" },
	{ name: "Dash", value: "dash", plural: "Dashes" },
	{ name: "Can", value: "can", plural: "Cans" },
	{ name: "Package", value: "pkg", plural: "Packages" },
	{ name: "Box", value: "box", plural: "Boxes" },
	{ name: "Bunch", value: "bunch", plural: "Bunches" },
	{ name: "Clove", value: "clove", plural: "Cloves" },
	{ name: "Head", value: "head", plural: "Heads" },
	{ name: "Stalk", value: "stalk", plural: "Stalks" },
	{ name: "Slice", value: "slice", plural: "Slices" },
	{ name: "Piece", value: "piece", plural: "Pieces" },
	{ name: "Whole", value: "whole", plural: "Wholes" },
	{ name: "Half", value: "half", plural: "Halves" },
	{ name: "Quarter", value: "quarter", plural: "Quarters" },
	{ name: "Dozen", value: "doz", plural: "Dozens" },
	{ name: "Handful", value: "handful", plural: "Handfuls" },
	{ name: "Sprig", value: "sprig", plural: "Sprigs" },
	{ name: "Leaf", value: "leaf", plural: "Leaves" },
	{ name: "Strip", value: "strip", plural: "Strips" },
	{ name: "Unit", value: "unit", plural: "Units" },
	{ name: "To Taste", value: "to taste", plural: "To Taste" },
	{ name: "As Needed", value: "as needed", plural: "As Needed" },
];
