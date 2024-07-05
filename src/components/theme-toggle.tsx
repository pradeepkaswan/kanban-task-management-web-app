import { useTheme } from "../hooks/use-theme"
import { Icons } from "./ui/icons"

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className="flex justify-center items-center gap-6 py-3.5 rounded-md bg-neutral-200 dark:bg-neutral-700">
			<Icons.sun />
			<button
				role="switch"
				onClick={toggleTheme}
				className="relative inline-flex h-5 w-10 items-center rounded-full transition-colors bg-primary"
			>
				<span
					className={`${
						theme === "dark" ? "translate-x-6" : "translate-x-1/4"
					} inline-block h-3.5 w-3.5 transform rounded-full bg-neutral-100 transition-transform`}
				></span>
			</button>
			<Icons.moon />
		</div>
	)
}

export default ThemeToggle
