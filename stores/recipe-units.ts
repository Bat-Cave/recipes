// store.ts
import { create } from "zustand";

// Define types for state & actions
interface RecipeUnitsState {
	units: "decimal" | "fraction";
	updateUnits: (unit: "decimal" | "fraction") => void;
}

// Create store using the curried form of `create`
export const useRecipeUnitsStore = create<RecipeUnitsState>()((set) => ({
	units: "fraction",
	updateUnits: (units: "decimal" | "fraction") => set({ units }),
}));
