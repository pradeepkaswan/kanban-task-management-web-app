import { ITask } from "../types"

const Task: React.FC<ITask> = ({ title }) => {
	// const completedTasks = subTasks.filter(
	// 	(subTask) => subTask.isCompleted,
	// ).length

	const completedTasks = 5
	const subTasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div className="px-4 py-6 bg-neutral-100">
			<h3>{title}</h3>
			<p>{`${completedTasks} of ${subTasks.length} subtasks`}</p>
		</div>
	)
}

export default Task
