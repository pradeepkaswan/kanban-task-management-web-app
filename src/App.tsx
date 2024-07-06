import Board from "./components/board"
import { Icons } from "./components/ui/icons"
import useBoardStore from "./store/board-store"
import { useState } from "react"
import { Button } from "./components/ui/button"
import SideNav from "./components/side-nav"
import useMediaQuery from "./hooks/use-media-query"

function App() {
	const { currentBoard } = useBoardStore()
	const isMobile = useMediaQuery("(max-width: 767)")
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const toggleSidebar = () => setIsVisible(!isVisible)

	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<SideNav isVisible={isVisible} />

			<div className="flex flex-1 flex-col">
				<header className="flex items-center justify-between bg-neutral-100 h-16 dark:bg-neutral-600 md:border-b md:h-20">
					<div className="flex items-center ml-4 | md:ml-6">
						{isMobile ? (
							<Icons.logoMobile />
						) : (
							<div className="hidden md:block w-[232px] border-r">
								<Icons.logoLight />
							</div>
						)}
						<h1 className="text-heading-l md:text-[20px] ml-4 mr-2 text-neutral-800 dark:text-neutral-100">
							{currentBoard}
						</h1>
						<Icons.down
							onClick={toggleSidebar}
							className="md:hidden"
						/>
					</div>
					<div className="flex items-center gap-4 mr-4 | md:mr-6">
						<Button className="flex justify-center items-center px-4 h-8 | md:h-12 md:px-8">
							<Icons.add className="md:hidden" />
							<span className="hidden | md:inline md:text-heading-m">
								+ Add New Task
							</span>
						</Button>
						<Icons.ellipses />
					</div>
				</header>

				<main className="flex-1 overflow-x-auto mx-4 | md:mx-6">
					<Board />
				</main>
			</div>
		</div>
	)
}

export default App
