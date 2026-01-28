import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	Ingredients,
	ReactiveIngredient,
	ReactiveServings,
} from "@/components/ingredients";
import { CustomMDX } from "@/components/mdx";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Video from "@/components/video";
import { getRecipes } from "../../utils";
import { CategorySlug, categories } from "../categories";

export const metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
};

export default async function RecipePage({
	params,
}: {
	params: Promise<{ category: CategorySlug; slug: string }>;
}) {
	const { category, slug } = await params;
	const recipe = getRecipes(category).find((r) => r.slug === slug);

	const validCategory = categories.find((c) => c.slug === category);
	if (!validCategory) {
		return notFound();
	}

	if (!recipe) {
		return notFound();
	}

	return (
		<section className="max-w-xl mx-auto w-full">
			<Link
				href={`/recipes/${category}`}
				className="flex items-center gap-2 hover:underline"
			>
				<ArrowLeft />
				<span>
					Back to{" "}
					<span className="font-semibold text-violet-800 dark:text-violet-400">
						{validCategory.name}
					</span>
				</span>
			</Link>
			<article className="prose">
				<CustomMDX
					source={recipe.content}
					components={{
						Ingredients,
						ReactiveIngredient,
						ReactiveServings,
						Video,
						Collapsible,
						CollapsibleTrigger,
						CollapsibleContent,
					}}
				/>
			</article>
		</section>
	);
}
