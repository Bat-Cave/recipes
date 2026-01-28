// store.ts
import { create } from "zustand";

// Define types for state & actions
interface ServingsState {
	recipeServings: Record<string, number>;
	updateRecipeServing: (recipeSlug: string, servings: number) => void;
}

// Create store using the curried form of `create`
export const useServingsStore = create<ServingsState>()((set) => ({
	recipeServings: {},
	updateRecipeServing: (recipeSlug: string, servings: number) =>
		set((state) => ({
			recipeServings: {
				...state.recipeServings,
				[recipeSlug]: servings,
			},
		})),
}));
