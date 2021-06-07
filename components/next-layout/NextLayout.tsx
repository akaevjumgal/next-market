import Head from 'next/head'
import { FC } from 'react'

const DEFAULT_PAGE_TITLE = 'Next Market'

interface NextLayoutProps {
	title?: string
}

export const NextLayout: FC<NextLayoutProps> = ({ title, children = DEFAULT_PAGE_TITLE }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main>{ children }</main>
		</div>
	)
}
