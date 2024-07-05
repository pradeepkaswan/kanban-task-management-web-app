import { ITask } from "../types"
import Task from "./task"

interface ColumnProps {
	name: string
	tasks: ITask[]
}

const Column: React.FC<ColumnProps> = ({ name, tasks }) => {
	return (
		<div>
			<h2>{name}</h2>
			<div>
				{tasks.map((task) => (
					<Task {...task} />
				))}
			</div>
		</div>
	)
}

export default Column
