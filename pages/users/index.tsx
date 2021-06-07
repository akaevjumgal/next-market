import { UserCard } from '@/components/user-card/UserCard'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { User } from '@/models/User.model'
import { http } from '@/utils/fetcher'
import { useRouter } from 'next/router'

export default function UsersPage({ users = [] }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter()

	return (
		<div className='bg-wall p-4 grid grid-cols-auto-fill gap-4'>
			{ users.map(user => (
				<UserCard
					key={user.id}
					user={user}
					onClick={() => router.push(`/users/${user.id}`)}
				/>
			)) }
		</div>
	)
}

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
	const { data: users = [] } = await http.get<User[]>('/users')
	
	return {
		props: { users }
	}
}
