import { useDispatch, useSelector } from "react-redux";
import { Board } from "./components/board";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const boards = useSelector((state: RootState) => state.boards.boards);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <Header boards={boards} />
      <div className="flex">
        <Sidebar boards={boards} />
        <Board boards={boards} />
      </div>
    </div>
  );
}

export default App;
