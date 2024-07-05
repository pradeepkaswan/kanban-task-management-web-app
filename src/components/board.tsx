import { Icons } from "./ui/icons"
import Column from "./column"
import useBoardStore from "../store/board-store"

const Board: React.FC = () => {
	const { boards, currentBoard } = useBoardStore()
	const board = boards.find((b) => b.name === currentBoard)

	if (!board) return <div>No board selected</div>

	return (
		<div className="flex gap-6">
			{board.columns.map((column) => (
				<Column
					key={column.name}
					column={column}
				/>
			))}
			<div className="flex justify-center items-center min-w-[280px] rounded-md bg-gradient-to-b from-[#E9EFFA] to-[rgba(233,239,250,0.50)] ">
				<button className="flex">
					<Icons.add /> New Column
				</button>
			</div>
		</div>
	)
}

export default Board
