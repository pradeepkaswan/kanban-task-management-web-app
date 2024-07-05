import { useState } from "react"

interface InputProps {
	placeholder?: string
	errorMessage?: string
	onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({
	placeholder,
	errorMessage = "Can't be empty",
	onChange,
}) => {
	const [inputValue, setInputValue] = useState<string>("")
	const [active, setActive] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		setError(false)
		onChange?.(e.target.value)
	}

	const handleInputBlur = () => {
		setActive(false)
		if (inputValue.trim() === "") {
			setError(true)
		}
	}

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				onFocus={() => setActive(true)}
				onBlur={handleInputBlur}
				placeholder={placeholder}
				className={`relative w-full px-4 py-2 border rounded-[4px] bg-transparent  ${
					active ? "" : error ? "border-error" : "border-neutral-400 opacity-25"
				}`}
			/>
			{error && <p className="absolute text-error">{errorMessage}</p>}
		</div>
	)
}

export default Input
