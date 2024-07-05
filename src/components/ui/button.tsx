import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "../../utils/cn"

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full text-body-m disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-neutral-100 hover:bg-primary-light",
				secondary: "bg-neutral-100 text-primary hover:bg-neutral-100",
				destructive: "bg-red text-neutral-100 hover:bg-red-light",
				link: "bg-transparent text-product-400 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 py-2",
				lg: "h-12 py-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		const Comp = "button"
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	},
)

Button.displayName = "Button"

export { Button, buttonVariants }
