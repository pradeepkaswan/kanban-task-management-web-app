import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";
import { Board } from "../types";

interface BoardsState {
  boards: Board[];
}

const initialState: BoardsState = {
  boards: data.boards,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
    editBoard: (state, action) => {
      const { boardId, name } = action.payload;
      const board = state.boards[boardId];
      if (board) {
        board.name = name;
      }
    },
    removeBoard: (state, action) => {
      const { boardId } = action.payload;
      state.boards.splice(boardId, 1);
    },
    addColumn: (state, action) => {
      const { boardId, column } = action.payload;
      const board = state.boards[boardId];
      if (board) {
        board.columns.push(column);
      }
    },
    addTask: (state, action) => {
      const { boardId, columnId, task } = action.payload;
      const board = state.boards[boardId];
      if (board) {
        const column = board.columns[columnId];
        if (column) {
          column.tasks.push(task);
        }
      }
    },
    editTask: (state, action) => {
      const { boardId, columnId, taskId, title, description, status } =
        action.payload;
      const board = state.boards[boardId];
      if (board) {
        const column = board.columns[columnId];
        if (column) {
          const task = column.tasks[taskId];
          if (task) {
            task.title = title;
            task.description = description;
            task.status = status;
          }
        }
      }
    },
    removeTask: (state, action) => {
      const { boardId, columnId, taskId } = action.payload;
      const board = state.boards[boardId];
      if (board) {
        const column = board.columns[columnId];
        if (column) {
          column.tasks.splice(taskId, 1);
        }
      }
    },
  },
});

export const {
  addBoard,
  editBoard,
  removeBoard,
  addColumn,
  addTask,
  editTask,
  removeTask,
} = boardsSlice.actions;

export default boardsSlice.reducer;
