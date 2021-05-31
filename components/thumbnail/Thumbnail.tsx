import { FC } from 'react'

interface ThumbnailProps {
	url: string
	title?: string
	caption?: string
}

export const Thumbnail: FC<ThumbnailProps> = ({ url, title = '', caption = '' }) => {
	return (
		<div className='flex'>
			<img className='h-10 rounded-full' src={url} alt={title}/>
			<div className='px-3'>
				<h2>{title}</h2>
				<p>{caption}</p>
			</div>
		</div>
	)
}
