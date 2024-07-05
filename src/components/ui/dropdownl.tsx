import { Icons } from "./icons"

type TaskStatus = "todo" | "doing" | "done"

interface DropdownProps {
	value: TaskStatus
	onChange: (value: TaskStatus) => void
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
	return (
		<div className="relative">
			<select
				value={value}
				onChange={(e) => onChange(e.target.value as TaskStatus)}
			>
				<option value="todo">ToDo</option>
				<option value="doing">Doing</option>
				<option value="done">Done</option>
			</select>
			<Icons.down className="absolute" />
		</div>
	)
}

export default Dropdown
