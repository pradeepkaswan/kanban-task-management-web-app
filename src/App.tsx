import Board from "./components/board"
import { Board as BoardType } from "./utils/types"
import ThemeToggle from "./components/theme-toggle"
import { Icons } from "./components/ui/icons"
import useBoardStore from "./store/board-store"
import { useState } from "react"
import { Button } from "./components/ui/button"

function App() {
	const { boards, currentBoard, setCurrentBoard } = useBoardStore()
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)

	const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible)

	return (
		<div className="flex flex-col md:flex-row">
			<aside
				className={`h-screen fixed inset-y-0 left-0 z-50 min-w-64 bg-neutral-100 dark:bg-neutral-800 transform transition-transform duration-300 ease-in-out ${
					isSidebarVisible ? "translate-x-0" : "-translate-x-full"
				} md:relative md:translate-x-0`}
			>
				<div className="p-4">
					<h2 className="text-heading-s">All Boards ({boards.length})</h2>
					<ul className="space-y-2">
						{boards.map((board: BoardType) => (
							<li
								key={board.name}
								className={`cursor-pointer rounded-r-full ${
									board.name === currentBoard
										? "bg-primary text-neutral-100"
										: ""
								}`}
								onClick={() => setCurrentBoard(board.name)}
							>
								<Icons.board className="inline-block mr-2" />
								{board.name}
							</li>
						))}
					</ul>
					<button onClick={() => {}}>
						<Icons.board className="inline-block mr-2" />
						<div>
							<Icons.add className="inline-block mr-2" />
							Create New Board
						</div>
					</button>
				</div>
				<div className="absolute bottom-0 left-4 right-4">
					<ThemeToggle />
				</div>
			</aside>

			<div className="flex flex-1 flex-col">
				<header className="flex items-center justify-between bg-neutral-100 h-16 dark:bg-neutral-600 md:h-20">
					<div
						className="flex items-center ml-4"
						onClick={toggleSidebar}
					>
						<Icons.logoMobile />
						<h1 className="text-heading-l ml-4 mr-2 text-neutral-800 dark:text-neutral-100">
							{currentBoard}
						</h1>
						<Icons.down />
					</div>
					<div className="flex items-center gap-4 mr-4">
						<Button className="flex justify-center items-center px-4 h-8 | md:h-12 md:px-8">
							<Icons.add className="md:mr-1" />
							<span className="hidden | md:inline md:text-heading-m">
								Add New Task
							</span>
						</Button>
						<Icons.ellipses />
					</div>
				</header>

				<main className="flex-1 overflow-x-auto p-4 | md:p-6">
					<Board />
				</main>
			</div>
		</div>
	)
}

export default App
