import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import type {GetStaticProps, InferGetStaticPropsType} from 'next'
import {Card} from '../components/Card'
import {User} from '../models/User.model'

const Home = ({ users = [] }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<div className='bg-wall p-4 grid grid-cols-auto-fill gap-4'>
				{users.map(user => (
					<Card key={user.id}>
						<b>{user.name}</b>
						<p>{user.username}</p>
						<p>{user.email}</p>
						<p>{user.address.city}</p>
					</Card>
				))}
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
	const { data: users } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')

	return {
		props: { users }
	}
}

export default Home
