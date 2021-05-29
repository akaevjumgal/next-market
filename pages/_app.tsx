import '../styles/globals.css'
import {AppProps} from 'next/app'
import { useState, Fragment } from 'react'
import { Router } from 'next/router'
import { PageLoader } from '@/components/page-loader/PageLoader'

function MyApp({Component, pageProps}: AppProps) {
	const [loading, setLoading] = useState(false)
	
	Router.events.on('routeChangeStart', (url) => {
		setLoading(true)
	})
	Router.events.on('routeChangeComplete', (url) => {
		setLoading(false)
	})
	
	return (
		<Fragment>
			{ loading && <PageLoader/> }
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
