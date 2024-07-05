import { Task as TaskType } from "../utils/types"

interface TaskProps {
	task: TaskType
	columnName: string
}

const Task: React.FC<TaskProps> = ({ task }) => {
	// const { boards, currentBoard, moveTask } = useBoardStore()
	// const board = boards.find((b) => b.name === currentBoard)

	const completedTasks = task.subtasks.filter(
		(subtask) => subtask.isCompleted,
	).length

	return (
		<div
			draggable
			className="flex flex-col gap-2 px-4 py-6  bg-neutral-100 dark:bg-neutral-600 rounded-lg shadow-[0_4px_6px_0px_rgba(54,78,126,0.10)]"
		>
			<h3 className="text-heading-m text-neutral-800 dark:text-neutral-100">
				{task.title}
			</h3>
			<p>{`${completedTasks} of ${task.subtasks.length} subtasks`}</p>
		</div>
	)
}

export default Task
