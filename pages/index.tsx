import { UserCard } from 'components/user-card/UserCard'
import { User } from 'models/User.model'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router'
import { http } from '../utils/fetcher'

const Home = ({ users = [] }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter()
	return (
		<div className={ styles.container }>
			<Head>
				<title>Next Market</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='bg-wall p-4 grid grid-cols-auto-fill gap-4'>
				{ users.map(user => (
					<UserCard
						key={user.id}
						user={user}
						onClick={() => router.push(`/users/${user.id}`)}
					/>
				)) }
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<{ users: User[] }> = async (context) => {
	const { data: users = [] } = await http.get<User[]>('/users')

	return {
		props: { users }
	}
}

export default Home
