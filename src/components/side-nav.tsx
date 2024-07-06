import ThemeToggle from "./theme-toggle"
import { Icons } from "./ui/icons"
import useBoardStore from "../store/board-store"
import { Board } from "../utils/types"
import useMediaQuery from "../hooks/use-media-query"

interface SideNavProps {
	isVisible: boolean
}

const SideNav: React.FC<SideNavProps> = ({ isVisible }) => {
	const isMobile = useMediaQuery("(max-width: 767)")
	const { boards, currentBoard, setCurrentBoard } = useBoardStore()

	const modalClasses = `
    fixed flex md:border-r md:h-full flex-col gap-4 mt-20 rounded-lg md:rounded-none z-50 w-64 bg-neutral-100 dark:bg-neutral-600 p-4 md:p-6 transition-transform duration-300 ease-in-out
    ${
			isMobile
				? isVisible
					? "translate-x-0"
					: "-translate-x-full"
				: "translate-x-0"
		}
    ${isMobile ? "shadow-lg" : ""}
  `
	return (
		<>
			{isMobile && isVisible && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={() => {}}
				/>
			)}
			<aside className={modalClasses}>
				<h2 className="text-heading-s">All Boards ({boards.length})</h2>
				<ul>
					{boards.map((board: Board) => (
						<li
							key={board.name}
							className={`cursor-pointer text-heading-m h-12 flex items-center rounded-r-full ${
								board.name === currentBoard ? "bg-primary text-neutral-100" : ""
							}`}
							onClick={() => setCurrentBoard(board.name)}
						>
							<Icons.board className="inline-block mr-3" />
							{board.name}
						</li>
					))}
				</ul>
				<button
					className="flex text-primary text-heading-m mb-2"
					onClick={() => {}}
				>
					<Icons.board className="inline-block mr-2" />
					<div>+ Create New Board</div>
				</button>
				<ThemeToggle />
			</aside>
		</>
	)
}

export default SideNav
