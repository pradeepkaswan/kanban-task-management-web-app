import Board from "./components/board"
import data from "../public/data.json"

function App() {
	return (
		<div>
			<header></header>
			<Board
				id={data.boards[0].id}
				name={data.boards[0].name}
				columns={data.boards[0].columns}
			/>
		</div>
	)
}

export default App
