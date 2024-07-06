import { Column as ColumnType } from "../utils/types"
import Task from "./task"

interface ColumnProps {
	column: ColumnType
}

const Column: React.FC<ColumnProps> = ({ column }) => {
	return (
		<div className="min-w-[280px]">
			<h2 className="text-heading-s uppercase my-6">
				{column.name} ({column.tasks.length})
			</h2>
			<div className="flex flex-col gap-5">
				{column.tasks.map((task) => (
					<Task
						key={task.title}
						task={task}
						columnName={column.name}
					/>
				))}
			</div>
		</div>
	)
}

export default Column
