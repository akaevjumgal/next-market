import { FC, HTMLProps } from 'react'
import classNames from 'classnames'

export interface CardProps extends HTMLProps<HTMLDivElement> {}

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<div className={classNames('bg-white p-4 shadow rounded', className)} {...props}>
			{children}
		</div>
	)
}
