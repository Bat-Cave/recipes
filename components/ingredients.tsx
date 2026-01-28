"use client";

import Fraction from "fraction.js";
import { Minus, Plus, RotateCcw } from "lucide-react";
import {
	ingredients,
	unitDefinitions,
} from "@/app/recipes/content/ingredients";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useRecipeUnitsStore } from "@/stores/recipe-units";
import { useServingsStore } from "@/stores/servings";
import { ButtonGroup } from "./ui/button-group";

export const Ingredients = ({
	slug,
	servings = 1,
	servingUnits = ["serving", "servings"],
}: {
	slug: string;
	servings: number;
	servingUnits?: [string, string];
}) => {
	const { recipeServings, updateRecipeServing } = useServingsStore();
	const { units, updateUnits } = useRecipeUnitsStore();
	const handleUpdateRecipeServing = (srvngs: number) =>
		updateRecipeServing(slug, srvngs);
	const internalServings = recipeServings[slug] ?? servings;
	const recipeIngredients = ingredients[slug];
	if (!recipeIngredients) return null;

	const updateServingAmount = (amount: number) => {
		if (amount < 1) {
			handleUpdateRecipeServing(1);
		} else {
			handleUpdateRecipeServing(amount);
		}
	};

	return (
		<div>
			<div className="flex items-center gap-2">
				<div className="flex items-center justify-between flex-wrap gap-2 mb-4 w-full">
					<span>
						Makes{" "}
						<span
							className={cn(
								"font-semibold font-mono text-amber-800 dark:text-amber-400 transition-colors",
								internalServings === servings &&
									"text-violet-800 dark:text-violet-400",
							)}
						>
							{internalServings}
						</span>{" "}
						{internalServings > 1 ? servingUnits[1] : servingUnits[0]}
					</span>
					{/* <Popover>
						<PopoverTrigger className="text-sm ml-auto underline text-violet-800/70 dark:text-violet-400/70 hover:text-violet-800 dark:hover:text-violet-400">
							adjust servings
						</PopoverTrigger>
						<PopoverContent side="top" align="start" collisionPadding={16}>
							<PopoverHeader>
								<PopoverTitle>Adjust Servings</PopoverTitle>
								<PopoverDescription>
									Adjust the number of servings for this recipe. The ingredients
									and instructions will be adjusted accordingly.
								</PopoverDescription>
							</PopoverHeader>
							<div className="flex items-center gap-2 mt-4">
								<button
									className="btn btn-outline btn-animated size-5 shrink-0 p-1 flex items-center justify-center rounded-sm"
									onClick={() => updateServingAmount(internalServings - 1)}
									disabled={internalServings <= 1}
									title="Decrease servings"
								>
									<Minus />
									<span className="sr-only">Decrease servings</span>
								</button>
								<p className="font-semibold font-mono my-0!">
									{internalServings}
								</p>
								<button
									className="btn btn-outline btn-animated size-5 shrink-0 p-1 flex items-center justify-center rounded-sm"
									onClick={() => updateServingAmount(internalServings + 1)}
									title="Increase servings"
								>
									<Plus />
									<span className="sr-only">Increase servings</span>
								</button>
								{internalServings > 1 ? servingUnits[1] : servingUnits[0]}
								<button
									className="btn btn-outline btn-animated size-5 shrink-0 p-1 flex items-center justify-center rounded-sm ml-auto"
									onClick={() => updateServingAmount(servings)}
									disabled={internalServings === servings}
									title="Reset to original servings"
								>
									<RotateCcw />
									<span className="sr-only">Reset to original servings</span>
								</button>
							</div>
						</PopoverContent>
					</Popover> */}
					<span className="flex items-center flex-wrap gap-2">
						<ButtonGroup>
							<Tooltip delayDuration={500}>
								<TooltipTrigger asChild>
									<button
										className="btn btn-outline btn-animated hover:z-10 shrink-0 flex items-center justify-center rounded-sm disabled:z-0 z-5"
										onClick={() => updateServingAmount(internalServings - 1)}
										disabled={internalServings <= 1}
										title="Decrease servings"
									>
										<Minus className="size-4" />
										<span className="sr-only">Decrease servings</span>
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Decrease servings</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip delayDuration={500}>
								<TooltipTrigger asChild>
									<button
										className="btn btn-outline btn-animated hover:z-10 shrink-0 flex items-center justify-center rounded-sm disabled:z-0 z-5"
										onClick={() => updateServingAmount(internalServings + 1)}
										title="Increase servings"
									>
										<Plus className="size-4" />
										<span className="sr-only">Increase servings</span>
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Increase servings</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip delayDuration={500}>
								<TooltipTrigger asChild>
									<button
										className="btn btn-outline btn-animated hover:z-10 shrink-0 flex items-center justify-center rounded-sm disabled:z-0 z-5"
										onClick={() => updateServingAmount(servings)}
										title="Reset to original servings"
										disabled={internalServings === servings}
									>
										<RotateCcw className="size-4" />
										<span className="sr-only">Reset to original servings</span>
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Reset to original servings</p>
								</TooltipContent>
							</Tooltip>
						</ButtonGroup>
						<ButtonGroup>
							<Tooltip delayDuration={500}>
								<TooltipTrigger asChild>
									<button
										className="btn btn-outline btn-animated shrink-0 flex items-center justify-center rounded-sm disabled:z-0 z-10"
										onClick={() => updateUnits("decimal")}
										disabled={units === "decimal"}
										title="Decimal"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="size-4"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M17 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
											<path d="M10 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
											<path d="M5 16h.01" />
										</svg>
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Decimals</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip delayDuration={500}>
								<TooltipTrigger asChild>
									<button
										className="btn btn-outline btn-animated shrink-0 flex items-center justify-center rounded-sm disabled:z-0 z-10"
										onClick={() => updateUnits("fraction")}
										disabled={units === "fraction"}
										title="Fraction"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="size-4"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path
												d="M12 3a9 9 0 1 1 -7.795 13.498l7.795 -4.498v-9"
												fill="currentColor"
												stroke="none"
											/>
											<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
										</svg>
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Fractions</p>
								</TooltipContent>
							</Tooltip>
						</ButtonGroup>
					</span>
					{/* <Popover>
						<PopoverTrigger className="text-sm underline text-violet-800/70 dark:text-violet-400/70 hover:text-violet-800 dark:hover:text-violet-400">
							change units
						</PopoverTrigger>
						<PopoverContent side="top" align="start" collisionPadding={16}>
							<PopoverHeader>
								<PopoverTitle>Change Units</PopoverTitle>
								<PopoverDescription>
									Change how the quantities are displayed for this recipe.
								</PopoverDescription>
							</PopoverHeader>
							<div className="flex items-center gap-2 mt-4">
								<button
									className="btn btn-outline btn-animated shrink-0 flex items-center justify-center rounded-sm"
									onClick={() => updateUnits("decimal")}
									disabled={units === "decimal"}
									title="Decimal"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M17 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
										<path d="M10 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
										<path d="M5 16h.01" />
									</svg>
								</button>
								<button
									className="btn btn-outline btn-animated shrink-0 flex items-center justify-center rounded-sm"
									onClick={() => updateUnits("fraction")}
									disabled={units === "fraction"}
									title="Fraction"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path
											d="M12 3a9 9 0 1 1 -7.795 13.498l7.795 -4.498v-9"
											fill="currentColor"
											stroke="none"
										/>
										<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
									</svg>
								</button>
							</div>{" "}
						</PopoverContent>
					</Popover> */}
				</div>
			</div>
			<ul className="space-y-2">
				{recipeIngredients.map(({ name, quantity, unit, alternatives }) => {
					const unitDetails = unitDefinitions.find((u) => u.value === unit);
					const adjustedQuantity =
						Math.round(
							Number(quantity * (internalServings / servings)) * 1000,
						) / 1000;
					const baseQuantity = new Fraction(adjustedQuantity).simplify();
					const fraction = baseQuantity.toFraction(true);
					const decimal = baseQuantity.round(3).toString();
					const displayQuantity = units === "decimal" ? decimal : fraction;

					return (
						<li key={name} className="lowercase list-none text-lg relative">
							<span
								className={cn(
									"font-semibold font-mono text-amber-800 dark:text-amber-400 transition-colors",
									internalServings === servings &&
										"text-violet-800 dark:text-violet-400",
								)}
							>
								{displayQuantity}
							</span>{" "}
							{adjustedQuantity > 1 ? unitDetails?.plural : unitDetails?.name}{" "}
							{name}{" "}
							{(alternatives?.length ?? 0) > 0 && (
								<Popover>
									<PopoverTrigger className="text-sm underline text-violet-800/70 dark:text-violet-400/70 hover:text-violet-800 dark:hover:text-violet-400">
										alternatives
									</PopoverTrigger>
									<PopoverContent>
										<PopoverHeader>
											<PopoverTitle>Alternatives</PopoverTitle>
											<PopoverDescription className="sr-only">
												This is a list of alternatives for this ingredient.
											</PopoverDescription>
										</PopoverHeader>
										<ul className="list-disc list-inside mt-4">
											{alternatives?.map((alternative) => (
												<li key={alternative}>{alternative}</li>
											))}
										</ul>
									</PopoverContent>
								</Popover>
							)}
							<span className="absolute right-full mr-3 flex size-1 bg-black dark:bg-white rounded-full top-3"></span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const ReactiveIngredient = ({
	slug,
	ingredientIndex,
	servings,
	quantity,
	omitName,
}: {
	slug: string;
	ingredientIndex: number;
	servings: number;
	quantity?: number;
	omitName?: boolean;
}) => {
	const { recipeServings } = useServingsStore();
	const { units } = useRecipeUnitsStore();
	const internalServings = recipeServings[slug] ?? servings;
	const ingredient = ingredients[slug][ingredientIndex];
	const unitDetails = unitDefinitions.find((u) => u.value === ingredient.unit);
	const adjustedQuantity =
		((quantity ?? ingredient.quantity) / ingredient.quantity) *
		ingredient.quantity *
		(internalServings / servings);
	const baseQuantity = new Fraction(adjustedQuantity).simplify();
	const fraction = baseQuantity.toFraction(true);
	const decimal = baseQuantity.round(3).toString();
	const displayQuantity = units === "decimal" ? decimal : fraction;

	return (
		<span className="lowercase font-semibold text-violet-800 dark:text-violet-400">
			{displayQuantity}{" "}
			{adjustedQuantity > 1 ? unitDetails?.plural : unitDetails?.name}{" "}
			{!omitName && ingredient.name}
		</span>
	);
};

export const ReactiveServings = ({
	slug,
	servings,
	omitUnit,
	servingUnits,
}: {
	slug: string;
	servings: number;
	omitUnit?: boolean;
	servingUnits?: [string, string];
}) => {
	const { recipeServings } = useServingsStore();
	const internalServings = recipeServings[slug] ?? servings;

	return (
		<span className="font-semibold text-violet-800 dark:text-violet-400">
			{internalServings}{" "}
			{omitUnit || !servingUnits
				? ""
				: internalServings > 1
					? servingUnits[1]
					: servingUnits[0]}
		</span>
	);
};
