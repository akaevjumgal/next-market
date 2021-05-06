import {FC} from 'react'

export const Card: FC = ({ children }) => {
	return (
		<div className='bg-white p-4 shadow rounded'>
			{children}
		</div>
	)
}
