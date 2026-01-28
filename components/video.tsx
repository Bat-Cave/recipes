import MuxPlayer from "@mux/mux-player-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Video({
	className,
	accentColor = "#a684ff",
	...props
}: ComponentProps<typeof MuxPlayer>) {
	return (
		<div className={cn("w-full h-auto rounded overflow-hidden my-2")}>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						mux-player {
							--media-object-fit: cover;
							--media-object-position: center;
						}
					`,
				}}
			/>
			<MuxPlayer
				accentColor={accentColor}
				{...props}
				className={cn(
					"w-full flex items-center justify-center max-h-[calc(100dvh-88px)] aspect-9/16",
					className,
				)}
			/>
		</div>
	);
}
