import { create } from "zustand"
import { persist } from "zustand/middleware"
import { IBoard } from "../types"

interface BoardState {
	boards: IBoard[]
	currentBoard: string | null
	addBoard: (board: IBoard) => void
	updateBoard: (board: IBoard) => void
	deleteBoard: (boardId: string) => void
	setCurrentBoard: (boardId: string) => void
}

const useBoardStore = create<BoardState>()(
	persist(
		(set) => ({
			boards: [],
			currentBoard: null,
			addBoard: (board) =>
				set((state) => ({ boards: [...state.boards, board] })),
			updateBoard: (board) =>
				set((state) => ({
					boards: state.boards.map((b) => (b.id === board.id ? board : b)),
				})),
			deleteBoard: (boardId) =>
				set((state) => ({
					boards: state.boards.filter((b) => b.id !== boardId),
				})),
			setCurrentBoard: (boardId) => set({ currentBoard: boardId }),
		}),
		{
			name: "board-storage",
		},
	),
)

export default useBoardStore
