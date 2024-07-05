import { useState } from "react"
import { IBoard, IColumn } from "../types"
import { Icons } from "./ui/icons"
import Column from "./column"

const Board: React.FC<IBoard> = ({ name, columns }) => {
	const [boardColumns] = useState<IColumn[]>(columns)

	return (
		<div>
			<h1>{name}</h1>
			<div>
				{boardColumns.map((column) => (
					<Column {...column} />
				))}
				<button>
					<Icons.add /> Add New Column
				</button>
			</div>
		</div>
	)
}

export default Board
