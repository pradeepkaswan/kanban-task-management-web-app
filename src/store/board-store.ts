import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Board } from "../utils/types"
import data from "../utils/data.json"

interface BoardState {
	boards: Board[]
	currentBoard: string
	addBoard: (board: Board) => void
	updateBoard: (board: Board) => void
	deleteBoard: (boardName: string) => void
	setCurrentBoard: (boardName: string) => void
	// addColumn: (column: Column) => void
	// addTask: (task: Task) => void
	moveTask: (taskTitle: string, fromColumn: string, toColumn: string) => void
}

localStorage.removeItem("board-storage")

const useBoardStore = create<BoardState>()(
	persist(
		(set) => ({
			boards: data.boards as Board[],
			currentBoard: data.boards[0].name,
			addBoard: (board) =>
				set((state) => ({ boards: [...state.boards, board] })),
			updateBoard: (updatedBoard) =>
				set((state) => ({
					boards: state.boards.map((board) =>
						board.name === updatedBoard.name ? updatedBoard : board,
					),
				})),
			deleteBoard: (boardName) =>
				set((state) => ({
					boards: state.boards.filter((board) => board.name !== boardName),
				})),
			setCurrentBoard: (boardName) => set({ currentBoard: boardName }),
			moveTask: (taskTitle, fromColumn, toColumn) =>
				set((state) => {
					const currentBoardIndex = state.boards.findIndex(
						(board) => board.name === state.currentBoard,
					)
					const updatedBoard = { ...state.boards[currentBoardIndex] }
					const fromColumnIndex = updatedBoard.columns.findIndex(
						(col) => col.name === fromColumn,
					)
					const toColumnIndex = updatedBoard.columns.findIndex(
						(col) => col.name === toColumn,
					)
					const taskIndex = updatedBoard.columns[
						fromColumnIndex
					].tasks.findIndex((task) => task.title === taskTitle)
					const [task] = updatedBoard.columns[fromColumnIndex].tasks.splice(
						taskIndex,
						1,
					)
					task.status = toColumn
					updatedBoard.columns[toColumnIndex].tasks.push(task)
					const newBoards = [...state.boards]
					newBoards[currentBoardIndex] = updatedBoard
					return { boards: newBoards }
				}),
		}),
		{
			name: "board-storage",
		},
	),
)

export default useBoardStore
