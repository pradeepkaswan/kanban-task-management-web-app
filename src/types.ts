type Status = "Todo" | "Doing" | "Done"

export interface ITask {
	title: string
	description: string
	status: Status
	subTasks: { title: string; isCompleted: boolean }[]
}

export interface IColumn {
	name: string
	tasks: ITask[]
}

export interface IBoard {
	id: string
	name: string
	columns: IColumn[]
}
