import '../styles/globals.css'
import {AppProps} from 'next/app'
import { useState, Fragment } from 'react'
import { Router } from 'next/router'
import { PageLoader } from '@/components/page-loader/PageLoader'
import { NextLayout } from '@/components/next-layout/NextLayout'

export default function App({Component, pageProps}: AppProps) {
	const [loading, setLoading] = useState(false)
	
	Router.events.on('routeChangeStart', (url) => {
		setLoading(true)
	})
	Router.events.on('routeChangeComplete', (url) => {
		setLoading(false)
	})
	
	return (
		<NextLayout>
			{ loading && <PageLoader/> }
			<Component {...pageProps} />
		</NextLayout>
	)
}
